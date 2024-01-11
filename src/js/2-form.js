// const { mergeAlias } = require('vite');

const feedbackForm = document.querySelector('.feedback-form');

const localStorageKey = 'feedback-form-state';
const emailInput = feedbackForm.elements.email;
const messageInput = feedbackForm.elements.message;

const savedData = localStorage.getItem(localStorageKey);

if (savedData) {
  try {
    const parsedData = JSON.parse(savedData);
    emailInput.value = parsedData.email;
    messageInput.value = parsedData.message;
  } catch (error) {
    console.log(error.name);
    console.log(error.message);
  }
}

feedbackForm.addEventListener('input', () => {
  const feedback = {
    email: emailInput.value.trim(),
    message: messageInput.value.trim(),
  };
  localStorage.setItem(localStorageKey, JSON.stringify(feedback));
});
feedbackForm.addEventListener('submit', evt => {
  evt.preventDefault();

  if (emailInput.value.trim() === '' || messageInput.value.trim() === '') {
    alert('Заповни всі поля');
    return;
  }
  localStorage.removeItem(localStorageKey);

  console.log({
    email: emailInput.value.trim(),
    message: messageInput.value.trim(),
  });
  feedbackForm.reset();
});
