---
slug: phasestream-2-cyberapocalypse-2021-ctf
title: Phasestream 2 - Cyberapocalypse 2021 CTF
description: This is a writeup for the challenge Phasestream 2, part of the Hack the box's Cyberapocalypse CTF 2021, category Crypto.
authors: kiroki
tags: [Cyber Security, CTF]
---

This is a writeup for the challenge Phasestream 2, part of the Hack the box's Cyberapocalypse CTF 2021, category Crypto.

### Prompt

The aliens have learned of a new concept called "security by obscurity". Fortunately for us they think it is a great idea and not a description of a common mistake. We've intercepted some alien comms and think they are XORing flags with a single-byte key and hiding the result inside 9999 lines of random data, Can you find the flag?

<!-- truncate -->

### Recon

We have a file with 9999 lines of hex-encoded strings. We know so far, that one of these lines contain an encrypted flag, and that the flag is 1 byte long. We also know that the flag starts with `CHTB`.

This information gives us the following idea. We can loop through all 256 possible keys (in ASCII), and XOR the first 4 values of each line (8 symbols of each line, since it's encoded in hex). If that encoded string is `CHTB`, we've found both our key and our line which contains the flag.

### Solution

Let's create a logic flow:

1. Read a line from `output.txt`
2. Take the first 8 characters of it, and transform them from hex into their ASCII codes
3. XOR those 4 characters with one of 256 possible ASCII codes
4. If we find that this equals `CHTB`, we've found our line and key
5. We can now decrypt our line with the key we've found

```python
#!/usr/bin/env python3

# Flag starts with CHTB which is 67 72 84 66 in ASCII or 0x43 0x48 0x54 0x42 in hex
# The key is 1 byte long

CHTB = [67, 72, 84, 66]

keys = [i for i in range(256)]

def findKeyAndLine():
  with open('output.txt') as f:
    foundKey = ''
    foundLine = ''
    for line in f:
      candidateC = int(line[0:2], 16)
      candidateH = int(line[2:4], 16)
      candidateT = int(line[4:6], 16)
      candidateB = int(line[6:8], 16)

      for key in keys:
        condition = candidateC ^ key == CHTB[0] and candidateH ^ key == CHTB[1] and candidateT ^ key == CHTB[2] and candidateB ^ key == CHTB[3]
        if condition:
          foundKey = key
          foundLine = line[:-1]
          break
    print('Key:', foundKey, 'Line:', foundLine)
  return {'key': foundKey, 'line': foundLine}

def decrypt(keyAndLine):
  flag = []
  key = keyAndLine['key']
  line = keyAndLine['line']

  for ind in range(0, len(line), 2):
    hexChar = line[ind:ind+2]
    byte = int(hexChar, 16)
    asciiNum = byte ^ key
    flag.append(chr(asciiNum))

  print('Flag:', ''.join(flag))

decrypt(findKeyAndLine())
```

And so, we find our flag

```sh
Key:  69 Line:  060d11073e2b76762129761a742b1a711a2d713c363171262e38
Flag:  CHTB{n33dl3_1n_4_h4yst4ck}
```