'use client';
import { useHandleSignUp } from './hooks';
import { SignUpForm } from './components/signUpForm';
import SignUpBg from './components/bg';

export default function SignUpPage() {
    const {
        firstName,
        setFirstName,
        lastName,
        setLastName,
        email,
        setEmail,
        password,
        setPassword,
        confirmPassword,
        setConfirmPassword,
        handleSignUp,
        signUpMutation,
    } = useHandleSignUp();

    return (
        <div className="flex min-h-screen">
            <SignUpForm
                firstName={firstName}
                setFirstName={setFirstName}
                lastName={lastName}
                setLastName={setLastName}
                email={email}
                setEmail={setEmail}
                password={password}
                setPassword={setPassword}
                confirmPassword={confirmPassword}
                setConfirmPassword={setConfirmPassword}
                handleSignUp={handleSignUp}
                signUpMutation={signUpMutation}
            />

            <div className="w-1/2 hidden lg:block relative">
                <SignUpBg />
            </div>
        </div>
    );
}
