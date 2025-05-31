// example.jsh

// Required imports
import java.util.Arrays;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.stream.Collectors;

// Create test data
List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
System.out.println("Original numbers: " + numbers);

// 1. Basic Stream Example
int result = numbers.stream()
    .filter(n -> n % 2 == 0)     // filter even numbers
    .map(n -> n * 2)             // multiply by 2
    .reduce(0, Integer::sum);    // sum all numbers
System.out.println("Sum of doubled even numbers: " + result);

// 2. Filtering Operations
List<Integer> filtered = numbers.stream()
    .filter(n -> n > 5)
    .collect(Collectors.toList());
System.out.println("Numbers greater than 5: " + filtered);

// 3. Mapping Operations
List<Integer> doubled = numbers.stream()
    .map(n -> n * 2)
    .collect(Collectors.toList());
System.out.println("Doubled numbers: " + doubled);

// 4. Finding Elements
Optional<Integer> firstEven = numbers.stream()
    .filter(n -> n % 2 == 0)
    .findFirst();
System.out.println("First even number: " + firstEven.orElse(-1));

boolean hasEven = numbers.stream()
    .anyMatch(n -> n % 2 == 0);
System.out.println("Has even numbers: " + hasEven);

// 5. Reducing/Aggregating
int sum = numbers.stream()
    .reduce(0, Integer::sum);
System.out.println("Sum of all numbers: " + sum);

Optional<Integer> max = numbers.stream()
    .max(Integer::compareTo);
System.out.println("Maximum number: " + max.orElse(0));

// 6. Chaining Operations
int chainedResult = numbers.stream()
    .filter(n -> n % 2 == 0)    // get even numbers
    .map(n -> n * 3)            // multiply by 3
    .filter(n -> n > 10)        // filter numbers > 10
    .reduce(0, Integer::sum);   // sum remaining numbers
System.out.println("Chained operations result: " + chainedResult);

// 7. Collecting and Grouping
Map<String, List<Integer>> grouped = numbers.stream()
    .collect(Collectors.groupingBy(
        n -> n % 2 == 0 ? "even" : "odd"
    ));
System.out.println("Grouped numbers: " + grouped);

// 8. Parallel Stream Example
List<Integer> parallelResult = numbers.parallelStream()
    .filter(n -> n % 2 == 0)
    .map(n -> n * 2)
    .collect(Collectors.toList());
System.out.println("Parallel processed even numbers doubled: " + parallelResult);

// 9. More Complex Example with Custom Object
class Person {
    String name;
    int age;

    Person(String name, int age) {
        this.name = name;
        this.age = age;
    }

    public String toString() {
        return name + "(" + age + ")";
    }
}

List<Person> people = Arrays.asList(
    new Person("John", 25),
    new Person("Jane", 30),
    new Person("Bob", 20),
    new Person("Alice", 35)
);

// Finding average age
double avgAge = people.stream()
    .mapToInt(p -> p.age)
    .average()
    .orElse(0.0);
System.out.println("Average age: " + avgAge);

// Getting names of people over 25
List<String> namesOver25 = people.stream()
    .filter(p -> p.age > 25)
    .map(p -> p.name)
    .collect(Collectors.toList());
System.out.println("Names of people over 25: " + namesOver25);

// Grouping people by age category
Map<String, List<Person>> peopleByAgeGroup = people.stream()
    .collect(Collectors.groupingBy(
        p -> p.age < 30 ? "Young" : "Senior"
    ));
System.out.println("People grouped by age: " + peopleByAgeGroup);