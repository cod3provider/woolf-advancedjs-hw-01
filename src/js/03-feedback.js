import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const {email, message} = form.elements;

const LOCAL_KEY = "feedback-form-state";
const getLocalItems = localStorage.getItem(LOCAL_KEY);

if(getLocalItems) {
  let getValues = JSON.parse(getLocalItems);

  email.value = getValues.email;
  message.value = getValues.message;
}

const feedback = {};

const handleInput = () => {
  feedback.email = email.value;
  feedback.message = message.value;

  localStorage.setItem(LOCAL_KEY, JSON.stringify(feedback));
}

const handleSubmit = e => {
  e.preventDefault();

  console.log(feedback);
  form.reset();
  localStorage.setItem(LOCAL_KEY, "");
}

form.addEventListener('input', throttle(handleInput, 500));
form.addEventListener('submit', handleSubmit);