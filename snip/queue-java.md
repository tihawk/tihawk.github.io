---
slug: queue-java
title: queue-java
description: TODO Add description here
authors: kiroki
tags: [data_structures,java]
---

# queue-java

Date created: 2024-09-27

# Queue in Java

```java

import java.util.Stack;

public class Queue {
  public Stack<Integer> s1 = new Stack<>();
  public Stack<Integer> s2 = new Stack<>();

  public void enQueue(int num) {
    // move s1 into s2
    while (!s1.isEmpty()) {
      s2.push(s1.pop());
    }

    s1.push(num);

    // move s2 back into s1
    while (!s2.isEmpty()) {
      s1.push(s2.pop());
    }
  }

  public int deQueue() {
    if (s1.isEmpty()) {
      return -1;
    }

    int deqEl = s1.peek();
    s1.pop();
    return deqEl;
  }

  public static void testRun() {
    Queue q = new Queue();
    q.enQueue(1);
    q.enQueue(2);
    q.enQueue(3);

    System.out.println(q.deQueue());
    System.out.println(q.deQueue());
    System.out.println(q.deQueue());
  }
}
```
