// import Form from "./Form";

const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
const regexPassword = /^(?=.*?[a-z])(?=.*?[0-9]).{6,10}$/;

export function validation(userData) {
    let errors = {};

    if (!regexEmail.test(userData.username))
        errors.username = "The username must be an email";
    else if (!userData.username)
        errors.username = "Please fill in this field";
    else if (userData.username.length > 35)
        errors.username = "Username should be less than 35 characters";

    if(!regexPassword.test(userData.password))
        errors.password = "Please enter a valid password";
    else if (userData.password.length < 6 || userData.password.length > 10)
        errors.password = "Password should be between 6-10 characters";
    return errors;
}