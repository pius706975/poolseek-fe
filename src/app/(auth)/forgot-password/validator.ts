import validatePassword from '@/utils/validatePassword';

const validateForgotPassword = (
    password: string,
    confirmPassword: string,
    setToastMessage: (message: string) => void,
) => {
    switch (true) {
        case !password:
            setToastMessage('Password is required');
            return;
        case !confirmPassword:
            setToastMessage('Confirm your password ');
            return;
        case password !== confirmPassword:
            setToastMessage(`Password and confirm password don't match`);
            return;
        default:
            validatePassword(password, setToastMessage);
            return;
    }
};

export default validateForgotPassword;
