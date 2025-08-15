---
slug: manage-jobs-in-terminal
title: manage-jobs-in-terminal
description: TODO Add description here
authors: kiroki
tags: [linux,bash]
---

# manage-jobs-in-terminal

Date created: 2024-10-08

# Description

Putting a [[detach-process-from-terminal|task in the background]] turns it into
a background job. This is how we can manage tasks like that.

# Go wild here

Running `jobs` in the terminal lists all foreground and background tasks running
in the terminal, with a number associated with them.

```shell-session
$ jobs
[1]-  Stopped                 vim .
[2]+  Stopped                 vim .
[3]   Running                 idea &

```

The background ones usually have the `&` symbol shown after them, like idea in
the example above. we can now call it into the foreground by saying `fg 3`,
and manage it like a normal terminal process, e.g. closing it with \[C-c\].
