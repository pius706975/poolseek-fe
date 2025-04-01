import { UserSession } from './types';

const userManager = {
    set(val: string = '{}'): void {
        localStorage.setItem('SKILLGURU_USER', val);
    },
    get(): UserSession | null {
        try {
            const user = localStorage.getItem('SKILLGURU_USER');
            return user ? JSON.parse(user) : null;
        } catch (error) {
            return null;
        }
    },
    remove(): void {
        localStorage.removeItem('SKILLGURU_USER');
    },
};

export default userManager;
