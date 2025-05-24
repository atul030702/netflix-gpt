
export const checkValidData = (email, password, name, confirmPassword) => {
    let errorMessage = null;

    const isEmailValid = (/^\S+@\S+\.\S+$/).test(email);
    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{8,}$/.test(password);
    const isNameValid = /([a-zA-Z0-9_\s]+)/.test(name);

    if(!isEmailValid) {
        errorMessage = "Please enter a valid Email ID."
    } else if(!isPasswordValid) {
        errorMessage = "Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character (e.g. !@#$%^&*).";
    } else if(name !== null && !isNameValid) {
        errorMessage = "Please enter a valid name."
    } else if(confirmPassword !== null && password !== confirmPassword) {
        errorMessage = "Passwords do not match.";
    }

    return errorMessage;
};