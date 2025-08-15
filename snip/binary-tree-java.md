---
slug: binary-tree-java
title: binary-tree-java
description: TODO Add description here
authors: kiroki
tags: [algorithms,data_structures,java]
---

# binary-tree-java

Date created: 2024-09-28

# Binary tree in Java with add, contains, delete, and traverse in order

```java
public class BinaryTree {
  
  Node root;
  
  static class Node {
    int value;
    Node left;
    Node right;
    
    Node(int value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  /* ADD */
  
  public void add(int value) {
    this.root = addRecursive(this.root, value);
  }
  
  private Node addRecursive(Node current, int value) {
    if (current == null) {
      return new Node(value);
    }
    
    if (value < current.value) {
      current.left = addRecursive(current.left, value);
    } else if (value > current.value) {
      current.right = addRecursive(current.right, value);
    } else {
      // the values are equal, i.e. the node already exists
      return current;
    }
    
    return current;
  }
  
  /* CONTAINS */
  
  public boolean contains(int value) {
    return containsRecursive(this.root, value);
  }
  
  private boolean containsRecursive(Node current, int value) {
    if (current == null) {
      return false;
    }
    if (current.value == value) {
      return true;
    }
    
    if (value < current.value) {
      return containsRecursive(current.left, value);
    } else {
      return containsRecursive(current.right, value);
    }
  }
  
  /* DELETE */
  
  public void delete(int value) {
    this.root = deleteRecursive(this.root, value);
  }
  
  private Node deleteRecursive(Node current, int value) {
    if (current == null) {
      return null;
    }
    
    if (current.value == value) {
      if (current.left == null && current.right == null) {
        // Both children are null, replace root with null
        return null;
      }
      
      if (current.left == null) {
        // only left is null, replace root with right
        return current.right;
      }
      
      if (current.right == null) {
        // only right is null, replace root with left
        return current.left;
      }
      
      // if both children are non-null, we have to reorganise the subtree
      // we replace the soon-to-be-deleted node's value with the smallest value
      // of the right branch of the subtree
      int smallest = getSmallestValue(current.right);
      current.value = smallest;
      // after we assign the "deleted" node with the smallest value of the right subtree
      // we can delete the smallest value from the right subtree
      current.right = deleteRecursive(current.right, smallest);
      return current;
      
    } else if (value < current.value) {
      current.left = deleteRecursive(current.left, value);
      return current;
    }
    // else right + default
    current.right = deleteRecursive(current.right, value);
    return current;
  }
  
  private int getSmallestValue(Node root) {
    return root.left == null ? root.value : getSmallestValue(root.left);
  }
  
  /* TRAVERSE */
  
  /* DEPTH-FIRST */
  
  /* IN-ORDER */
  
  public void listInOrder() {
    traverseInOrder(this.root);
    System.out.print("\n");
  }
  
  private void traverseInOrder(Node root) {
    if (root != null) {
      traverseInOrder(root.left);
      System.out.print(root.value + " ");
      traverseInOrder(root.right);
    }
  }
  
  public static void main(String args[]) {

    BinaryTree bt = new BinaryTree();
    
    bt.add(2);
    bt.add(6);
    bt.add(5);
    bt.add(8);
    bt.add(9);
    bt.add(4);
    bt.add(1);
    
    bt.listInOrder();
    
    System.out.println(bt.contains(2));
    System.out.println(bt.contains(3));
    System.out.println(bt.contains(6));
    
    bt.delete(1);
    System.out.println(bt.contains(1));
    bt.delete(2);
    System.out.println(bt.contains(2));
    System.out.println(bt.contains(4));
    
    bt.listInOrder();
  }
}
```

