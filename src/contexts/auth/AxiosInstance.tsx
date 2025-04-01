import axios, { AxiosInstance } from 'axios';
import { UserSession } from './types';
import React from 'react';

const api = process.env.NEXT_PUBLIC_API_URL;

const axiosInstance: AxiosInstance = axios.create({
    baseURL: api,
    headers: {
        'Content-Type': 'application/json',
    },
});

export default axiosInstance;

interface AuthContextType {
    user: UserSession | null;
    setUser: React.Dispatch<React.SetStateAction<UserSession | null>>;
}

export const AuthContexts = React.createContext<AuthContextType | undefined>(
    undefined,
);
