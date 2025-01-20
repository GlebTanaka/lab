public class LinkedList {
    private Node head;  // Pointer to the first node
    private Node tail;  // Pointer to the last node
    private int length; // Variable to track the size of the list

    // Constructor to initialize the list
    public LinkedList(int initialData) {
        Node newNode = new Node(initialData);
        head = newNode;
        tail = newNode;
        length = 1; // Start with one element
    }

    public int Length { 
        get { return length; } // Accessor to get the list length
    }

    // Nested Node class
    public class Node {
        public int Data { get; set; } // Changed to allow modification
        public Node Next { get; set; }

        public Node(int data) {
            Data = data;
            Next = null;
        }
    }

    // Add new node at the end
    public void Append(int data) {
        Node newNode = new Node(data);
        if (head == null) {
            head = newNode;
            tail = newNode;
        } else {
            tail.Next = newNode;
            tail = newNode;
        }
        length++; // Increment on adding a node
    }

    // Add new node at the beginning
    public void Prepend(int data) {
        Node newNode = new Node(data);
        if (head == null) {
            head = newNode;
            tail = newNode;
        } else {
            newNode.Next = head;
            head = newNode;
        }
        length++; // Increment on adding a node
    }

    // Remove the first element and update length
    public Node RemoveFirst() {
        if (head == null) {
            Console.WriteLine("List is empty; nothing to remove.");
            return null;
        }

        Node removedNode = head;
        head = head.Next;

        if (head == null) {
            tail = null;
        }

        length--; // Decrement on removing a node
        return removedNode;
    }

    // Remove the last element and update length
    public Node RemoveLast() {
        if (head == null) {
            Console.WriteLine("List is empty; nothing to remove.");
            return null;
        }

        Node removedNode;

        if (head == tail) {
            removedNode = head;
            head = null;
            tail = null;
        } else {
            Node current = head;
            while (current.Next != tail) {
                current = current.Next;
            }

            removedNode = tail;
            current.Next = null;
            tail = current;
        }

        length--; // Decrement on removing a node
        return removedNode;
    }

    // Remove node at a specific index and update length
    public Node RemoveAtIndex(int index) {
        if (head == null) {
            Console.WriteLine("List is empty; nothing to remove.");
            return null;
        }

        if (index < 0) {
            Console.WriteLine("Index cannot be negative.");
            return null;
        }

        if (index == 0) {
            return RemoveFirst();
        }

        Node current = head;
        int currentIndex = 0;

        while (current.Next != null && currentIndex < index - 1) {
            current = current.Next;
            currentIndex++;
        }

        if (current.Next == null) {
            Console.WriteLine("Index out of bounds.");
            return null;
        }

        Node removedNode = current.Next;
        current.Next = current.Next.Next;

        if (removedNode == tail) {
            tail = current;
        }

        length--; // Decrement on removing a node
        return removedNode;
    }
}