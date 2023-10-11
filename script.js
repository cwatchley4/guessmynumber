"use strict";

// VIDEO Intro to the Dom

// console.log(document.querySelector(".message").textContent);

// VIDEO What is the DOM and DOM manipulation?

/*

DOM - Document Object Model
A structed representation of HTML domcuments. It allows javascript to access HTML elements and styles and manipulate them.

Chage text, HTML attributes, even CSS styles.

THE DOM TREE
"Document" is the special obect that is the entry point to the DOM.

DOM is a complete respresentation of the HTML document.

DOM methods and properties for DOM manipulation is not a part of the JS langage.
Instead, it is a Web API that can interact with JS. It is written in JS, and is accessible to JS.
There are other APIs that we'll learn about later.

*/

// VIDEO DOM Manipulation and Practice

/*
console.log(document.querySelector(".message").textContent);
document.querySelector(".message").textContent = "🎉 Correct Number!";
console.log(document.querySelector(".message").textContent);

document.querySelector(".number").textContent = 13;
document.querySelector(".score").textContent = 10;

document.querySelector(".guess").value = 23;
console.log(document.querySelector(".guess").value);
*/

// VIDEO Handling Click Events

// We use "event listeners" for this.

/*

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector(".message").textContent = "🚫 No number!";
  }
});

*/

// VIDEO Implement Game Logic

/*

const secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector(".number").textContent = secretNumber;

let score = 20;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector(".message").textContent = "🚫 No number!";
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "🎉 Correct number!";
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "📈 Too high!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "😢 Game over!";
      document.querySelector(".score").textContent = 0;
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "📈 Too high!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "😢 Game over!";
      document.querySelector(".score").textContent = 0;
    }
  }
});

*/

// VIDEO Manipulating CSS

/*

const secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector(".number").textContent = secretNumber;

let score = 20;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  if (!guess) {
    // When there is no input
    document.querySelector(".message").textContent = "🚫 No number!";
  } else if (guess === secretNumber) {
    // When player wins
    document.querySelector(".message").textContent = "🎉 Correct number!";
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
  } else if (guess > secretNumber) {
    // When guess is too high
    if (score > 1) {
      document.querySelector(".message").textContent = "📈 Too high!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "😢 Game over!";
      document.querySelector(".score").textContent = 0;
    }
  } else if (guess < secretNumber) {
    // When guess is too low
    if (score > 1) {
      document.querySelector(".message").textContent = "📈 Too high!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "😢 Game over!";
      document.querySelector(".score").textContent = 0;
    }
  }
});

*/

// VIDEO - Finish Coding Challenge 1

// let secretNumber = Math.trunc(Math.random() * 20) + 1;
// let score = 20;
// let highScore = 0;

// document.querySelector(".check").addEventListener("click", function () {
//   const guess = Number(document.querySelector(".guess").value);
//   console.log(guess, typeof guess);

//   if (!guess) {
//     // When there is no input
//     document.querySelector(".message").textContent = "🚫 No number!";
//   } else if (guess === secretNumber) {
//     // When player wins
//     document.querySelector(".number").textContent = secretNumber;
//     document.querySelector(".message").textContent = "🎉 Correct number!";
//     document.querySelector("body").style.backgroundColor = "#60b347";
//     document.querySelector(".number").style.width = "30rem";
//     if (score > highScore) {
//       highScore = score;
//     }
//     document.querySelector(".highscore").textContent = highScore;
//   } else if (guess > secretNumber) {
//     // When guess is too high
//     if (score > 1) {
//       document.querySelector(".message").textContent = "📈 Too high!";
//       score--;
//       document.querySelector(".score").textContent = score;
//     } else {
//       document.querySelector(".message").textContent = "😢 Game over!";
//       document.querySelector(".score").textContent = 0;
//     }
//   } else if (guess < secretNumber) {
//     // When guess is too low
//     if (score > 1) {
//       document.querySelector(".message").textContent = "📉 Too low!";
//       score--;
//       document.querySelector(".score").textContent = score;
//     } else {
//       document.querySelector(".message").textContent = "😢 Game over!";
//       document.querySelector(".score").textContent = 0;
//     }
//   }
// });

// document.querySelector(".again").addEventListener("click", function () {
//   score = 20;
//   document.querySelector(".score").textContent = score;
//   secretNumber = Math.trunc(Math.random() * 20) + 1;
//   document.querySelector(".number").textContent = "?";
//   document.querySelector(".guess").value = "";
//   document.querySelector(".message").textContent = "Start guessing...";
//   document.querySelector("body").style.backgroundColor = "#222";
//   document.querySelector(".number").style.width = "15rem";
// });

// VIDEO Refactoring Our Code

// This will enable us to eliminate duplicate code.

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  // When there is no input
  if (!guess || guess > 20) {
    displayMessage("🚫 Try again!");

    // When guess is correct
  } else if (guess === secretNumber) {
    document.querySelector(".number").textContent = secretNumber;
    displayMessage("🎉 Correct number!");
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    if (score > highScore) {
      highScore = score;
    }
    document.querySelector(".highscore").textContent = highScore;

    // When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? "📈 Too high!" : "📉 Too low!");
    }
    score--;
    document.querySelector(".score").textContent = score;
    if (score === 0) {
      displayMessage("😢 Game over!");
      document.querySelector(".score").textContent = 0;
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  document.querySelector(".score").textContent = score;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  displayMessage("Start guessing...");
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
