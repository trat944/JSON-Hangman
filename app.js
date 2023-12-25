import { elements, englishWords } from './domReferences.js';


document.querySelector('#start-game').addEventListener('click', getMandatoryInput);

function getMandatoryInput(){
  const {usernameInput, playerName, playGame}= elements;
  const usernameValue = usernameInput.value;
  if(!usernameValue){
      alert("ingresa username");
  } else {
      showForm(playerName, playGame);
      chooseWord();
  }
}

////////choose the playing word from array
function chooseWord() {
  const randomNumber = Math.floor(Math.random() * 130);
  const chosenWord = englishWords[randomNumber];
  displayWord(chosenWord);
  createLetters(chosenWord);
}

///////create the underlining word to play
function displayWord(chosenWord) {
  const {wordContainer} = elements;
  for (let i = 0; i < chosenWord.length; i++) {
    const underlineLetter = document.createElement('div');
    underlineLetter.classList.add('underlineLetter');
    underlineLetter.textContent = '';
    wordContainer.appendChild(underlineLetter);
    console.log(chosenWord);
  }
}

///////to show/hide sections
function showForm(sectiontoHide, sectiontoShow){
  sectiontoHide.classList.add("hide");
  sectiontoShow.classList.remove("hide");
}

function createLetters(chosenWord, fails) {
  const {lettersContainer} = elements;
  const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  //////////
  const failsObj = { fails: 0 };
  for (let i = 0; i < letters.length; i++) {
    const letter = document.createElement('button');
    letter.classList.add('letter');
    letter.textContent = letters[i];
    lettersContainer.appendChild(letter);
    letterEventListeners(letter, chosenWord, failsObj);
  }
}

function letterEventListeners(letter, chosenWord, failsObj) {
  ///////////EventListeners when it is correct or incorrect: if/else
  letter.addEventListener('click', () => {
    if (chosenWord.includes(letter.textContent)) {
      letterInWord(chosenWord, letter);
    } else {
      letterNotinWord(failsObj);
    }
    letter.classList.add('hidden');
    /////////once: true, outside the anonymous function to act like a switch button, Event will execute at most once.
  }, { once: true });
}

function letterInWord(chosenWord, letter) {
  /////letterPositions stores the index of the word that has the letter clicked
  const letterPositions = [];
  for (let i = 0; i < chosenWord.length; i++) {
    if (chosenWord[i] === letter.textContent) letterPositions.push(i);
  }
  const underlineGroup = document.querySelectorAll('.underlineLetter');
  underlineGroup.forEach((element, i) => {
    if (letterPositions.includes(i)) {
      element.textContent = letter.textContent;
      element.classList.add('spotted');
    }
  })
  //////check if all underline divs have the class spotted.
  const allSpotted = Array.from(underlineGroup).every(element => element.classList.contains('spotted'));
  if (allSpotted) {
    alert('You win');
  }
}

function letterNotinWord(failsObj) {
  const {hangman} = elements;
  const hangmanParts = hangman.querySelectorAll('div');
  failsObj.fails++;
  hangmanParts[failsObj.fails].classList.remove(`hide-${failsObj.fails}`);
  if (failsObj.fails === 9) alert('You lost');
}
