import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
    emailForVerification: string | null;
}

const initialState: AuthState = {
    emailForVerification:
        typeof window !== 'undefined'
            ? sessionStorage.getItem('emailForVerification')
            : null,
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
    },
});

export const { setEmailForVerification, clearEmailForVerification } =
    authSlice.actions;
export default authSlice.reducer;
