import CryptoJS from 'crypto-js';

const SECRET_KEY = process.env.NEXT_PUBLIC_ENCRYPTION_KEY || 'my-secret-key'; 

// Encrypt the data before storing into localStorage
export function encryptData(data: string): string {
    return CryptoJS.AES.encrypt(data, SECRET_KEY).toString();
}

// Decrypt the data when it needs to be used
export function decryptData(encryptedData: string): string | null {
    try {
        const bytes = CryptoJS.AES.decrypt(encryptedData, SECRET_KEY);
        return bytes.toString(CryptoJS.enc.Utf8);
    } catch (error) {
        console.error('Failed to decrypt data:', error);
        return null;
    }
}
