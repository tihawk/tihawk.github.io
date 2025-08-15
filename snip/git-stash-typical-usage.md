---
slug: git-stash-typical-usage
title: git-stash-typical-usage
description: TODO Add description here
authors: kiroki
tags: [git,bash]
---

# git-stash-typical-usage

Date created: 2024-09-26

# Typical usage

## Named stash (stash with message)

```shell-session
$ git stash -m 'stash message'
```

## Stash including untracked files

```shell-session
$ git stash -u -m 'stash message'
```

## List stashes, and take note of the index of the one you need

```shell-session
$ git stash list
```

## Apply unstashes a stash, but keeps the stash

```shell-session
$ git stash apply <index-of-stash-to-apply>
```
## Pop unstashes a stash, and removes it from the list of stashes

```shell-session
$ git stash pop <index-of-stash-to-apply>
```



