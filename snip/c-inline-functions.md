---
slug: c-inline-functions
title: c-inline-functions
description: TODO Add description here
authors: kiroki
tags: [c]
---

# c-inline-functions

Date created: 2024-10-06

# Description

Inline functions are a [[c-compiler-suggestion|suggestion for the compiler]] to place the function code
inline to where it's been executed. This is done for optimisation reasons.

# Go wild here

Consider a simple C function like

```c
inline uint8_t vga_entry_colour(enum vga_colour fg, enum vga_colour bg) {
	return fg | bg << 4;
}
```

All it does is a simple [[bitwise-operations|bitwise operation]]. If this function was declared as a
simple function (not inline), every time we call it, the CPU would have to do
all the regular things, jump to an address, prepare the stack, execute, pop the
stack, return.

If the function is inline though, this gives the suggestion to the compiler to
place the function code inline wherever it's being called, meaning the CPU
doesn't have to do all the regular function-call things. This has the
potential to improve performance if the function is being called many many times
over.
