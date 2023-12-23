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

function chooseWord() {
  const {wordContainer} = elements;
  const randomNumber = Math.floor(Math.random() * 130);
  const chosenWord = englishWords[randomNumber];
  for (let i = 0; i < chosenWord.length; i++) {
    const underlineLetter = document.createElement('div');
    underlineLetter.classList.add('underlineLetter');
    underlineLetter.textContent = '';
    wordContainer.appendChild(underlineLetter);
  }
  console.log(chosenWord);
  createLetters(chosenWord);
}


function showForm(sectiontoHide, sectiontoShow){
  sectiontoHide.classList.add("hide");
  sectiontoShow.classList.remove("hide");
}

function createLetters(chosenWord) {
  const {lettersContainer} = elements;
  const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  /////creation of letter DIVS
  for (let i = 0; i < letters.length; i++) {
    const letter = document.createElement('button');
    letter.classList.add('letter');
    letter.textContent = letters[i];
    lettersContainer.appendChild(letter);
    //////INTERRUPTOR
    let isTrue = true;
    ///////////EventListeners when it is correct or incorrect: if/else
    letter.addEventListener('click', () => {
      if (isTrue) {
        if ((chosenWord).includes(letter.textContent)) {
          /////letterPositions stores the index of the word that has the letter clicked
          const letterPositions = [];
          //////Better a for loop than transforming it into an array and forEach
          for (let i = 0; i < chosenWord.length; i++) {
            if (chosenWord[i] === letter.textContent) letterPositions.push(i);
          }
          ////////underlineGroup to access the DOM (underline divs)
          const underlineGroup = document.querySelectorAll('.underlineLetter');
          /////forEach to access the elements that are present in the letterPositions array
          underlineGroup.forEach((element, i) => {
            if (letterPositions.includes(i)) {
              element.textContent = letter.textContent;
              element.classList.add('spotted');
            }
          })
          ///////Still need to figure out how to check that all have the class spotted to declare winner.
        } else {
          //////Access the DOM of the parts of the hangman
          const {hangman} = elements;
          const hangmanParts = hangman.querySelectorAll('div');

          console.log('Nope');
        }


        letter.classList.add('hidden');
        isTrue = false;
      }
    });
  }
}