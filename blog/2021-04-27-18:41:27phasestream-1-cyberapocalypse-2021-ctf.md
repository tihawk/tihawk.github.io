---
slug: phasestream-1-cyberapocalypse-2021-ctf
title: Phasestream 1- Cyberapocalypse 2021 CTF
description: This is a writeup for the challenge Phasestream 1, part of the Hack the box's Cyberapocalypse CTF 2021, category Crypto.
authors: kiroki
tags: [Cyber Security, CTF]
---

This is a writeup for the challenge Phasestream 1, part of the Hack the box's Cyberapocalypse CTF 2021, category Crypto.

### Phasestream 1

In the first challenge, we're given a hex code, and the knowledge that it's been encoded using XOR with a 5-byte long key.

<!-- truncate -->

The top information here, is the length of the key. Since we expect to see a flag pop out of this encoded value, we know that it will start with `CHTB{`, which is exactly 5 bytes long.

And since the XOR operation is _its own inverse_, we know that if we apply a XOR operation on the encoded value using our known result `CHTB{` as "key", we will get the original key as output.

We can simply use an online tool for this:

<figure class="kg-card kg-image-card kg-card-hascaption"><img src="/content/images/2021/04/Screenshot_2021-04-27_21-20-12.png" class="kg-image" alt loading="lazy" width="429" height="76"/><figcaption>Importing the hex representation of the encoded flag</figcaption></figure>

<figure class="kg-card kg-image-card kg-card-hascaption"><img src="/content/images/2021/04/Screenshot_2021-04-27_21-20-27.png" class="kg-image" alt loading="lazy" width="260" height="31"/><figcaption>Choosing our "key" as the beginning of the flag</figcaption></figure>

<figure class="kg-card kg-image-card kg-card-hascaption"><img src="/content/images/2021/04/Screenshot_2021-04-27_21-20-39.png" class="kg-image" alt loading="lazy" width="246" height="24"/><figcaption>Getting the 5-byte key to be "mykey"</figcaption></figure>

We get our key to be `mykey`!

We could also do this using [this](https://github.com/AlexFSmirnov/xor-decrypt) tool to do the same, since we can supply a key to it to decode. But we need to supply it with an ASCII representation of the encoded result.

1. Decode the hex of the encrypted flag into ASCII

```sh
echo 2e313f2702184c5a0b1e321205550e03261b094d5c171f56011904 | xxd -r -ps > encodedascii.txt
```

2. Find the key by supplying the encrypted flag to `xor-decrypt`, and `CHTB{` as key

```sh
python3 xor-decrypt.py -i "encodedascii.txt" -o key.txt -k CHTB{ -d
```

So we get `mykey[IeqZQu@nOK6_KzZL`, and deduce that `mykey` is the 5-byte key

3. Decrypt the encrypted flag using our key

```shell
python3 xor-decrypt.py -i encodedascii.txt -o flag.txt -k mykey -d
```

And so, our flag finally is

```sh
CHTB{u51ng_kn0wn_pl41nt3xt}
```