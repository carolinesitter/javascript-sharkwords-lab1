const ALPHABET = 'abcdefghijklmnopqrstuvwxyz';

const WORDS = [
  'strawberry',
  'orange',
  'apple',
  'banana',
  'pineapple',
  'kiwi',
  'peach',
  'pecan',
  'eggplant',
  'durian',
  'peanut',
  'chocolate',
];

const numWrong = 0;

// Loop over the chars in `word` and create divs.
// The divs should be appended to the section with id="word-container".
const createDivsForChars = (word) => {

  //create a for loop that loops over each char in word
  //for each letter generate a div
  //append div to word container
  
  for (let char of word) {
    document.querySelector('#word-container').insertAdjacentHTML('beforeend', `<div class="letter-box ${char}">`);
  
  };
};

// Loop over each letter in the alphabet and generate a button for each letter
// The buttons should be appended to the section with id="letter-buttons"
const generateLetterButtons = () => {
  
  // loop over each char in alphabet and create button
  // append each button to the section id="letter-buttons"
  
  for (let char of ALPHABET) {
    document.querySelector('#letter-buttons').insertAdjacentHTML('beforeend', `<button> ${char} </button>`);
  }
  
};


// Set the `disabled` property of `buttonEl` to `true.
//
// `buttonEl` is an `HTMLElement` object.
//
const disableLetterButton = (buttonEl) => {
  
  // create a function to disable a button after a user clicks on it 
  // buttonEl is an HTML element user clicks on
  // use "disabled" attribute and set to true

  buttonEl.disabled = true;

};

// This is a helper function we will use in the future
// It should return `true` if `letter` is in the word
// For now, you should test it out to make sure it works

const isLetterInWord = (letter) => {
  
  // take in a string 'letter' and returns true if letter is in word
  // check if div has letter class we are checking
  
  document.querySelector(`div.${letter}`) !== null;

};

// This is like if __name__ == '__main__' in Python
// It will be called when the file is run (because
// we call the function on line 66)
(function startGame() {
  // For now, we'll hardcode the word that the user has to guess
  // You can change this to choose a random word from WORDS once you
  // finish this lab but we hard code it so we know what the word is
  // and can tell if things look correct for this word
  const word = 'hello';

  createDivsForChars(word);

  generateLetterButtons();

  // in the next lab, you will be adding functionality to handle when
  // someone clicks on a letter
})();

// startGame();