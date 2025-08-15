---
slug: detach-process-from-terminal
title: detach-process-from-terminal
description: TODO Add description here
authors: kiroki
tags: [linux,bash]
---

# detach-process-from-terminal

Date created: 2024-09-23

# To immediately start a process as a background job:

```shell-session
firefox &
```

# To run it in the background silenced:

```shell-session
firefox </dev/null &>/dev/null &
```

# The whole story

The above is a shorthand for starting a process normally, then stopping it by
hitting \<C-z\>, and typing `bg` into the terminal. This resumes the process as a
background job. In this scenario its `stdout/stderr/stdin` are still connected
to the terminal - meaning it's not silenced.
