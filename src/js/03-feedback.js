const form = document.querySelector('.feedback-form');

if(localStorage.getItem("feedback-form-state")) {
  let getValues = JSON.parse(localStorage.getItem("feedback-form-state"));

  form.elements.email.value = getValues.email;
  form.elements.message.value = getValues.message;
}

const feedback = {};

const handleInput = e => {
  const { email, message } = form.elements;

  const feedback = {
    email: email.value,
    message: message.value,
  }

  console.log(feedback);

  localStorage.setItem("feedback-form-state", JSON.stringify(feedback));
}

form.addEventListener('input', handleInput);