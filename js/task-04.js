const counter = document.querySelector('#value');
const incrementBtn = document.querySelector('[data-action="increment"]');
const decrementBtn = document.querySelector('[data-action="decrement"]');

let counterValue = 0;

const updateCounter = () => {
  counter.textContent = counterValue;
};

const increment = () => {
  counterValue += 1;
  updateCounter();
};

const decrement = () => {
  counterValue -= 1;
  updateCounter();
};

incrementBtn.addEventListener('click', increment);
decrementBtn.addEventListener('click', decrement);