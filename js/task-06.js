const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('blur', onInputBlur);

function onInputBlur (event) {
    if (event.target.value.length == inputEl.getAttribute('data-length')) {
        inputEl.classList.add('valid');
    } else {
        inputEl.classList.add('invalid');
    };
}