const form = document.querySelector('.login-form');

form.addEventListener('submit', event => {
  event.preventDefault();

  const email = event.target.elements.email.value;
  const password = event.target.elements.password.value;

  if (email === '' || password === '') {
    alert('Please fill in all fields');
    return;
  }

  console.log('Login successful');
  event.target.reset();
});

