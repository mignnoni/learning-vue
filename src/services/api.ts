import axios from "axios";
import JwtService from "./Jwt.service";

export const api = axios.create({
    baseURL: 'https://localhost:7090',
    headers: {
        Authorization: `Bearer ${JwtService.getToken()}`
    }
})