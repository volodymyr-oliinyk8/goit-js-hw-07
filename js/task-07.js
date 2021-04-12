const inputEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');

inputEl.addEventListener('click', onChangeFontSize);

function onChangeFontSize(event) {
    textEl.setAttribute('style', `font-size: ${event.currentTarget.value}px;`);
}


