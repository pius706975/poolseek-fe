import { AxiosResponse } from 'axios';
import axiosInstance from './AxiosInstance';

const logoutApi = (refreshToken: string, accessToken: any): Promise<any> => {
    return axiosInstance({
        method: 'POST',
        url: '/auth/signout',
        headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + accessToken,
        },
        data: { refreshToken },
    })
        .then((res: AxiosResponse) => res.data)
        .catch((error: Error) => {
            console.log(error);
            return true;
        });
};

export default logoutApi;
