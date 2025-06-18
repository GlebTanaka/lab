// Basic lambda expression (similar to arrow function)
Consumer<String> greet = (name) -> System.out.println("Hello, " + name);
greet.accept("John");

// Lambda with multiple parameters
BiFunction<Integer, Integer, Integer> add = (a, b) -> a + b;
System.out.println(add.apply(5, 3)); // Outputs: 8

// Lambda with type declarations (Java can be more verbose)
BiFunction<Double, Double, Double> multiply = (Double x, Double y) -> x * y;
System.out.println(multiply.apply(2.5, 3.0)); // Outputs: 7.5

// Using lambdas with collections (similar to JS array methods)
List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5);

// Map equivalent
List<Integer> doubled = numbers.stream()
    .map(x -> x * 2)
    .collect(Collectors.toList());

// Filter equivalent
List<Integer> evenNumbers = numbers.stream()
    .filter(n -> n % 2 == 0)
    .collect(Collectors.toList());

// Lambda with multiple lines (requires curly braces and return)
Function<Integer, Integer> factorial = n -> {
    int result = 1;
    for (int i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
};

// Using lambdas with custom functional interfaces
@FunctionalInterface
interface MathOperation {
    int operate(int a, int b);
}

MathOperation addition = (a, b) -> a + b;
MathOperation subtraction = (a, b) -> a - b;

// Using lambdas in comparisons
List<String> names = Arrays.asList("John", "Alice", "Bob", "Zoe");
Collections.sort(names, (s1, s2) -> s1.compareTo(s2));

// Lambda with method reference (even more concise)
Collections.sort(names, String::compareTo);

// Example with Runnable (similar to JS setTimeout callback)
Runnable task = () -> System.out.println("Task executed!");
new Thread(task).start();

// Working with Optional (similar to JS nullable handling)
Optional<String> optional = Optional.of("Hello");
optional.map(str -> str.toUpperCase())
       .ifPresent(System.out::println);

// Processing collections with lambdas
record Person(String name, int age) {}

List<Person> people = Arrays.asList(
    new Person("John", 30),
    new Person("Alice", 25),
    new Person("Bob", 35)
);

// Filtering and mapping (similar to JS array methods)
List<String> youngNames = people.stream()
    .filter(person -> person.age() < 30)
    .map(person -> person.name())
    .collect(Collectors.toList());