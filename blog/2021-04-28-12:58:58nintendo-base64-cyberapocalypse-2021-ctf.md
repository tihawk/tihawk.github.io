---
slug: nintendo-base64-cyberapocalypse-2021-ctf
title: Nintendo Base64 - Cyberapocalypse 2021 CTF
description: This is a writeup for the challenge Nintendo Base64, part of the Hack the box's Cyberapocalypse CTF 2021, category Crypto.
authors: kiroki
tags: [Cyber Security, CTF]
---

This is a writeup for the challenge Nintendo Base64, part of the Hack the box's Cyberapocalypse CTF 2021, category Crypto.

### Prompt

Aliens are trying to cause great misery for the human race by using our own cryptographic technology to encrypt all our games.

Fortunately, the aliens haven't played CryptoHack so they're making several noob mistakes. Therefore they've given us a chance to recover our games and find their flags.

They've tried to scramble data on an N64 but don't seem to understand that encoding and ASCII art are not valid types of encryption!

<!-- truncate -->

### Recon

Really, the prompt pretty much tells us all we need to know. We look at the `output.txt` file we've received, and see that it's a string of random letters shaped into ASCII art.

```sh
            Vm                                                   0w               eE5GbFdWW         GhT            V0d4VVYwZ
            G9              XV                                   mx              yWk    ZOV       1JteD           BaV     WRH
                            YW                                   xa             c1              NsWl dS   M1   JQ WV       d4
S2RHVkljRm  Rp UjJoMlZrZH plRmRHV m5WaVJtUl hUVEZLZVZk   V1VrZFpWMU  pHVDFaV1Z  tSkdXazlXYW   twdl   Yx    Wm Fj  bHBFVWxWTlZ
Xdz     BWa 2M xVT     FSc  1d   uTl     hi R2h     XWW taS     1dG VXh     XbU ZTT     VdS elYy     cz     FWM    kY2VmtwV2
JU       RX dZ ak       Zr  U0   ZOc2JGWmlS a3       BY V1       d0 YV       lV MH       hj RVpYYlVaVFRWW  mF lV  mt       3V
lR       GV 01 ER       kh  Zak  5rVj   JFe VR       Ya Fdha   3BIV mpGU   2NtR kdX     bWx          oT   TB   KW VYxW   lNSM
Wx       XW kV kV       mJ  GWlRZ bXMxY2xWc 1V       sZ  FRiR1J5VjJ  0a1YySkdj   RVpWVmxKV           1V            GRTlQUT09
```

We can also probably quite safely assume, that this is encoded in base64.

So, as part of our analysis, we strip the string of its spaces and newlines, and feed it to `base64 -d`

```sh
cat output.txt | tr -d ' ' | tr -d \n | base64 -d
Vm0xNFlWVXhSWGxUV0doWVlrZFNWRmx0ZUdGalZsSlZWR3RPYWxKdGVIcFdiR2h2VkdzeFdGVnViRmRXTTFKeVdWUkdZV1JGT1ZWVmJGWk9WakpvV1ZaclpEUlVNVWw0Vkc1U1RsWnNXbGhWYkZKWFUxWmFSMWRzV2s1V2F6VkpWbTEwYjFkSFNsbFZiRkpXWWtaYU0xcEZXbUZTTVZaeVkwVTFWMDFHYjNkV2EyTXhWakpHVjFScmFGWmlhM0JYV1ZSR1lWZEdVbFZTYms1clVsUldTbGRyV2tkV2JGcEZVVlJWUFE9PQ==
```

But we notice, that the output of that command is yet another base64 string (given away by the equal signs at the end).

### Solution

So, let's just write a simple script which

1. Opens the `output.txt` file, and strips the content of newlines and spaces
2. Feed it into a loop which applies `b64decode`
3. And print the output, if it starts with our flag prompt `CHTB{`

```python
#!/usr/bin/env python3

import base64 as b64

flag = ''
with open('output.txt.2', 'r') as f:
  shouldContinue = True
  candidate = f.read().replace('\n', '').replace(' ', '')
  while shouldContinue:
    candidate = b64.b64decode(candidate)
    if b'CHTB{' in candidate:
      flag = candidate.decode()
      shouldContinue = False

print(flag)
```

So, we get the flag just like that

```sh
CHTB{3nc0d1ng_n0t_3qu4l_t0_3ncrypt10n}
```

import DonateCard from '@site/src/components/DonateCard';

<DonateCard/>