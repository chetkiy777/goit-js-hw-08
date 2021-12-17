import { throttle } from "lodash";

const refs = {
    form: document.querySelector('.feedback-form'),
    textarea: document.querySelector('.feedback-form textarea'),
    emailField: document.querySelector('.feedback-form input'),
}

document.addEventListener('DOMContentLoaded', onStorageCheck)
refs.form.addEventListener('input', throttle(onFormInput, 500) )
refs.form.addEventListener('submit', onFormSubmit)

function onFormInput(e) {
    let state = {
    email: refs.form['email'].value,
    message: refs.form['message'].value
    }

   localStorage.setItem("feedback-form-state", JSON.stringify(state))
}

function onFormSubmit(e) {
    e.preventDefault()
    let localData = localStorage.getItem("feedback-form-state")
    let localDataParse = JSON.parse(localData)
    console.log(localDataParse)
   
    refs.form.reset()
    localStorage.removeItem("feedback-form-state")
}

function onStorageCheck() {
    let localData = localStorage.getItem("feedback-form-state")
    let localDataParse = JSON.parse(localData)

    if (localDataParse === null) {
        return
    }

    refs.emailField.value = localDataParse.email;
    refs.textarea.value = localDataParse.message;
}

