// Basic usage
"hello ".repeat(3);      // Returns: "hello hello hello "
"*".repeat(5);           // Returns: "*****"

// Common use cases
// 1. Creating indentation
const indentLevel = 2;
const indent = " ".repeat(4 * indentLevel);  // Creates 8 spaces for indentation

// 2. Creating visual separators
const separator = "-".repeat(20);  // Returns: "--------------------"

// 3. Creating simple patterns
const pattern = "=*".repeat(5);    // Returns: "=*=*=*=*=*"

// 4. Building ASCII art
const triangle = [
    "*".repeat(1),
    "*".repeat(2),
    "*".repeat(3)
].join("\n");
// Results in:
// *
// **
// ***

// 5. Padding strings
const number = "42";
const paddedNumber = "0".repeat(5 - number.length) + number;  // Returns: "00042"

// Note: Using repeat with 0 or negative numbers
"test".repeat(0);        // Returns: "" (empty string)
"test".repeat(-1);       // Throws RangeError