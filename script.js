//-----------------------------------------------------------------------------

for (let i = 1; i <= 25; i += 1) {
  const container = document.querySelector('#pixel-board');
  const newDiv = document.createElement('div');
  newDiv.classList.add('pixel');
  container.appendChild(newDiv);
  container.style.width = '220px';
  container.style.height = '220px';
}

// -----------Removendo e Selecionando cores----------------------------------------

const colors = document.getElementsByClassName('color');

function removeSelect() {
  for (let i = 0; i < colors.length; i += 1) {
    colors[i].classList.remove('selected');
  }
}

function addSelect(event) {
  event.target.classList.add('selected');
}

for (let i = 0; i < colors.length; i += 1) {
  colors[i].addEventListener('click', removeSelect);
  colors[i].addEventListener('click', addSelect);
}

// -----------Atribuindo o background do pixel selecionado----------------------------------------------------

function pixelColor(event) {
  if (event.target.classList.contains('pixel')) {
    const getSelected = document.querySelector('.selected');
    const getBckgcolor = window
      .getComputedStyle(getSelected)
      .getPropertyValue('background-color');
    event.target.style.backgroundColor = getBckgcolor;
  }
}
document.addEventListener('click', pixelColor);

// ---------Botão para limpar (add  a função ao HTML com o onclick)-------------

function limpaColor() {
  const palletCollor = document.querySelectorAll('.pixel');
  palletCollor.forEach((e) => {
    e.style.backgroundColor = 'white';
  });
}

// ---------Gerando cores ao carregar a pagina--------------------------------------------------------------------

const boxCollor = document.querySelectorAll('.box');

function randomCollor() {
  const numbers = '0123456789ABCDEF';
  let color = '#';

  for (let i = 0; i < 6; i += 1) {
    const randomColor = Math.floor(Math.random() * numbers.length);
    color += numbers.substring(randomColor, randomColor + 1);
  }
  return color;
}
boxCollor.forEach((e) => {
  const newColor = randomCollor();
  e.style.background = newColor;
});

// ----------Criando  botão VQV-----------------------------------------------------------------------

function createButton() {
  const boardDiv = document.getElementById('board');
  const button = document.createElement('button');
  button.id = 'generate-board';
  button.innerText = 'VQV';
  boardDiv.appendChild(button);
}
createButton();

// --------------calcula tamanho do board dinâmicamente---------------------------------------------

function boardUser() {
  const board = document.getElementById('pixel-board');
  const input = document.getElementById('board-size');
  let inputValue = input.value;
  if (inputValue < 5) {
    inputValue = 5;
  } else if (inputValue > 50) {
    inputValue = 50;
  } else {
    inputValue = input.value;
  }
  board.style.height = inputValue * 44 + 'px';
  board.style.width = inputValue * 44 + 'px';
  const matriz = inputValue ** 2;
  for (let index = 0; index < matriz; index += 1) {
    const divs = document.createElement('div');
    divs.classList.add('pixel');
    board.appendChild(divs);
  }
}

function createBoardUser() {
  const board = document.getElementById('pixel-board');
  const input = document.getElementById('board-size');

  board.innerText = '';
  if (input.value === '') {
    alert('Board inválido!');
  } else {
    boardUser();
  }
}

function clickButton() {
  const button = document.getElementById('generate-board');
  button.addEventListener('click', createBoardUser);
}
clickButton();
