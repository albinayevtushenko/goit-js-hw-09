const btnStart = document.querySelector('button[data-start]');
const btnStop = document.querySelector('button[data-stop]');
const bodyColorSwitcher = document.querySelector('body');

btnStart.addEventListener('click', onClickBtnStart);
btnStop.addEventListener('click', onClickBtnStop);

let timerId = null;
function onClickBtnStart(evt) {
  evt.currentTarget.setAttribute('disabled', 'true');
  timerId = setInterval(() => {
    bodyColorSwitcher.style.backgroundColor = getRandomHexColor();
  }, 1000);
  btnStop.removeAttribute('disabled', 'false');
}

function onClickBtnStop(evt) {
  evt.currentTarget.setAttribute('disabled', 'true');
  btnStart.removeAttribute('disabled', 'false');
  clearInterval(timerId);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
