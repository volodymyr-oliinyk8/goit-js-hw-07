const quantityСategoriesEl = document.querySelectorAll('.item');
console.log(`В списке ${quantityСategoriesEl.length} категорий`);

const q = quantityСategoriesEl.forEach(el => {
    console.log(`Категория: ${el.firstElementChild.textContent}`);
    const quantityEl = el.lastElementChild.querySelectorAll('li').length;
    console.log(`Количество элементов: ${quantityEl}`)
});