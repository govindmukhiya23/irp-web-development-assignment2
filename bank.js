"use strict";

function parseAmount(input) {
  if (input === null || input === undefined) {
    throw new Error("Amount is required.");
  }

  if (typeof input !== "string" && typeof input !== "number") {
    throw new Error("Invalid type: amount must be a string or a number.");
  }

  if (typeof input === "string") {
    input = input.trim();
  }

  if (input === "") {
    throw new Error("Amount cannot be empty.");
  }

  const amount = Number(input);

  if (Number.isNaN(amount)) {
    throw new Error("Amount must be a valid number.");
  }

  if (amount <= 0) {
    throw new Error("Amount must be greater than zero.");
  }
  return amount;
}

const testInputs = ["500", " 250 ", "", "abc", null, undefined, "12.5.3"];

for (const value of testInputs) {
  try {
    const result = parseAmount(value);
    console.log("Valid amount:", result);
  } catch (error) {
    console.log("Error:", error.message);
  }
}

console.log("5" + 2);
console.log("5" - 2);
console.log(typeof null);

const BANK_NAME = "JS National Bank";
let transactionCounter = 0;

transactionCounter++;
console.log(BANK_NAME, "- transactions:", transactionCounter);

console.log("var before declaration:", accountType);
var accountType = "Savings";

try {
  console.log(branchName);
  let branchName = "Main Branch";
} catch (error) {
  console.log("let error:", error.name + " - " + error.message);
}

announce();
function announce() {
  console.log("Welcome to " + BANK_NAME + "!");
}

try {
  notify();
} catch (error) {
  console.log("function expression error:", error.name + " - " + error.message);
}
var notify = function () {
  console.log("Notification sent.");
};

for (var i = 0; i < 3; i++) {
  setTimeout(function () {
    console.log("var loop:", i);
  }, 0);
}

for (let j = 0; j < 3; j++) {
  setTimeout(function () {
    console.log("let loop:", j);
  }, 0);
}
