/* =====================================================
   About Me Card - Your Unit 1 Project
   =====================================================

   Follow the instructions below. Each step has a hint
   in the comments. Write YOUR code right below each hint.

   Don't forget: first open index.html and add an
   id to each thing in the card so your JS can find it!
   ===================================================== */


// =====================================================
// STEP 1: Create variables for your personal info
// =====================================================
// Hint: Make a variable for your name using let
// Write your code here:
let name ="Gabriel";

// Hint: Make a variable for something you like (a hobby, food, show, anything)
// Write your code here:
let likes = "reading, DND, and nature parks";

// Hint: Make a variable for your birth year. This one should use const
// (since your birth year will never change!)
// Write your code here:

const birthYear = 1989;

// =====================================================
// STEP 2: Do some math to figure out your age in months
// =====================================================
// Hint: First make a variable called currentYear and set it to 2026
let currentYear = 2026;

// Hint: Now make a variable called ageYears using subtraction
// (currentYear minus your birth year)

let ageYears = currentYear - birthYear;
// Hint: Now make a variable called ageMonths by multiplying ageYears by 12

let ageMonths  = ageYears * 12;

// =====================================================
// STEP 3: Change what's on the page
// =====================================================
// Reminder: The pattern looks like this:
//   document.getElementById("theId").textContent = "new text";
//
// You'll need to combine text and variables using the + sign.
// Example: "Hi, I'm " + myName + "!"


// Hint: Change the h1 so it says a greeting with your name

document.getElementById("intro").textContent = "Hi, I'm " + name + "!";
// Hint: Change the first paragraph so it says your age in months

document.getElementById("date").textContent = "I am " + ageMonths + " months old.";
// Hint: Change the second paragraph so it says something fun using your hobby variable

document.getElementById("bio").textContent = "My hoobies are " + likes + ".";

// =====================================================
// STEP 4: Add console logs to check your work
// =====================================================
// Hint: Log your name to the console

console.log(name);
// Hint: Log your age in years to the console

console.log(ageYears);

// =====================================================
// STEP 5 (BONUS): Use typeof
// =====================================================
// Hint: Set the last paragraph (the small italic one) to show
// what type of data ageMonths is. Use typeof!
// Example format: "Fun fact: ageMonths is a number"

document.getElementById("small-text").textContent = "Fun fact: ageMOnths is a " + typeof ageMonths + ".";

// =====================================================
// DONE! Save everything and open index.html in a browser.
// If something doesn't work, open the console (F12) and look
// for errors. Common problems:
//   - Did you add ids to your HTML?
//   - Do the ids in your JS match the ids in your HTML exactly?
//   - Did you save BOTH files?
// =====================================================
