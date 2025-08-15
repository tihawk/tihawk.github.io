---
slug: c-static-functions
title: c-static-functions
description: TODO Add description here
authors: kiroki
tags: [c]
---

# c-static-functions

Date created: 2024-10-06

# Description

Static functions restrict access to themselves only to the file they have been
declared. This also means, we can reuse the function name in other files.

# Go wild here

```c
static int fun(void) {
  printf("I am a static function");
}
```

