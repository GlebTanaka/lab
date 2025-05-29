// 1. Using indexOf() - returns the index of first occurrence or -1 if not found
const text = "Hello World";
console.log(text.indexOf("World"));     // Output: 6
console.log(text.indexOf("Goodbye"));   // Output: -1

// 2. Using includes() - returns true/false
const sentence = "The quick brown fox";
console.log(sentence.includes("quick")); // Output: true
console.log(sentence.includes("lazy"));  // Output: false

// 3. Using search() - returns index or -1, can use regular expressions
const message = "JavaScript is awesome";
console.log(message.search("awesome"));  // Output: 13
console.log(message.search(/SCRIPT/i));  // Output: 4 (case-insensitive search)

// 4. Using match() - returns an array of matches or null
const str = "The rain in Spain";
console.log(str.match(/ain/g));         // Output: ['ain', 'ain']

// 5. Using startsWith() and endsWith()
const fileName = "document.pdf";
console.log(fileName.startsWith("doc")); // Output: true
console.log(fileName.endsWith(".pdf"));  // Output: true

// 6. Using lastIndexOf() - searches from the end
const repeatedText = "hello hello hello";
console.log(repeatedText.lastIndexOf("hello")); // Output: 12