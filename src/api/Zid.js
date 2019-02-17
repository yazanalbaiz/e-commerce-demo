import axios from 'axios';

export const port = 8000;

export default axios.create({
    baseURL: `http://localhost:${port}`,
    timeout: 60000,
    headers: { 'Access-Control-Allow-Headers': 'Content-Type' }
});