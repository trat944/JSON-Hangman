import { elements, englishWords } from './domReferences.js';

document
  .querySelector('#start-game')
  .addEventListener('click', getMandatoryInput);

function getMandatoryInput() {
  const { usernameInput, playerName, playGame } = elements;
  const usernameValue = usernameInput.value;
  if (!usernameValue) {
    alert('ingresa username');
  } else {
    showForm(playerName, playGame);
    createLetters();
    chooseWord();
  }
}

function chooseWord() {
  const { wordContainer } = elements;
  const randomNumber = Math.floor(Math.random() * 130);
  const chosenWord = englishWords[randomNumber];
  for (let i = 0; i < chosenWord.length; i++) {
    const underlineLetter = document.createElement('div');
    underlineLetter.classList.add('underlineLetter');
    underlineLetter.textContent = '';
    wordContainer.appendChild(underlineLetter);
  }
  console.log(chosenWord);
}

function showForm(sectiontoHide, sectiontoShow) {
  sectiontoHide.classList.add('hide');
  sectiontoShow.classList.remove('hide');
}

function createLetters() {
  const { lettersContainer } = elements;
  const letters = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
  ];
  for (let i = 0; i < letters.length; i++) {
    const letter = document.createElement('button');
    letter.classList.add('letter');
    letter.textContent = letters[i];
    lettersContainer.appendChild(letter);
    let isTrue = true;
    letter.addEventListener('click', () => {
      if (isTrue) {
        console.log(letter);
        letter.classList.add('hidden');
        isTrue = false;
      }
    });
  }
}
