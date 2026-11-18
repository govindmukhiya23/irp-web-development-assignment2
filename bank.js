"use strict";

// PART 1: Types & Coercion

// "5" + 2 gives "52" because + joins text if either side is a string,
// so the number 2 is turned into "2". "5" - 2 gives 3 because - only
// works on numbers, so "5" is converted to 5 first.

// typeof null === "object" is an old bug from the first version of
// JavaScript. It was never fixed because it would break old websites.

function parseAmount(input) {
  // null and undefined mean the user typed nothing
  if (input === null || input === undefined) {
    throw new Error("Amount is required.");
  }

  // only strings and numbers are allowed
  if (typeof input !== "string" && typeof input !== "number") {
    throw new Error("Invalid type: amount must be a string or a number.");
  }

  // remove outer spaces from strings
  if (typeof input === "string") {
    input = input.trim();
  }

  // Number("") is 0, so an empty string must be caught before converting
  if (input === "") {
    throw new Error("Amount cannot be empty.");
  }

  const amount = Number(input);

  // "abc" and "12.5.3" become NaN
  if (Number.isNaN(amount)) {
    throw new Error("Amount must be a valid number.");
  }

  if (amount <= 0) {
    throw new Error("Amount must be greater than zero.");
  }

  return amount;
}

// testing parseAmount (it never logs by itself, the try/catch does)
const testInputs = ["500", " 250 ", "", "abc", null, undefined, "12.5.3"];

for (const value of testInputs) {
  try {
    const result = parseAmount(value);
    console.log("Valid amount:", result);
  } catch (error) {
    console.log("Error:", error.message);
  }
}

console.log("5" + 2); // "52" (string joining)
console.log("5" - 2); // 3 (number maths)
console.log(typeof null); // "object"


// PART 2: Scoping & Hoisting

// Step 1: main declarations
// BANK_NAME uses const because the name never changes.
// transactionCounter uses let because the number goes up over time.
const BANK_NAME = "JS National Bank";
let transactionCounter = 0;

transactionCounter++;
console.log(BANK_NAME, "- transactions:", transactionCounter);

// Step 2: HOISTING DEMO

// Before the code runs, JavaScript creates the execution context. In this
// creation phase, var is set to undefined and function declarations are
// stored fully. let and const stay uninitialized until their line runs
// (the Temporal Dead Zone). Then the execution phase runs line by line.

// var: prints undefined because it is hoisted
console.log("var before declaration:", accountType);
var accountType = "Savings";

// let: ReferenceError because of the Temporal Dead Zone
try {
  console.log(branchName);
  let branchName = "Main Branch";
} catch (error) {
  console.log("let error:", error.name + " - " + error.message);
}

// function declaration: works because it is fully hoisted
announce();
function announce() {
  console.log("Welcome to " + BANK_NAME + "!");
}

// function expression: only the var name is hoisted (as undefined),
// so calling it early gives a TypeError
try {
  notify();
} catch (error) {
  console.log("function expression error:", error.name + " - " + error.message);
}
var notify = function () {
  console.log("Notification sent.");
};

// Step 3: the asynchronous loop bug

// var has one shared variable for the whole loop. By the time the
// timeouts run, the loop has finished and i is 3 for all of them.
for (var i = 0; i < 3; i++) {
  setTimeout(function () {
    console.log("var loop:", i);
  }, 0);
}

// let creates a new i for every round of the loop, so each timeout
// remembers its own value: 0, 1, 2.
for (let j = 0; j < 3; j++) {
  setTimeout(function () {
    console.log("let loop:", j);
  }, 0);
}
