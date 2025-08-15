---
slug: remove-feff-hidden-chars
title: remove-feff-hidden-chars
description: TODO Add description here
authors: kiroki
tags: [bash,linux]
---

# remove-feff-hidden-chars

Date created: 2024-10-02

# Resources and links

[https://stackoverflow.com/questions/1068650/using-awk-to-remove-the-byte-order-mark](https://stackoverflow.com/questions/1068650/using-awk-to-remove-the-byte-order-mark)

# Go wild here

```shell-session
# Removing BOM from all csv files in current directory:
sed -i '1 s/^\xef\xbb\xbf//' *.csv
```
