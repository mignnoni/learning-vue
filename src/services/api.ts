import axios from "axios";
import { parseCookies } from "nookies";

let cookies = parseCookies();

export const api = axios.create({
    baseURL: 'https://localhost:7090',
    headers: {
        Authorization: `Bearer ${cookies['proj.token']}`
    }
})