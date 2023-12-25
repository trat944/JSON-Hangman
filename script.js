import { elements, english_words } from './elements.js';
let start;

setLogin();

function setLogin() {
  const { btnStart } = elements;
  start = new Date();

  btnStart.addEventListener('click', startGame);
}

function startGame() {
  const { nameInput, loginSection } = elements;
  if (!nameInput.value) {
    nameInput.nextElementSibling.textContent =
      'Fill this gap with an user name';
  } else {
    localStorage.setItem('username', nameInput.value);
    nameInput.value = '';
    hide(loginSection);
    setGame();
  }
}

function setGame() {
  const { gameSection } = elements;
  show(gameSection);
  setWord();
  setKeyboard();
}

function setWord() {
  const { wordSection } = elements;
  const numberWords = english_words.length;
  const randomNumber = Math.floor(Math.random() * numberWords);
  const randomWord = english_words[randomNumber];

  for (let i = 0; i < randomWord.length; i++) {
    // fixme: se descuadran los <p> al mostrar las letras
    const letterGap = document.createElement('p');
    letterGap.classList.add('letter_gap');
    wordSection.insertAdjacentElement('beforeend', letterGap);
  }

  localStorage.setItem('random word', randomWord);
}

function setKeyboard() {
  const letterArray = [
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
  letterArray.forEach((letter) => {
    const letterBtn = document.createElement('button');
    const { keyboardSection } = elements;
    letterBtn.classList.add('letterStyle');
    letterBtn.textContent = letter;
    keyboardSection.appendChild(letterBtn);
    letterBtn.addEventListener('click', checkWord);
  });
}

function checkWord(e) {
  const { wordSection, gameSection, loseSection, winSection, hangman } =
    elements;
  const word = localStorage.getItem('random word');
  const setWord = new Set(word);
  const lastPart = hangman.querySelector(':last-child');
  const toShow = hangman.querySelector('.hide');

  e.target.disabled = true;
  e.target.removeEventListener('click', checkWord);

  if (toShow === lastPart) {
    //si es la última parte del ahorcado, has perdido
    show(toShow);
    setTimeout(() => {
      hide(gameSection);
      setLoseSection();
      // show(loseSection);
    }, 400);
  } else if (!setWord.has(e.target.textContent.toLowerCase())) {
    //si la letra no está en la palabra
    show(toShow);
  } else {
    //si la letra está en la palabra
    for (let i = 0; i < word.length; i++) {
      if (word[i] === e.target.textContent.toLowerCase()) {
        wordSection.children[i].textContent = e.target.textContent;
      }
    }
  }

  const blank = Array.from(wordSection.children).filter((p) => {
    return !p.textContent;
  });

  if (!blank.length) {
    //si no hay espacios en blanco
    setTimeout(() => {
      hide(gameSection);
      setWinSection();
    }, 400);
  }
}

function restartWin() {
  const { winSection, loginSection } = elements;
  hide(winSection);
  show(loginSection);
}

function restartLose() {
  const { loseSection, loginSection } = elements;
  hide(loseSection);
  show(loginSection);
}

function setLoseSection() {
  const { loseSection, btnLose } = elements;
  show(loseSection);
  btnLose.addEventListener('click', restartLose);
}

function setWinSection() {
  const { winSection, btnWin } = elements;
  show(winSection);
  btnWin.addEventListener('click', restartWin);
}

function show(section) {
  section.classList.remove('hide');
}

function hide(section) {
  section.classList.add('hide');
}
