const emailRegex = /./;

export const validateEmail = (email) => {
    return emailRegex.test(email);
}