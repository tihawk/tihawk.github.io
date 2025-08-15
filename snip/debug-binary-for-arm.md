---
slug: debug-binary-for-arm
title: debug-binary-for-arm
description: TODO Add description here
authors: kiroki
tags: [lowlevel,assembly,c]
---

# debug-binary-for-arm

Date created: 2024-10-01

# Description

Normally, we would use `gdb` to debug binaries on linux, but we need a special
setup to debug binaries targetting the ARM architecture while working on a x86
based computer.


## Prerequisites

- gdb-multiarch

# Setup

- Install gdb-multiarch

```shell-session
$ sudo apt install gdb-multiarch
```

- Build as shown in [[build-binary-for-arm]].

- Run the programme in gdb server using [[qemu]]

```shell-session
$ qemu-arm <./binary-name> -g 4242
```

- Debug the programme

```shell-session
$ gdb-multiarch 
(gdb) file <./binary-name>
(gdb) target remote localhost:4242
```
