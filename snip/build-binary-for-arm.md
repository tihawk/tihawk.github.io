---
slug: build-binary-for-arm
title: build-binary-for-arm
description: TODO Add description here
authors: kiroki
tags: [lowlevel,assembly,c]
---

# build-binary-for-arm

Date created: 2024-10-01

# Description

To build binaries for the ARM architecture, and run them on an x86 based
processor inside of linux, we need to set up an environment involving some
specialised tools.

## Prerequisites

- qemu (qemu-user)
- gcc-arm-linux-gnueabihf

# Setup

- Install the required tools

```shell-session
$ sudo apt install build-essential gcc-arm-linux-gnueabihf qemu-user
```

- Assemble the target code using the cross-compiler

```shell-session
$ arm-linux-gnueabihf-gcc -o <binary-name> <source-code.c> -static
```


- Run the programme

```shell-session
$ qemu-arm <./binary-name>
```
