const validateSignIn = (
    email: string,
    password: string,
    setToastMessage: (message: string) => void,
) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    switch (true) {
        case !email:
            setToastMessage('Email is required');
            return;
        case !emailRegex.test(email):
            setToastMessage('Invalid email address');
            return;
        case !password:
            setToastMessage('Password is required');
            return;
        default:
            return;
    }
};

export default validateSignIn;