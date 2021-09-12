const imgInsert = document.getElementById('meme-insert');
// const btnMeme = document.querySelectorAll('#btn-container button');
const imgContainer = document.getElementById('meme-image-container');
const memeReady = document.querySelectorAll('#meme-container img');
const input = document.getElementById('text-input');
const meme = document.getElementById('meme-image');

function insertText() {
  const textMeme = document.querySelector('#meme-text');
  if (input.textContent !== null) {
    textMeme.innerHTML = input.value;
  }
}

input.addEventListener('input', insertText);

function renderizationMeme() {
  const inputMeme = document.getElementById('meme-insert').files[0];
  const memeReady = new FileReader();
  if (inputMeme) {
    memeReady.readAsDataURL(inputMeme);
    memeReady.onloadend = function renderization() {
      meme.src = memeReady.result;
    };
  }
}

imgInsert.addEventListener('input', renderizationMeme);

function inputChange(event) {
  meme.src = event.target.src;
}

for (let index = 0; index < memeReady.length; index += 1) {
  memeReady[index].addEventListener('click', inputChange);
}
