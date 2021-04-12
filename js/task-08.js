const inputEl = document.querySelector('#controls > input');
const renderBtn = document.querySelector('[data-action="render"]');
const destroyBtn = document.querySelector('[data-action="destroy"]');
const createDivBox = document.querySelector('#boxes');

function createBoxes(amount) {

}
function destroyBoxes() {
    
}

const randomRgb = () => {
    const rgbNum = () => Math.floor(Math.random() * 256);
    const r = rgbNum();
    const g = rgbNum();
    const b = rgbNum();
    return `rgb(${r},${g},${b})`;
};