const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('blur', onInputBlur);

function onInputBlur (event) {
    if (event.target.value.length < inputEl.getAttribute('data-length')) {
        inputEl.classList.add('invalid');
    } else {
        inputEl.classList.add('valid');
    };
}