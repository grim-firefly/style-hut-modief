import axios from 'axios';
import config from './index';

export default axios.create({
    baseURL: config.baseURL,
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
    },
});
