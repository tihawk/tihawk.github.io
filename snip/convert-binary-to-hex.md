---
slug: convert-binary-to-hex
title: convert-binary-to-hex
description: TODO Add description here
authors: kiroki
tags: [lowlevel,bash,linux]
---

# convert-binary-to-hex

Date created: 2024-09-27

# Dump hex code from a binary executable

```shell-session
$ od -A n -t x1 <binary-file>
```
Where:
- The `-A n` flag is short for `--address-radix=n`, with `n` being short for
  "none". Without this part, the command would output an ugly numerical address
  prefix on the left side. This is useful for large dumps, but for a short
  string it is unnecessary.
- The `-t x1` flag is short for `--format=x1`, with the `x` being short for
  "hexadecimal" and the 1 meaning 1 byte.

# Display hex and string from binary using `xxd`

```shell-session
$ xxd <binary-file>
```
