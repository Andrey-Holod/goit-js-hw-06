function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const form = document.querySelector('.login-form');

form.addEventListener('submit', event => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const email = formData.get('email');
  const password = formData.get('password');

  if (email.trim() === '' || password.trim() === '') {
    alert('Please fill in all fields');
    return;
  }

  console.log('Login successful');
  event.target.reset();
});
