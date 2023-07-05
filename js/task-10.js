function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const userList = document.querySelector('.user-list');
const addUserForm = document.querySelector('.add-user-form');
const nameInput = document.querySelector('#name-input');
const ageInput = document.querySelector('#age-input');

addUserForm.addEventListener('submit', event => {
  event.preventDefault();

  const name = nameInput.value.trim();
  const age = ageInput.value.trim();

  if (name === '' || age === '') {
    alert('Please fill in all fields');
    return;
  }

  const userItem = document.createElement('li');
  userItem.textContent = `${name}, ${age}`;
  userList.appendChild(userItem);

  nameInput.value = '';
  ageInput.value = '';
});
