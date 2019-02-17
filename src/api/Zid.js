import axios from 'axios';

export const port = 3001;

export default axios.create({
    baseURL: `http://localhost:${port}`,
    timeout: 60000,
    headers: { 'Access-Control-Allow-Headers': 'Content-Type' }
});