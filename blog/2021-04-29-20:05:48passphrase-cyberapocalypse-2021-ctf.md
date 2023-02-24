---
slug: passphrase-cyberapocalypse-2021-ctf
title: Passphrase - Cyberapocalypse 2021 CTF
description: This is a writeup for the Passphrase challenge, part of the Hack the box's Cyberapocalypse CTF 2021, category Reverse.
authors: kiroki
tags: [Cyber Security, CTF]
---

This is a writeup for the Passphrase challenge, part of the Hack the box's Cyberapocalypse CTF 2021, category Reverse.

### Prompt

You found one of their space suits forgotten in a room. You wear it, but before you go away, a guard stops you and asks some questions.

<!-- truncate -->

### Recon

We get a binary executable passphrase. Running file on it, we see that it's not stripped, so we might get some symbols and good things out of it.

```sh
file passphrase
passphrase: ELF 64-bit LSB shared object, x86-64, version 1 (SYSV), dynamically linked, interpreter /lib64/ld-linux-x86-64.so.2, for GNU/Linux 3.2.0, BuildID[sha1]=60f6b6064d2e34a2b6a24dda9feb943b0b8c360f, not stripped
```

Running `strings` on it we don't see much, but we notice that we will probably have to deal with `strcmp`, which is good.

### Solution

So, let's just run the executable using `ltrace`, and see where that leads us.

```sh
ltrace ./passphrase
[omitted for brevity]
usleep(30000)                                                                                                           = <void>
strlen("\nTell me the secret passphrase: "...)                                                                          = 32
sleep(1)                                                                                                                = 0
fgets(
```

So far, so good - it asks us for input using `fgets`. Let's supply it something random.

```sh
fgets(asd
"asd\n", 40, 0x7fbc87c48a00)                                                                                      = 0x7ffe594faca0
strlen("asd\n")                                                                                                         = 4
strcmp("3xtr4t3rR3stR14L5_VS_hum4n5", "asd")                                                                            = -46
printf("\033[31m")                                                                                                      = 5
strlen("\nIntruder alert! \360\237\232\250\n")                                                                          = 22
putchar(10, 0x7ffe594f85e0, 0x558a2ee00c17, 23
)                                                                         = 10
usleep(30000)                                                                                                           = <void>
[omitted for brevity]
```

Well, this was easy! It directly tells us that it compares the input string to  `3xtr4t3rR3stR14L5_VS_hum4n5`.To make sure, we run the binary again, and supply it that passphrase.

```sh
./passphrase 

Halt! ⛔
You do not look familiar..
Tell me the secret passphrase: 3xtr4t3rR3stR14L5_VS_hum4n5
✔

Sorry for suspecting you, please transfer this important message to the chief: CHTB{3xtr4t3rR3stR14L5_VS_hum4n5}
```

Easy, we got our flag, and it's

```sh
CHTB{3xtr4t3rR3stR14L5_VS_hum4n5}
```

import DonateCard from '@site/src/components/DonateCard';

<DonateCard/>