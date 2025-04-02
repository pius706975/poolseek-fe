export type TSignUp = {
    first_name: string;
    last_name: string;
    email: string;
    password: string;
};

export type TSignIn = {
    email: string;
    password: string;
    device_id: string;
    device_name: string;
    device_model: string;
};

export type SignInResponse = {
    message: string;
    data: {
        access_token: string;
        refresh_token: string;
        user: {
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
        };
    };
};

export type TResetPassword = {
    email: string | null;
    password: string;
};

export type ResetPasswordResponse = {
    message: string;
};

export type TRefreshToken = {
    user_id: string;
    device_id: string;
    refresh_token: string;
};

export type RefreshTokenResponse = {
    message: string;
    data: {
        access_token: string;
    };
};

export type TSignOut = {
    device_id: string
}

export type SignOutResponse = {
    message: string
}