---
slug: alien-camp-cyberapocalypse-2021-ctf
title: Alien Camp - Cyberapocalypse 2021 CTF
description: This is a writeup for the Alien Camp challenge, part of the Hack the box's Cyberapocalypse CTF 2021, category Misc.
authors: kiroki
tags: [Cyber Security, CTF]
---

This is a writeup for the Alien Camp challenge, part of the Hack the box's Cyberapocalypse CTF 2021, category Misc.

### Prompt

The Ministry of Galactic Defense now accepts human applicants for their specialised warrior unit, in exchange for their debt to be erased. We do not want to subject our people to this training and to be used as pawns in their little games. We need you to answer 500 of their questions to pass their test and take them down from the inside.

<!-- truncate -->

### Recon

We're given a box to which we can connect with `netcat`. On this machine, there's a service which has two options:

1. Choosing option 1 will give us a list of numbers associated with emojis.
2. Choosing option 2 starts an exam, in which we need to supply the answer to 500 arithmetic problems. The only catch is, that the numbers in the equations are represented with the emojis from option 1.

Additionally, every time we connect we will have a different set of emoji -> number dictionary entries.

If we try to manually translate the emojis into numbers, and then supply the answer to an equation, we will be (likely) told that we're too slow.

### Solution

Therefore, we need to automate the process. The solution will contain the following steps:

1. Once connected, we will check the emoji -> number relation in option 1, and record it into a dictionary.
2. We then start the exam.
3. Once supplied with an equation, we do some string manipulation to extract the emojis and arithmetic operations, and translate the emojis into numbers.
4. We evaluate the equation, and supply the answer as number.
5. We repeat step 3 and 4 500 times to get the flag.

```python
import socket
import time

HOST = '46.101.44.190'
PORT = 32223

# a generic function to get the response as a string
def receive(s):
  res = ''
  data = s.recv(1024)
  res += data.decode()
  return res

# generate an emoji -> number dictionary
def getCode(res):
  lines = res.split('\n')
  arr = lines[2].split(' ')[:-1]
  emojis = arr[0::3]
  numbers = arr[2::3]
  dic = dict(zip(emojis, numbers))
  return dic

# solve the equation we're provided with
def solveEquation(res, dic):
  lines = res.split('\n')
  arr = lines[5].split(' ')[:-1]
  print(arr)
  values = arr[0:-1:2]
  decodedValues = []
  for value in values:
    decodedValues.append(dic[value])
  expressions = arr[1:-2:2]
  expressions
  print(decodedValues)
  print(expressions)
  index = 0
  equation = ''
  for value in decodedValues:
    equation += value
    if index < len(expressions):
      equation += expressions[index]
    index += 1
  return str(eval(equation))+'\n'

# main
with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
    s.connect((HOST, PORT))
    s.settimeout(5)
    res = ''

    receive(s)
    time.sleep(0.1)

	# go to option 1, to generate our dictionary
    buf = '1'
    buf += '\n'
    print(buf)
    s.send(buf.encode('utf-8'))

    time.sleep(0.5)
    res = receive(s)
    dic = getCode(res)

	# start the exam
    buf = '2'
    buf += '\n'
    print(buf)
    s.send(buf.encode('utf-8'))

	# keep answering questions until connection is closed
    while True:
      time.sleep(0.1)
      res = receive(s)
      print(res)
      answer = solveEquation(res, dic)
      print(answer)
      time.sleep(0.1)
      s.send(answer.encode('utf-8'))

    print ("Connection closed.")
```

By the end, we will get the flag in a response

```sh
CHTB{3v3n_4l13n5_u53_3m0j15_t0_c0mmun1c4t3}
```

import DonateCard from '@site/src/components/DonateCard';

<DonateCard/>