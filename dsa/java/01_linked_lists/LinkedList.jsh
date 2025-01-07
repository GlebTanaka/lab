// LinkedList.jsh

public class LinkedList {
  
  private Node head;
  private Node tail;
  private int length;
  
  // Nested Node class
  private class Node {
    int value;
    Node next;

    Node(int value) {
      this.value = value;
    }
  }

  public LinkedList(int value) {
    Node newNode = new Node(value);
    head = newNode;
    tail = newNode;
    length = 1;
  }
  
  // append a new node at the end of the list
  public void append(int data) {
    Node newNode = new Node(data);
    if (head == null) { // if the list is empty
      head = newNode;
      tail = newNode;
    } else {
      tail.next = newNode; // update the next pointer to the current tail
      tail = newNode; // update the tail to the new node
    }
    length++; // increment the length
  }

  
  // prepend

  // insert

  public void printList() {
    Node temp = head;
    while (temp != null) {
      System.out.print(temp.value + " -> ");
      temp = temp.next;
    }
    System.out.println("null");
  }

}
