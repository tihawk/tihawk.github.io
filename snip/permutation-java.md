---
slug: permutation-java
title: permutation-java
description: TODO Add description here
authors: kiroki
tags: [algorithms,java]
---

# permutation-java

Date created: 2024-09-27

# String permutation printer in Java

```java

public class Permutation {

  public static void testRun() {
    permutation("1234");
  }

  public static void permutation(String input){
    permutation("", input);
  }

  private static void permutation(String perm, String word) {
    if (word.isEmpty()) {
      System.out.println(perm + word);

    } else {
      for (int i = 0; i < word.length(); i++) {
        permutation(perm + word.charAt(i), word.substring(0, i)
            + word.substring(i + 1, word.length()));
      }
    }

  }
}
```
