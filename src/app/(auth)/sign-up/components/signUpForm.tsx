import Link from 'next/link';
import Button from '@/components/button/Button';
import { GoogleIcon } from '@/components/icons/google';
import Input from '@/components/input/Input';
import Checkbox from '@/components/input/Checkbox';

interface SignUpFormProps {
    firstName: string;
    setFirstName: (value: string) => void;
    lastName: string;
    setLastName: (value: string) => void;
    email: string;
    setEmail: (value: string) => void;
    password: string;
    setPassword: (value: string) => void;
    confirmPassword: string;
    setConfirmPassword: (value: string) => void;
    handleSignUp: (e: React.FormEvent) => void;
    signUpMutation: { isPending: boolean };
}

export const SignUpForm = ({
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
}: SignUpFormProps) => {
    return (
        <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
            <div className="w-full max-w-md">
                <h1 className="text-3xl font-bold text-center mr-2 pt-10">
                    Create new account
                </h1>

                <form onSubmit={handleSignUp} className="mt-6 space-y-4">
                    <div className="flex justify-between">
                        <Input
                            type="text"
                            placeholder="John"
                            value={firstName}
                            label="First Name"
                            onChange={e => setFirstName(e.target.value)}
                        />

                        <p style={{ visibility: 'hidden' }}>..</p>

                        <Input
                            type="text"
                            placeholder="Doe"
                            value={lastName}
                            label="Last Name"
                            onChange={e => setLastName(e.target.value)}
                        />
                    </div>

                    <Input
                        type="text"
                        placeholder="Email"
                        value={email}
                        label="Email"
                        onChange={e => setEmail(e.target.value)}
                    />

                    <Input
                        type="password"
                        placeholder="Password"
                        value={password}
                        label="Password"
                        onChange={e => setPassword(e.target.value)}
                    />

                    <Input
                        type="password"
                        placeholder="Confirm Password"
                        value={confirmPassword}
                        label="Confirm Password"
                        onChange={e => setConfirmPassword(e.target.value)}
                    />

                    <div className="flex items-center gap-2">
                        <span className="text-sm">
                            {`Read our Terms and Conditions before clicking "Sign Up".`}
                        </span>
                    </div>
                    <Button disabled={signUpMutation.isPending} type="submit">
                        {signUpMutation.isPending ? 'Signing Up...' : 'Sign Up'}
                    </Button>
                </form>
                <div className="text-center mt-4 dark:text-gray-300 text-gray-500">
                    OR
                </div>
                <div className="mt-4 space-y-2">
                    <Button
                        className="border-2 border-[#3656B3] hover:border-[#4169E1]"
                        onClick={() => {}}>
                        <div className="flex justify-center">
                            <GoogleIcon />{' '}
                            <span className="ml-2">Sign up with Google</span>
                        </div>
                    </Button>
                </div>
                <p className="text-center mt-4 text-sm dark:text-gray-300 text-gray-600">
                    Already have an account?{' '}
                    <Link
                        href="/sign-in"
                        className="text-blue-500 dark:hover:text-blue-100 hover:text-black">
                        Sign in
                    </Link>
                </p>
            </div>
        </div>
    );
};
