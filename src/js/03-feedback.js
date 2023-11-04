const form = document.querySelector('.feedback-form');

if(localStorage.getItem("feedback-form-state")) {
  let getValues = JSON.parse(localStorage.getItem("feedback-form-state"));

  form.elements.email.value = getValues.email;
  form.elements.message.value = getValues.message;
}

const feedback = {};

const handleInput = () => {
  const { email, message } = form.elements;

  const feedback = {
    email: email.value,
    message: message.value,
  }

  console.log(feedback);

  localStorage.setItem("feedback-form-state", JSON.stringify(feedback));
}

const handleSubmit = e => {
  e.preventDefault();

  console.log(feedback);
  form.reset();
  localStorage.setItem("feedback-form-state", "");
}

form.addEventListener('input', handleInput);
form.addEventListener('submit', handleSubmit);