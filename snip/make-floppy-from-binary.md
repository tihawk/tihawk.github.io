---
slug: make-floppy-from-binary
title: make-floppy-from-binary
description: TODO Add description here
authors: kiroki
tags: [lowlevel,bash,linux]
---


# make-floppy-from-binary

```shell-session
$ dd if=/dev/zero of=<floppy-name.img> bs=512 count=2880
$ dd if=<source-binary.bin> of=<floppy-name.img> conv=notrunc
```
