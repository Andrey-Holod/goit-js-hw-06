const input = document.querySelector('#validation-input');
const validLength = parseInt(input.getAttribute('data-length'));

input.addEventListener('blur', () => {
  const inputValue = input.value.trim();
  const isInputValid = inputValue.length === validLength;

  if (isInputValid) {
    input.classList.remove('invalid');
    input.classList.add('valid');
  } else {
    input.classList.remove('valid');
    input.classList.add('invalid');
  }
});
