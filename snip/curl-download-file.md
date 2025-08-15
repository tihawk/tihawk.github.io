---
slug: curl-download-file
title: curl-download-file
description: TODO Add description here
authors: kiroki
tags: [linux,bash]
---

# curl-download-file

Date created: 2025-02-14

# Go wild here

Typically you can use `curl` to download a file by simply doing 

```shell-session
$ curl -o thingy.txt 'https://example.com/text.txt'
```

This would download it as `thingy.txt`.

But if you want to keep the original name you can use

```shell-session
$ curl -O 'https://example.com/text.txt'
```

## Urls without a filename in them

If there's no file name attached to the url, you can use the file header as the
file name.

```shell-session
$ curl -O -J 'https://example.com/text.txt'
```

## Following redirects

Sometimes a download will silently fail by downloading 0 bytes. An example is
downloading from github releases. This can be solved by using the `-L` flag,
which means "follow redirects".

```shell-session
$ curl -JLO 'https://github.com/text.txt'
```
```shell-session
-O, --remote-name          Write output to a file named as the remote file  
-J, --remote-header-name   Use the header-provided filename
-L, --location             Follow redirects
```

## Note

Wrapping the url in quotes is recommended to avoid problematic symbols like `&`.
