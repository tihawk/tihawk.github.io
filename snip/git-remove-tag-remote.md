---
slug: git-remove-tag-remote
title: git-remove-tag-remote
description: TODO Add description here
authors: kiroki
tags: [git,bash]
---

# git-remove-tag-remote

Date created: 2024-09-26

# Remove local and remote tags

## Local:

```shell-session
$ git tag -d <tag_name>
```

## Remote:

```shell-session
$ git push --delete origin tagname
```
