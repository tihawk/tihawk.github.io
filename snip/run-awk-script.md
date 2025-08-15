---
slug: run-awk-script
title: run-awk-script
description: TODO Add description here
authors: kiroki
tags: [bash,linux]
---

# run-awk-script

Date created: 2024-10-02

# Go wild here

Given an awk script `script.awk`, an input file `source.csv`, and an output
file `target.js`, we can execute awk like the following:

```shell-session
$ awk -f script.awk ./source.csv > target.js
```
