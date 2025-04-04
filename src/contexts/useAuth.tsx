import { decryptData } from '@/utils/crypto';
import { jwtDecode } from 'jwt-decode';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

interface DecodedToken {
    id: string;
    firebase_id: string;
    google_id: string;
    email: string;
    first_name: string;
    last_name: string;
    image: string;
    role_id: number;
    phone_number: number;
    password: number;
    otp_code: string;
    otp_expiration: string;
    is_verified: boolean;
    created_at: string;
    updated_at: string;
}

export const useAuth = ({ redirectTo = '', requireAuth = false } = {}) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState<DecodedToken | null>(null);
    const router = useRouter();

    useEffect(() => {
        const encryptedAccessToken = localStorage.getItem('access_token');
        const token = encryptedAccessToken
            ? decryptData(encryptedAccessToken)
            : null;

        if (token) {
            try {
                const decoded: DecodedToken = jwtDecode(token);
                setIsAuthenticated(true);
                setUser(decoded);
            } catch (err) {
                console.error('Invalid token:', err);
                localStorage.clear();
                setIsAuthenticated(false);
                setUser(null);
                if (requireAuth && redirectTo) router.replace(redirectTo);
            }
        } else {
            setIsAuthenticated(false);
            setUser(null);
            if (requireAuth && redirectTo) router.replace(redirectTo);
        }

        setLoading(false);
    }, [redirectTo, requireAuth]);

    return { isAuthenticated, loading, user };
};
