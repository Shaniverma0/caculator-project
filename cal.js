const display = document.querySelector('.display');
const buttons = document.querySelectorAll('button');

let currentValue = '';
let lastChar = '';

buttons.forEach((btn) => {
  btn.addEventListener('click', () => {
    const value = btn.innerText;

    // AC - clear all
    if (value === 'AC') {
      currentValue = '';
      display.value = '0';
      lastChar = '';
      return;
    }

    // DEL - backspace
    if (value === 'DEL') {
      currentValue = currentValue.slice(0, -1);
      display.value = currentValue || '0';
      lastChar = currentValue.slice(-1);
      return;
    }

    // Equal
    if (value === '=') {
      try {
        currentValue = eval(currentValue).toString();
        display.value = currentValue;
      } catch {
        display.value = 'Error';
        currentValue = '';
      }
      return;
    }

    // Prevent double operators
    if ('+-*/%'.includes(value)) {
      if ('+-*/%'.includes(lastChar)) return;
    }

    currentValue += value;
    lastChar = value;
    display.value = currentValue;
  });
});
