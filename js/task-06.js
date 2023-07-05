const validationInput = document.querySelector('#validation-input');

validationInput.addEventListener('blur', event => {
  const input = event.target;
  const inputValue = input.value;
  const dataLength = Number(input.dataset.length);

  if (inputValue.length === dataLength) {
    input.classList.add('valid');
    input.classList.remove('invalid');
  } else {
    input.classList.add('invalid');
    input.classList.remove('valid');
  }
});
