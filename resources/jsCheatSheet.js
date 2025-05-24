// 1. Variables with let and const
const name = "Zot";        // Constant, cannot be reassigned
let score = 42;            // Can be reassigned

// 2. Arrow functions
const greet = (name) => `Hello, ${name}`; // Returns greeting
const double = x => x * 2;                // Doubles input

// 3. Object & array destructuring
const user = { name: "Ben", skill: "React" };
const { name: username, skill } = user; // Rename name to username

const coords = [10, 20];
const [x, y] = coords; // Destructure array

// 4. Optional chaining & nullish coalescing
const bio = user?.profile?.bio ?? "No bio available"; // Safe access

// 5. Array methods
const skills = ["React", "MongoDB", "Next.js"];
const upper = skills.map(s => s.toUpperCase()); // Convert to uppercase
const filtered = skills.filter(s => s !== "MongoDB"); // Remove MongoDB
const found = skills.find(s => s.startsWith("N")); // Find first starting with "N"

// 6. Template literals
const language = "JavaScript";
const msg = `I love coding in ${language}`; // "I love coding in JavaScript"

// 7. Async/await with fetch
const getData = async () => {
  try {
    const res = await fetch("/api/users");
    const data = await res.json();
    console.log(data);
  } catch (err) {
    console.error("Fetch failed", err);
  }
};

// 8. ES Modules
// utils/math.js
export const add = (a, b) => a + b;

// In another file
import { add } from './utils/math.js';
const sum = add(2, 3); // 5

// 9. Spread & rest operators
const newUser = { ...user, role: "admin" }; // Clone and extend object
const nums = [1, 2, 3, ...[4, 5]]; // Merge arrays

const sumAll = (...args) => args.reduce((a, b) => a + b, 0); // Sum all args

// 10. Functional programming with map/filter/reduce
const prices = [10, 20, 30];
const withTax = prices.map(p => p * 1.1); // Apply 10% tax
const total = prices.reduce((a, b) => a + b, 0); // Sum prices
