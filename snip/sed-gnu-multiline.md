---
slug: sed-gnu-multiline
title: sed-gnu-multiline
description: TODO Add description here
authors: kiroki
tags: [linux,sed]
---

# sed-gnu-multiline

Date created: 2025-02-14

# Go wild here

This allows for `sed` to operate on multiline input, i.e. an entire file or
multiline console output. For those pesky times when you want to use it to
replace a new line symbol with a comma and a space for example.

```shell-session
sed ':a;N;$!ba;s/\n/ /g' file
```

## Arguments

```
- :a create a label 'a'
- N append the next line to the pattern space
- $! if not the last line, ba branch (go to) label 'a'
- s substitute, /\n/ regex for new line, / / by a space, /g global match (as many times as it can)
```
