import { useState } from 'react';
import { useSignUp } from '@/services/users/auth';
import validateSignUp from './validator';
import { useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';
import { setEmailForVerification } from '@/store/authSlice';
import { useToast } from '@/components/toast/ToastProvider';

export function useHandleSignUp() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    
    const signUpMutation = useSignUp();
    const router = useRouter();
    const dispatch = useDispatch();
    const { addToast } = useToast();

    const handleSignUp = (e: React.FormEvent) => {
        e.preventDefault();

        validateSignUp(
            firstName,
            lastName,
            email,
            password,
            confirmPassword,
            message => addToast('error', message),
        );

        signUpMutation.mutate(
            {
                first_name: firstName,
                last_name: lastName,
                email,
                password,
            },
            {
                onSuccess: res => {
                    const response = res.data;
                    if (response.message === 'Successfully signed up') {
                        addToast('success', response.message);
                        router.push('/account-verification');
                        dispatch(setEmailForVerification(response.data.user.email));
                    }
                },
                onError: error => {
                    if (error.response?.status === 500) {
                        //@ts-ignore
                        console.log(error.response?.data.error);
                    }
                },
            },
        );
    };

    return {
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
    };
}
