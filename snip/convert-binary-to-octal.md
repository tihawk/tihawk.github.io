---
slug: convert-binary-to-octal
title: convert-binary-to-octal
description: TODO Add description here
authors: kiroki
tags: [lowlevel,bash,linux]
---

# convert-binary-to-octal

Date created: 2024-09-27

# Dump octal code from a binary executable

```shell-session
$ od -A n -t o1 <binary-file>
```
Where:
- The `-A n` flag is short for `--address-radix=n`, with `n` being short for
  "none". Without this part, the command would output an ugly numerical address
  prefix on the left side. This is useful for large dumps, but for a short
  string it is unnecessary.
- The `-t o1` flag is short for `--format=o1`, with the `o` being short for
  "octal" and the 1 meaning 1 byte.
