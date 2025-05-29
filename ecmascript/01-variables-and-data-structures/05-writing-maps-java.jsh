// This is a JShell script demonstrating key differences between Java and JavaScript Maps

// In Java, we need to import Map-related classes
import java.util.*;

// 1. Type Safety with Generics (Java) vs Dynamic Typing (JavaScript)
// JavaScript: const map = new Map();
Map<String, Integer> javaMap = new HashMap<>();

// 2. Different Implementation Options in Java
Map<String, String> hashMap = new HashMap<>();        // Most common, no ordering
Map<String, String> linkedMap = new LinkedHashMap<>(); // Maintains insertion order
Map<String, String> treeMap = new TreeMap<>();        // Sorted by keys
// JavaScript has only one Map implementation that always maintains insertion order

// 3. Method Names Differ
// JavaScript: map.set("key", value)
hashMap.put("key", "value");

// JavaScript: map.get("key")
String value = hashMap.get("key");

// JavaScript: map.delete("key")
hashMap.remove("key");

// 4. Null Handling
// Java allows null keys and values (except in Hashtable)
hashMap.put(null, "null key is allowed");
hashMap.put("null value", null);
// JavaScript: undefined and null are both allowed as keys and values

// 5. Iteration Approaches
// Java style iteration
for (Map.Entry<String, String> entry : hashMap.entrySet()) {
    System.out.println(entry.getKey() + ": " + entry.getValue());
}

// Java 8+ lambda style (similar to JavaScript forEach)
hashMap.forEach((key, value) -> {
    System.out.println(key + ": " + value);
});

// 6. Thread Safety Options (not available in JavaScript)
Map<String, String> syncMap = Collections.synchronizedMap(new HashMap<>());
Map<String, String> concurrentMap = new ConcurrentHashMap<>();

// 7. Creating Map with initial values
// JavaScript: new Map([['key1', 'value1'], ['key2', 'value2']])
Map<String, String> initialMap = Map.of(
    "key1", "value1",
    "key2", "value2"
);

// 8. Collection Views
Set<String> keys = hashMap.keySet();      // Get all keys
Collection<String> values = hashMap.values(); // Get all values
Set<Map.Entry<String, String>> entries = hashMap.entrySet(); // Get all entries

// 9. Type Restrictions Example
// Demonstrate strict typing with custom class
class User {
    private String name;
    public User(String name) { this.name = name; }
    public String getName() { return name; }
}

// This map can only store User objects with String keys
Map<String, User> userMap = new HashMap<>();
userMap.put("john", new User("John Doe"));
// userMap.put("invalid", "string"); // This would not compile in Java
// In JavaScript, any type can be used for both keys and values

// 10. Performance Optimization Hint
// You can initialize with expected size to avoid resizing
Map<String, String> sizedMap = new HashMap<>(16, 0.75f);
// JavaScript Maps handle this automatically

// 11. Specialized Map Features
NavigableMap<String, String> navigableMap = new TreeMap<>();
navigableMap.put("a", "first");
navigableMap.put("b", "second");
navigableMap.put("c", "third");

// Get entries based on key ordering (not available in JavaScript)
Map.Entry<String, String> firstEntry = navigableMap.firstEntry();
Map.Entry<String, String> lastEntry = navigableMap.lastEntry();
Map.Entry<String, String> lowerEntry = navigableMap.lowerEntry("b"); // Entry before "b"