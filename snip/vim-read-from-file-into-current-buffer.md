---
slug: vim-read-from-file-into-current-buffer
title: vim-read-from-file-into-current-buffer
description: TODO Add description here
authors: kiroki
tags: [vim]
---

# vim-read-from-file-into-current-buffer

Date created: 2024-10-06

# Description

Reading from another file into the current buffer at the cursor's position is
done with the `:r <path/to/file>` command. But if we want to only read a line
range, we'd have to apply a bit more cleverness.

#/bin/bash Go wild here

```
:r !head -20 path/to/xyz
```

Will read first 20 lines from xyz.xml into current buffer where the cursor is.

```
:r !tail -10 path/to/xyz
```

Will read last 10 lines from xyz.xml into current buffer where the cursor is.

The head and tail commands are extremely fast, therefore even combining them can
be much faster than other approaches for very large files.

```
:r !head -700030 path/to/xyz | tail -30
```

Will read line numbers from 700000 to 700030 from file xyz.xml into current buffer.

This operation should complete instantly even for fairly large files.
