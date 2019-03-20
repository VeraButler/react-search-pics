import axios from 'axios';
import {auth} from '../config';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: `Client-ID ${auth.unsplashID}`
    }
})