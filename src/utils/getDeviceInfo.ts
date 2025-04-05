import { UAParser } from 'ua-parser-js';
import { v4 as uuidv4 } from 'uuid';
import { decryptData, encryptData } from './crypto';

export const getDeviceInfo = () => {
    let deviceId = decryptData(localStorage.getItem('device_id')!);

    if (!deviceId) {
        deviceId = uuidv4();
        localStorage.setItem('device_id', encryptData(deviceId));
    }

    const parser = new UAParser();
    const result = parser.getResult();

    return {
        device_id: deviceId,
        device_name: result.browser.name || 'Unknown Browser',
        device_model: result.os.name || 'Unknown OS',
    };
};
