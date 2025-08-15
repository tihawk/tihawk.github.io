---
slug: linked-list-java
title: linked-list-java
description: TODO Add description here
authors: kiroki
tags: [data_structures,java]
---

# linked-list-java

Date created: 2024-09-27

# Linked list in Java

```java
public class LinkedList {
  static Node head;

  static class Node {
    int data;
    Node next;

    Node (int data) {
      this.data = data;
      next = null;
    }

  }

  public static void printList(Node node) {
    while (node != null) {
      System.out.print(node.data + ", ");
      node = node.next;
    }
  }

  public static void testRun() {
    LinkedList list = new LinkedList();
    list.head = new Node(85);
    list.head.next = new Node(15);
    list.head.next.next = new Node(4);
    list.head.next.next.next = new Node(20);

    System.out.println("Test linked list");
    LinkedList.printList(list.head);
  }
}
```
