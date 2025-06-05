// Parent class (similar to Java)
class Animal {
    // Constructor (similar to Java)
    constructor(name) {
        this.name = name;
    }

    // Instance method (similar to Java)
    speak() {
        return `${this.name} makes a sound`;
    }

    // Static method (similar to Java's static methods)
    static getSpeciesInfo() {
        return "This is an animal species";
    }
}

// Child class with inheritance (extends keyword just like Java)
class Dog extends Animal {
    constructor(name, breed) {
        // super() must be called before using 'this' in constructor
        super(name);
        this.breed = breed;
    }

    // Method overriding (similar to Java)
    speak() {
        return `${this.name} barks!`;
    }

    // Getter (similar to Java's getter)
    get getBreed() {
        return this.breed;
    }

    // Setter (similar to Java's setter)
    set setBreed(newBreed) {
        this.breed = newBreed;
    }
}

// Usage examples
const dog = new Dog("Rex", "German Shepherd");
console.log(dog.speak()); // "Rex barks!"
console.log(dog.getBreed); // "German Shepherd"
dog.setBreed = "Labrador";
console.log(dog.getBreed); // "Labrador"

// Using static method
console.log(Animal.getSpeciesInfo()); // "This is an animal species"