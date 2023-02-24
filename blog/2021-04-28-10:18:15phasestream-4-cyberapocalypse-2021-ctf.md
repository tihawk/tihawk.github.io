---
slug: phasestream-4-cyberapocalypse-2021-ctf
title: Phasestream 4 - Cyberapocalypse 2021 CTF
description: This is a writeup for the challenge Phasestream 4, part of the Hack the box's Cyberapocalypse CTF 2021, category Crypto.
authors: kiroki
tags: [Cyber Security, CTF]
---

This is a writeup for the challenge Phasestream 4, part of the Hack the box's Cyberapocalypse CTF 2021, category Crypto.

### Prompt

The aliens saw us break PhaseStream 3 and have proposed a quick fix to protect their new cipher.

<!-- truncate -->

### Recon

What we see here, is a direct continuation of the Phasestream 3 challenge. You should probably check out my write-up of that one, if you don't know the concept of repating keystream attacks.

[Phasestream 3 - Cyberapocalypse 2021 CTF](/blog/phasestream-3-cyberapocalypse-2021-ctf/)

The only main difference from this last challenge, is that we no longer have the `test` plaintext string readily available to us. But we still have its encrypted value in our `output.txt`

```sh
cat output.txt 2d0fb3a56aa66e1e44cffc97f3a2e030feab144124e73c76d5d22f6ce01c46e73a50b0edc1a2bd243f9578b745438b00720870e3118194cbb438149e3cc9c0844d640ecdb1e71754c24bf43bf3fd0f9719f74c7179b6816e687fa576abad1955 2767868b7ebb7f4c42cfffa6ffbfb03bf3b8097936ae3c76ef803d76e11546947157bcea9599f826338807b55655a05666446df20c8e9387b004129e10d18e9f526f71cabcf21b48965ae36fcfee1e820cf1076f65
```

The code of the encryptor itself hasn't changed other than not showing the test text.

```python
from Crypto.Cipher import AES
from Crypto.Util import Counter
import os

KEY = os.urandom(16)


def encrypt(plaintext):
    cipher = AES.new(KEY, AES.MODE_CTR, counter=Counter.new(128))
    ciphertext = cipher.encrypt(plaintext)
    return ciphertext.hex()


with open('test_quote.txt', 'rb') as f:
    test_quote = f.read().strip()
print(encrypt(test_quote))

with open('flag.txt', 'rb') as f:
    flag = f.read().strip()
print(encrypt(flag))
```

But we do get the information, that the test string is a **quote**.

### Analysis

Well, our first steps of finding the solution are pretty much the same as in Phasestream 3:

1. We XOR the two ciphertexts from output.txt together
2. Since we know that our flag starts with `CHTB{`, we will XOR the result of `1.` with it, to see the first letters of our quote.

```python
#!/usr/bin/env python3

ciphertext1 = '2d0fb3a56aa66e1e44cffc97f3a2e030feab144124e73c76d5d22f6ce01c46e73a50b0edc1a2bd243f9578b745438b00720870e3118194cbb438149e3cc9c0844d640ecdb1e71754c24bf43bf3fd0f9719f74c7179b6816e687fa576abad1955'

ciphertext2 = '2767868b7ebb7f4c42cfffa6ffbfb03bf3b8097936ae3c76ef803d76e11546947157bcea9599f826338807b55655a05666446df20c8e9387b004129e10d18e9f526f71cabcf21b48965ae36fcfee1e820cf1076f65'

flagStart = b'CHTB{'.hex()

def xor(hex1, hex2, getAscii = False):
  result = []

  for ind in range(0, len(hex1), 2):
    longIndex = ind
    shortIndex = ind%len(hex2)
    hexChar1 = hex1[longIndex:longIndex+2]
    byte1 = int(hexChar1, 16)

    hexChar2 = hex2[shortIndex:shortIndex+2]
    byte2 = int(hexChar2, 16)

    asciiNum = byte1 ^ byte2
    result.append(chr(asciiNum))


  out = ''.join(result)
  if getAscii:
    print('Result:', out)
    return out
  else:
    out = out.encode('utf-8').hex()
    print('Result:', out)
    return out
    

xored = xor(ciphertext2, ciphertext1)

startQuote = xor(xored, flagStart, True)
```

```sh
Result: 0a68352e141d1152060003310c1d500b0d131d38124900003a52121a010900734b070c07543b45020c1d7f0213162b56144c1d111d0f074c043c06002c184e1b1f0b7f070d150c1c541117543c13111515064b1e1c
Result: I alo^YD{@yX_+HEG_CQTBAZNCrC;EwDoyOU+@hUcV7^YIM|LhD{oPYdH7SOnOTSltGSnVN\g
```

So, from our analysis, we can see that the `test_quote` string starts with "I alo". I think it's easy to assume, that the first two words will be "I alone".

### Solution

This one took a bit of research. We had to find a popular quote, which starts with "I alone". After a couple of tries, I found that to be a quote by _Mother Theresa_, which reads as follows:

> I alone cannot change the world, but I can cast a stone across the water to create many ripples.

So, we can take our XOR result from step 1 of the analysis, and XOR it with this quote.

This gives us the flag to be as follows

```sh
Result: 0a68352e141d1152060003310c1d500b0d131d38124900003a52121a010900734b070c07543b45020c1d7f0213162b56144c1d111d0f074c043c06002c184e1b1f0b7f070d150c1c541117543c13111515064b1e1c
Result: CHTB{stream_ciphers_with_reused_keystreams_are_vulnerable_to_known_plaintext_attacks}
```

import DonateCard from '@site/src/components/DonateCard';

<DonateCard/>