//alert("I'M SCREAMING");
//commented it out so it doesnt repeadetly pop out

const storage = document.querySelector("#storage");
//const is constant variable that will maintain itself throught the code
//JS works w/ period so .querySelector
const exit = document.querySelector("#exit");
const reset = document.querySelector("#reset");
//all these are created variables and naming them
const story = document.querySelector("#story");
const result = document.querySelector("#result");
const ascii = document.querySelector("#ascii");
//these containers will allow for shortcuts
//so just write result or ascii or exit for future use

let hasKey = false;
//checking to see whether if the player has the key at the start
let doorAttemps = 0;

storage.addEventListener("click", function () {
  //this will "listen" for something to happen
  story.textContent = "You find yourself in the Throne room";

  if (hasKey === false) {
    hasKey = true;
    result.textContent = " You find a small key and take it.";
    //if player doesnt have a key from previous code will now have a key
  } else {
    result.textContent = " Theres nothing new";
  }
});
