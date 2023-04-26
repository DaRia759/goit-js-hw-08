import throttle from "lodash.throttle";

const STORAGE_KEY = "feedback-form-state";

const form = document.querySelector('.feedback-form');
const email = document.querySelector('input[name="email"]');
const message = document.querySelector('input[name="message"]');

const data = {
    email: email.value,
    message: message.value,
};

let inputText = {};

form.addEventListener('input', throttle(savedData, 500));

populateTextarea();

function savedData(event) {
    event.preventDefault;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
};

function reloadedPage(event) {
    const dataFromLocaleStorage = localStorage.getItem('STORAGE_KEY');
    const parsedDataFromLocalStorage = JSON.parse(dataFromLocaleStorage);

    if (dataFromLocaleStorage) {
        email.value = parsedDataFromLocalStorage.email;
        message.value = parsedDataFromLocalStorage.message;
    } else {
        email.value = "";
        message.value = "";
    }
};

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();
    
    inputText = event.currentTarget.elements;
    
    console.log({ email: email.value, message: message.value });
    
    localStorage.removeItem(STORAGE_KEY);
    
    event.currentTarget.reset();
};

function populateTextarea(event) {
   refs.textContent = localStorage.getItem(STORAGE_KEY) || '';
};
