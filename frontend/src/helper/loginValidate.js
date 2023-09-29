import toast from "react-hot-toast"

/* *Validate Username */
export async function loginValidate(values) {
    const error = loginVerify({}, values);
     return error;
}

function loginVerify(error = {}, values) {
    const specialCharacter = /[!@#$%^&()\-+={};:'",./?&lt;~]/;

    if(!values.email) {
        error.email = toast.error("Email Required!");
    }
    else if (!values.password) {
        error.password = toast.error("Password Required!");
    }
    else if (values.email.includes(" ")) {
        error.email = toast.error("Invalid Email!");
    }
    else if (values.password.includes(" ")) {
        error.password = toast.error("Password Could Not Contain White-Spaces!");
    }
    else if (values.password.length < 4) {
        error.password = toast.error("Password Have at Least 5 Charachters!");
    }
    else if (!specialCharacter.test(values.password)){
        error.password = toast.error("Password must have at least 1 special character!");
    }
    return error;
}