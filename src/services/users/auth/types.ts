export type TSignUp = {
    first_name: string;
    last_name: string;
    email: string;
    password: string;
};

export type SignInResponse = {
    message: string;
    data: {
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
    access_token: string;
    refresh_token: string;
};
