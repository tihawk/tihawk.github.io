---
slug: nasm-typical-usecase
title: nasm-typical-usecase
description: TODO Add description here
authors: kiroki
tags: [lowlevel,bash,assembly,linux]
---


# nasm-typical-usecase

```shell-session
$ nasm -f bin -o <output.bin|o> <input.s|asm>
```

Where `-f` specifies the output format. Another option would be `elf32` or
`elf`.
