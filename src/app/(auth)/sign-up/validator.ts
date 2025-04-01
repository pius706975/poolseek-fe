import validatePassword from '@/utils/validatePassword';

const validateSignUp = (
    fisrtName: string,
    lastName: string,
    email: string,
    password: string,
    confirmPassword: string,
    setToastMessage: (message: string) => void,
) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    switch (true) {
        case !fisrtName:
            setToastMessage('First name is required');
            return;
        case !lastName:
            setToastMessage('Last name is required');
            return;
        case !email:
            setToastMessage('Email is required');
            return;
        case !emailRegex.test(email):
            setToastMessage('Invalid email address');
            return;
        case !password:
            setToastMessage('Password is required');
            return;
        case !confirmPassword:
            setToastMessage('Confirm your password ');
            return;
        case password !== confirmPassword:
            setToastMessage('Passwords do not match');
            return;
        default:
            validatePassword(password, setToastMessage);
            return;
    }
};

export default validateSignUp;
