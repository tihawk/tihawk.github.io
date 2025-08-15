---
slug: switch-to-git-repo-root
title: switch-to-git-repo-root
description: TODO Add description here
authors: kiroki
tags: [git,bash]
---

# switch-to-git-repo-root

Date created: 2024-10-01

# Switch current working directory to Git repository root

Note: since this spawns another terminal, it can't be used as a script file, and
should instead be put into the `.bashrc` directly.

```shell-session
#!/bin/bash

# Ensure the script is being run from the root of a Git repository
GIT_ROOT=$(git rev-parse --show-toplevel)
if [ $? -ne 0 ]; then
    echo "Error: Not inside a Git repository."
    exit 1
fi

# Change to the Git root directory
cd "$GIT_ROOT" || exit 1
echo "Navigating to Git root: $GIT_ROOT"
```
