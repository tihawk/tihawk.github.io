---
slug: cyber-apocalypse-2021-capture-the-flag-write-ups
title: "Cyber Apocalypse 2021 Capture the Flag Write-ups"
description: "A collection of write-ups for challenges from the Cyber Apocalypse 2021 CTF finished by Kiril Blagoev."
authors: kiroki
tags: [Cyber Security, CTF]
---

Well, here we go. This was the very first CTF event that I took part of while it was happening, and I'm quite proud of my results!

Most importantly, almost every challenge that I finished taught me a bunch of new concepts and techniques, and showcased what can be expected in the field of hunting vulnerabilities.

By the end of the 5-day ordeal I got to 357th place out of 4740 teams and more than 9500 players, and I'm very satisfied with such an outcome from my very first event of this type.

But, as I can now see, the learning process continues even after the event, in the form of writing write-ups! The much more level-headed approach of trying to explain and follow the process of finding the flags means that I get to see my ideas and techniques in a new light, and organise the tools and concepts much better.

Reading write-ups is also indisplensable, as there were quite a few other challenges that I was sure I was very near to solving, but never found out what I was missing. Reading other people's write-ups allowed me to see what I was did right or wrong, and how to improve on that.

So I hope you get that from reading these write-ups as well, and learn a few things from them, or at least see an another approach to solving the same problem.

**Enjoy!**

## Category Web

[Inspector Gadget - Cyberapocalypse 2021 CTF](/blog/inspector-gadget-cyberapocalypse-2021-ctf/)

An easy warm-up challenge in the style of a scavenger hunt

[CaaS - Cyberapocalypse 2021 CTF](/blog/caas-cyberapocalypse-2021-ctf/)

Exploiting curl running locally on the host, to get local file inclusion

[miniSTRypalace - Cyberapocalypse 2021 CTF](/blog/ministrypalace-cyberapocalypse-2021-ctf/)

Showcasing the importance of white-listing instead of black-listing commands and strings inside PHP

[BlitzProp - Cyberapocalypse 2021 CTF](/blog/blitzprop-cyberapocalypse-2021-ctf/)

Exploring the interesting concept ot AST injection and prototype pollution, resulting in remote code exectution. And all of that because we use the wrong version of a library in node

[E.Tree - Cyberapocalypse 2021 CTF](/blog/e-tree-cyberapocalypse-2021-ctf/)

Blind XPATH injection with a slight twist

[Wild goose hunt - Cyberapocalypse 2021 CTF](/blog/wild-goose-hunt-cyberapocalypse-2021-ctf/)

A challenge showcasing the weakness of improper handling of mongo queries

[Emoji Voting - Cyberapocalypse 2021 CTF](/blog/emoji-voting-cyberapocalypse-2021-ctf/)

This fun challenge showcases blind SQL injection inside of an ORDER BY clause

## Category Reverse

[Passphrase - Cyberapocalypse 2021 CTF](/blog/passphrase-cyberapocalypse-2021-ctf/)

A simple reverse-engineering challenge invoving stringcompare

[Authenticator - Cyberapocalypse 2021 CTF](/blog/authenticator-cyberapocalypse-2021-ctf/)

Reverse-engineering a binary, involving both stringcompare and a bit of XOR magic

## Category Forensics

[Key Mission - Cyberapocalypse 2021 CTF](/blog/key-mission-cyberapocalypse-2021-ctf/)

Having fun with USB Human Interface Devices, namely a keyboard. The twist was having to deal with the Shift key

## Category Crypto

[Nintendo Base64 - Cyberapocalypse 2021 CTF](/blog/nintendo-base64-cyberapocalypse-2021-ctf/)

An easy warm-up cryptography challenge, dealing with multilayered base64 encoding and obfuscation

[Soulcrabber - Cyberapocalypse 2021 CTF](/blog/soulcrabber-cyberapocalypse-2021-ctf/)

A challenge written in Rust, showcasing using known seeds for pseudo-random number generators

[Phasestream 1- Cyberapocalypse 2021 CTF](/blog/phasestream-1-cyberapocalypse-2021-ctf/)

The first challenge of this series showcased XOR encryption with a 5-byte key

[Phasestream 2 - Cyberapocalypse 2021 CTF](/blog/phasestream-2-cyberapocalypse-2021-ctf/)

Still on the topic of XOR, this time using a 1-byte key, but hiding the real flag in a list of 9999 different strings

[Phasestream 3 - Cyberapocalypse 2021 CTF](/blog/phasestream-3-cyberapocalypse-2021-ctf/)

A challenge showcasing the devastating effects of reusing keystreams in AES encryption

[Phasestream 4 - Cyberapocalypse 2021 CTF](/blog/phasestream-4-cyberapocalypse-2021-ctf/)

A direct follow-up of the previous challenge, introducing a bit of a guessing game

## Category Misc

[Alien Camp - Cyberapocalypse 2021 CTF](/blog/alien-camp-cyberapocalypse-2021-ctf/)

A fun scripting challenge involving the automatic handling of `nc` based services

[Input as a Service - Cyberapocalypse 2021 CTF](/blog/input-as-a-service-cyberapocalypse-2021-ctf/)

`input()` in python2.x is scary by default
