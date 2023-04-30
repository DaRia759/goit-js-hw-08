import throttle from "lodash.throttle";

const STORAGE_KEY = "feedback-form-state";

const form = document.querySelector('.feedback-form');
const emailInput = document.querySelector('input[name="email"]');
const messageInput = document.querySelector('textarea[name="message"]');

const savedData = () => {
    const email = emailInput.value;
    const message = messageInput.value;

    const data = { email, message };

    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
};

// let inputText = {};

form.addEventListener('input', throttle(savedData, 500));
form.addEventListener('submit', onFormSubmit);

savedDataFromLocalStorage();

function savedDataFromLocalStorage() {
    
    const parsedDataFromLocalStorage = JSON.parse(localStorage.getItem(STORAGE_KEY));

    if (localStorage.getItem(STORAGE_KEY)) {
        emailInput.value = parsedDataFromLocalStorage.email;
        messageInput.value = parsedDataFromLocalStorage.message;
    } else {
        emailInput.value = "";
        messageInput.value = "";
    }
};


function onFormSubmit(event) {
    event.preventDefault();
    
    const getData = JSON.parse(localStorage.getItem(STORAGE_KEY));

    if (emailInput.value === '' || messageInput.value === '') {
        return alert('Please, fill in all fields!');
    } else {
        console.log(getData);
    
        localStorage.removeItem(STORAGE_KEY);
    
        event.currentTarget.reset();
    };
}
    
    
