const inputEl = document.querySelector('#controls > input');
const renderBtn = document.querySelector('[data-action="render"]');
const destroyBtn = document.querySelector('[data-action="destroy"]');
const createDivBox = document.querySelector('#boxes');

function createBoxes(amount) {
    const array = [];
    let counterWidth = 20;
    let counterHeigth = 20;
    const randomRgb = () => {
        const rgbNum = () => Math.floor(Math.random() * 256);
        const r = rgbNum();
        const g = rgbNum();
        const b = rgbNum();
        return `rgb(${r},${g},${b})`;
    };
    const getRandomColor = randomRgb;
    for (let i=0; i<amount; i+=1) {
        array.push(`<div id="newDiv" style="width: ${(counterWidth += 10)}px;
        height: ${(counterHeigth += 10)}px; background: ${getRandomColor()}"></div>`)
    }
    return array.reduce((acc, el) => acc += el, '');
};

const createBoxesWithArray = createBoxes();

renderBtn.addEventListener('click', () => {
    createDivBox.insertAdjacentHTML('beforeend', (createBoxes(inputEl.value)))
});

destroyBtn.addEventListener('click', destroyBoxes);

function destroyBoxes() {
   let deleteDiv = document.querySelectorAll('#newDiv');
   deleteDiv.forEach(el => el.remove());
   inputEl.value = '';
}