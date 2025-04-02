import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
    emailForVerification: string | null;
    isOTPVerified: boolean;
}

const initialState: AuthState = {
    emailForVerification:
        typeof window !== 'undefined'
            ? sessionStorage.getItem('emailForVerification')
            : null,

    isOTPVerified:
        typeof window !== 'undefined'
            ? sessionStorage.getItem('isOTPVerified') === 'true'
            : false,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setEmailForVerification: (state, action: PayloadAction<string>) => {
            state.emailForVerification = action.payload;
            sessionStorage.setItem('emailForVerification', action.payload);
        },
        clearEmailForVerification: state => {
            state.emailForVerification = null;
            sessionStorage.removeItem('emailForVerification');
        },
        setOTPVerified: (state, action: PayloadAction<boolean>) => {
            state.isOTPVerified = action.payload;
            sessionStorage.setItem('isOTPVerified', String(action.payload));
        },
        clearOTPVerified: state => {
            state.isOTPVerified = false;
            sessionStorage.removeItem('isOTPVerified');
        },
    },
});

export const {
    setEmailForVerification,
    clearEmailForVerification,
    setOTPVerified,
    clearOTPVerified,
} = authSlice.actions;
export default authSlice.reducer;
