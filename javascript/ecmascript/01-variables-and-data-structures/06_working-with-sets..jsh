// In Java we need to import classes - JavaScript doesn't require imports
import java.util.*;

// Java requires type specification, JavaScript doesn't
var hashSet = new HashSet<String>();    // Java: must specify type
// JavaScript: const set = new Set();    // Can hold any type

// Java has multiple Set implementations, JavaScript only has one
var treeSet = new TreeSet<String>();        // Sorted set - no equivalent in JavaScript
var linkedHashSet = new LinkedHashSet<>();   // Maintains insertion order (like JavaScript's Set)

// HashSet example - unordered (unlike JavaScript Set which always maintains insertion order)
hashSet.add("banana");
hashSet.add("apple");
hashSet.add("cherry");
System.out.println("HashSet (unordered): " + hashSet);
// JavaScript: set.add("banana") // Always maintains insertion order

// TreeSet example - naturally ordered (no JavaScript equivalent)
treeSet.add("banana");
treeSet.add("apple");
treeSet.add("cherry");
System.out.println("TreeSet (ordered): " + treeSet);

// Set operations
// Java has built-in methods for set operations
// JavaScript requires manual implementation using arrays and filters
var set1 = new HashSet<Integer>(Arrays.asList(1, 2, 3, 4));
var set2 = new HashSet<Integer>(Arrays.asList(3, 4, 5, 6));

// Union
// Java:
var union = new HashSet<>(set1);
union.addAll(set2);
// JavaScript: const union = new Set([...set1, ...set2]);

// Intersection
// Java:
var intersection = new HashSet<>(set1);
intersection.retainAll(set2);
// JavaScript: const intersection = new Set([...set1].filter(x => set2.has(x)));

// Difference
// Java:
var difference = new HashSet<>(set1);
difference.removeAll(set2);
// JavaScript: const difference = new Set([...set1].filter(x => !set2.has(x)));

// Method names differ between Java and JavaScript
var fruits = new HashSet<String>();
fruits.add("apple");           // Java: add()     | JavaScript: add()
fruits.remove("apple");        // Java: remove()  | JavaScript: delete()
fruits.contains("apple");      // Java: contains()| JavaScript: has()
fruits.size();                // Java: size()    | JavaScript: size (property)

// Iteration differences
System.out.println("\nJava iteration methods:");
// Java enhanced for loop
for (String fruit : fruits) {
    System.out.println(fruit);
}
// JavaScript: for (const fruit of fruits) { }

// Java forEach with lambda
fruits.forEach(fruit -> System.out.println(fruit));
// Similar in JavaScript: fruits.forEach(fruit => console.log(fruit))

// Converting between Arrays and Sets
// Java requires explicit Array creation and type handling
String[] arrayOfFruits = {"grape", "kiwi", "grape", "melon"};
var fruitsSet = new HashSet<>(Arrays.asList(arrayOfFruits));
// JavaScript: const fruitsSet = new Set(['grape', 'kiwi', 'grape', 'melon']);

// Back to array
// Java:
String[] backToArray = fruitsSet.toArray(new String[0]);
// JavaScript: const backToArray = [...fruitsSet]; // Much simpler spread syntax
// JavaScript alternative: Array.from(fruitsSet);

// Custom objects in Sets
// Java requires explicit Comparable implementation for TreeSet
// JavaScript doesn't have built-in sorting for Sets
record Person(String name, int age) implements Comparable<Person> {
    @Override
    public int compareTo(Person other) {
        return this.name.compareTo(other.name);
    }
}

// Java TreeSet will automatically sort objects
var peopleSet = new TreeSet<Person>();
peopleSet.add(new Person("Alice", 25));
peopleSet.add(new Person("Bob", 30));
// JavaScript would need manual sorting if needed

// Null handling differences
// Java: Different Set implementations handle null differently
hashSet.add(null);      // Works in HashSet
// treeSet.add(null);   // Throws NullPointerException in TreeSet
// JavaScript: Can add null or undefined to Set without issues

// Type safety
// Java: Cannot mix types in a typed Set
var numberSet = new HashSet<Integer>();
numberSet.add(1);
// numberSet.add("2"); // Compilation error

// JavaScript: Can mix any types
// const jsSet = new Set([1, "2", true, {}, null]); // This works fine