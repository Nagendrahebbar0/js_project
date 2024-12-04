let display = document.getElementById('display');

// Append value to the display
function appendValue(value) {
  // Prevent more than one dot in a single number
  if (value === '.' && display.value.slice(-1) === '.') {
    return;
  }

  // Ensure no duplicate dots in the current number
  const lastNumber = display.value.split(/[\+\-\*\/]/).pop(); // Get the last number
  if (value === '.' && lastNumber.includes('.')) {
    return;
  }

  display.value += value;
}

// Clear the display
function clearDisplay() {
  display.value = '';
}

// Perform the calculation
function calculate() {
  try {
    display.value = eval(display.value); // Evaluate the expression
  } catch (error) {
    display.value = 'Error'; // Show error if the expression is invalid
  }
}

// Delete the last character
function deleteLast() {
  display.value = display.value.slice(0, -1); // Remove the last character
}
