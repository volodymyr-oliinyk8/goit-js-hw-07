const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];
  const ingredientsEl = document.querySelector('#ingredients');

  const ingredientsItem = ingredients.map(el => {
    const item = document.createElement('li');
    item.textContent = el;
    return item;
  });
  
  ingredientsEl.append(...ingredientsItem);
