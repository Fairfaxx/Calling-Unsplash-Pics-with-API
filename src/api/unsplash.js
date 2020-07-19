import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID Ox7CxMfOnvTw96IVdSiru5cXa7Evojhdu05IobgK2ko'
    }
});