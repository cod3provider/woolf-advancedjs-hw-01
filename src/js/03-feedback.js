import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');

if(localStorage.getItem("feedback-form-state")) {
  let getValues = JSON.parse(localStorage.getItem("feedback-form-state"));

  form.elements.email.value = getValues.email;
  form.elements.message.value = getValues.message;
}

const feedback = {};

const handleInput = () => {
  const {email, message} = form.elements;
  feedback.email = email.value;
  feedback.message = message.value;

  localStorage.setItem("feedback-form-state", JSON.stringify(feedback));
}

const handleSubmit = e => {
  e.preventDefault();

  console.log(feedback);
  form.reset();
  localStorage.setItem("feedback-form-state", "");
}

form.addEventListener('input', throttle(handleInput, 500));
form.addEventListener('submit', handleSubmit);