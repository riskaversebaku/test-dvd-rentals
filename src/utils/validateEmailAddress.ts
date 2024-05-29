export function validateEmailAddress(emailAddress?: string) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailAddress && emailRegex.test(emailAddress);
}