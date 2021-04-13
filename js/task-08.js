const inputEl = document.querySelector('#controls > input');
const renderBtn = document.querySelector('[data-action="render"]');
const destroyBtn = document.querySelector('[data-action="destroy"]');
const createDivBox = document.querySelector('#boxes');

renderBtn.addEventListener('click', createBoxes);

function createBoxes() {
    inputEl.addEventListener('input', (amount) => {
        const array = [];
        array.length = amount.currentTarget.value;
    })
   
    console.log(amount.currentTarget.value);
    // array.length = amount.currentTarget.value;
    // console.log(array);
}


// function destroyBoxes() {

// }

// const randomRgb = () => {
//     const rgbNum = () => Math.floor(Math.random() * 256);
//     const r = rgbNum();
//     const g = rgbNum();
//     const b = rgbNum();
//     return `rgb(${r},${g},${b})`;
// };