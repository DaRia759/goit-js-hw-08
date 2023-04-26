import throttle from "lodash.throttle";

const STORAGE_KEY = "feedback-form-state";

const inputText = {};

// const data = { email, message };

const refs = {
    form: document.querySelector('.feedback-form'),
    textarea: document.querySelector('.feedback-form textarea'),
};

refs.form.addEventListener('submit', onFormSubmit);
refs.textarea.addEventListener('input', throttle(onTextareaInput, 500));

refs.form.addEventListener('input', event => {
    inputText[event.target.name] = event.target.value;

    console.log(inputText);
});

populateTextarea();

function onFormSubmit(event) {
    event.preventDefault();
    
    inputText = event.currentTarget.elements;
    
    console.log({ email: email.value, message: message.value });
    
    localStorage.removeItem(STORAGE_KEY);
    
    event.currentTarget.reset();
};

function onTextareaInput(event) {
    data = event.target.value;

    localStorage.setItem(STORAGE_KEY, data);
};


function populateTextarea(event) {
    const savedMessage = localStorage.getItem(STORAGE_KEY);

    if (savedMessage) {
        console.log(savedMessage);
        refs.textarea.value = savedMessage;
    }
};
