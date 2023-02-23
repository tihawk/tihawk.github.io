---
slug: authenticator-cyberapocalypse-2021-ctf
title: Authenticator - Cyberapocalypse 2021 CTF
description: This is a writeup for the Authenticator challenge, part of the Hack the box's Cyberapocalypse CTF 2021, category Reverse.
authors: kiroki
tags: [Cyber Security, CTF]
---

This is a writeup for the Authenticator challenge, part of the Hack the box's Cyberapocalypse CTF 2021, category Reverse.

### Prompt

We managed to steal one of the extraterrestrials' authenticator device. If we manage to understand how it works and get their credentials, we may be able to bypass all of their security locked doors and gain access everywhere!

<!-- truncate -->

### Recon

We're given a binary executable called authenticator with the following properties:

```sh
file authenticator
authenticator: ELF 64-bit LSB shared object, x86-64, version 1 (SYSV), dynamically linked, interpreter /lib64/ld-linux-x86-64.so.2, for GNU/Linux 3.2.0, BuildID[sha1]=66286657ca5a06147189b419238b2971b11c72db, not stripped
```

My favourite way to get an initial idea about a _not stripped_ binary is to run  `strings` on it. It might not get you everything you need, but it does give you a very good idea of what you're up against. So, running strings on `authenticator`, we get a bit of nonsense, and a few very interesting things:

```sh
strings authenticator
...[omitted for brevity]
}a:Vh|}a:g}8j=}89gV<p<}:dV8<Vg9}V<9V<:j|{:
Authentication System 
Please enter your credentials to continue.
Alien ID: 
11337
Access Denied!
Pin: 
Access Granted! Submit pin in the flag format: CHTB{fl4g_h3r3}
;*3$"
...[omitted for brevity]
```

Well fun, let's run the binary and see if this is useful.

```sh
./authenticator

Authentication System 👽

Please enter your credentials to continue.

Alien ID: 11337
Pin: 
```

Wouldn't you know it, the Alien ID value is what we saw in strings. Sadly, with the Pin we won't be so lucky. I did have a feeling that it will have something to do with that weird string `}a:Vh|}a:g}8j=}89gV<p<}:dV8<Vg9}V<9V<:j|{:`, but we don't know anything about it yet.

So, let's open the binary in Ghidra, and check if we can find something in there. We can check out the decompiled `main` function first

```c
undefined8 main(void)

{
  int iVar1;
  undefined8 uVar2;
  long in_FS_OFFSET;
  undefined auStack88 [32];
  undefined auStack56 [40];
  long lStack16;
  
  lStack16 = *(long *)(in_FS_OFFSET + 0x28);
  setbuf(stdout,0);
  printstr(&DAT_00100bc3,0);
  printstr(&DAT_00100be8,0);
  printstr(&DAT_00100c15,0);
  fgets(auStack88,0x20,stdin);
  iVar1 = strcmp(auStack88,"11337\n");
  if (iVar1 == 0) {
    printstr("Pin: ",0);
    fgets(auStack56,0x20,stdin);
    iVar1 = checkpin(auStack56);
    if (iVar1 == 0) {
      printstr("Access Granted! Submit pin in the flag format: CHTB{fl4g_h3r3}\n",0);
    }
    else {
      printstr("Access Denied!\n",1);
    }
  }
  else {
    printstr("Access Denied!\n",1);
  }
  uVar2 = 0;
  if (lStack16 != *(long *)(in_FS_OFFSET + 0x28)) {
    uVar2 = __stack_chk_fail();
  }
  return uVar2;
}
```

We can see the `strcmp` function being called, which checks if our Alien ID input (stored in `auStack88`) is `"11337"`.

More importantly though, a few lines down we call a function called `checkpin`  with our input as a param. This is where the magic will presumably happen, so let's check it out.

undefined8 checkpin(long param_1)

```c
undefined8 checkpin(long param_1)

{
  long lVar1;
  int iStack36;
  
  iStack36 = 0;
  while( true ) {
    lVar1 = func_0x00100750(param_1);
    if (lVar1 - 1U <= (ulong)(long)iStack36) {
      return 0;
    }
    if (((&UNK_00100b98)[iStack36] ^ 9) != *(byte *)(param_1 + iStack36)) break;
    iStack36 = iStack36 + 1;
  }
  return 1;
}
```

Long story short, what this function does is XOR some variable stored in  `&UNK_00100b98` byte by byte with a hex value `9`, and compare it (byte by byte) with our input. And lo and behold, that variable is indeed our weird string we found using strings!

```
        00100b98 7d              ??         7Dh    }
        00100b99 61              ??         61h    a
        00100b9a 3a              ??         3Ah    :
        00100b9b 56              ??         56h    V
        00100b9c 68              ??         68h    h
        00100b9d 7c              ??         7Ch    |
        00100b9e 7d              ??         7Dh    }
        00100b9f 61              ??         61h    a
        00100ba0 3a              ??         3Ah    :
        00100ba1 67              ??         67h    g
        00100ba2 7d              ??         7Dh    }
        00100ba3 38              ??         38h    8
        00100ba4 6a              ??         6Ah    j
        00100ba5 3d              ??         3Dh    =
        00100ba6 7d              ??         7Dh    }
        00100ba7 38              ??         38h    8
        00100ba8 39              ??         39h    9
        00100ba9 67              ??         67h    g
        00100baa 56              ??         56h    V
        00100bab 3c              ??         3Ch    <
        00100bac 70              ??         70h    p
        00100bad 3c              ??         3Ch    <
        00100bae 7d              ??         7Dh    }
        00100baf 3a              ??         3Ah    :
        00100bb0 64              ??         64h    d
        00100bb1 56              ??         56h    V
        00100bb2 38              ??         38h    8
        00100bb3 3c              ??         3Ch    <
        00100bb4 56              ??         56h    V
        00100bb5 67              ??         67h    g
        00100bb6 39              ??         39h    9
        00100bb7 7d              ??         7Dh    }
        00100bb8 56              ??         56h    V
        00100bb9 3c              ??         3Ch    <
        00100bba 39              ??         39h    9
        00100bbb 56              ??         56h    V
        00100bbc 3c              ??         3Ch    <
        00100bbd 3a              ??         3Ah    :
        00100bbe 6a              ??         6Ah    j
        00100bbf 7c              ??         7Ch    |
        00100bc0 7b              ??         7Bh    {
        00100bc1 3a              ??         3Ah    :
```

So, we knew the pin already, just didn't know we had to XOR it to decypher it. Let's do that! I'm gonna use a python script I wrote for the crypto challenges to XOR my own strings

```python
#!/usr/bin/env python3

ciphertext1 = '9'

ciphertext2 = b'}a:Vh|}a:g}8j=}89gV<p<}:dV8<Vg9}V<9V<:j|{:'.hex()

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

xored = xor(ciphertext2, ciphertext1, True)
```

And we get our Pin to be

```sh
th3_auth3nt1c4t10n_5y5t3m_15_n0t_50_53cur3
```

So, now we can run `authenticator` once again, and supply it with the Pin, to learn that we already have tha flag:

```sh
./authenticator

Authentication System 👽

Please enter your credentials to continue.

Alien ID: 11337
Pin: th3_auth3nt1c4t10n_5y5t3m_15_n0t_50_53cur3
Access Granted! Submit pin in the flag format: CHTB{fl4g_h3r3}
```

Flag:

```
CHTB{th3_auth3nt1c4t10n_5y5t3m_15_n0t_50_53cur3}
```