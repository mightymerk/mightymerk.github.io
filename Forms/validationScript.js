document.addEventListener('DOMContentLoaded', () => {
  // Retrieve the input field element and the form element
  const inputField = document.getElementById('inputField');
  const form = document.getElementById('myForm');
  const errorMessage = document.createElement('p');
  const confirmationMessage = document.createElement('p');

  // Style the error and confirmation messages
  errorMessage.style.color = 'red';
  confirmationMessage.style.color = 'green';

  // Insert the error and confirmation messages into the DOM
  form.appendChild(errorMessage);
  form.appendChild(confirmationMessage);

  // Regular expression for alphanumeric input
  const alphanumericRegex = /^[a-zA-Z0-9]+$/;

  // Function to validate the input value
  function validateInput(value) {
      return alphanumericRegex.test(value);
  }

  // Add an event listener to the form for the submit event
  form.addEventListener('submit', (event) => {
      // Clear previous messages
      errorMessage.textContent = '';
      confirmationMessage.textContent = '';

      // Get the input value
      const inputValue = inputField.value;

      // Validate the input
      if (!validateInput(inputValue)) {
          // Display error message and prevent form submission
          errorMessage.textContent = 'Error: Input must be alphanumeric.';
          event.preventDefault();
      } else {
          // Display confirmation message
          confirmationMessage.textContent = 'Form submitted successfully!';
          // Prevent actual form submission for this assignment
          event.preventDefault();
      }
  });
});
