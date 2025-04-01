const validatePassword = (
    password: string,
    setToastMessage: (message: string) => void,
) => {
    const length = 8;
    const uppercase = /[A-Z]/;
    const lowercase = /[a-z]/;
    const number = /[0-9]/;
    const special = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/;

    switch (true) {
        case !password:
            setToastMessage('Password is required');
            return;
        case password.length < length:
            setToastMessage('Password must be at least 8 characters');
            return;
        case !uppercase.test(password):
            setToastMessage(
                'Password must contain at least one uppercase letter',
            );
            return;
        case !lowercase.test(password):
            setToastMessage(
                'Password must contain at least one lowercase letter',
            );
            return;
        case !number.test(password):
            setToastMessage('Password must contain at least one number');
            return;
        case !special.test(password):
            setToastMessage(
                'Password must contain at least one special character',
            );
            return;
        default:
            return;
    }
};

export default validatePassword;