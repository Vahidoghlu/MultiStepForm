export function isValidPhoneNumber(value) {
    const phoneRegex = /^(?:\+994|0)([1-9][0-9]{8})$/;
    return phoneRegex.test(value);
}