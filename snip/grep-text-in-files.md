---
slug: grep-text-in-files
title: grep-text-in-files
description: TODO Add description here
authors: kiroki
tags: [linux,bash]
---

# grep-text-in-files

Date created: 2024-09-24

# Go wild here
```shell-session
$ grep -R "text to search for" .
```

Where the `.` signifies the current directory. This will search recursively for
the provided string in all directories under the current one.
