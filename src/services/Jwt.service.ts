import { JwtPayload, jwtDecode } from "jwt-decode";
import { ROLES } from "../constants/Roles";

interface TokenPayload extends JwtPayload {
    "http://schemas.microsoft.com/ws/2008/06/identity/claims/role": Array<keyof typeof ROLES> | keyof typeof ROLES;
    "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier": string;
    "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name": string;
}

const ID_TOKEN_KEY = "proj.token";

const JwtService = {
    getToken() {
        return window.localStorage.getItem(ID_TOKEN_KEY);
    },
    saveToken(token: string) {
        window.localStorage.setItem(ID_TOKEN_KEY, token);
    },
    destroyToken() {
        window.localStorage.removeItem(ID_TOKEN_KEY);
    },
    isAuth() {
        return this.getToken() != null && this.getToken != undefined;
    },
    getUser() {

        if (!this.isAuth())
            return null;

        const { 
            "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name": name,
            "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier": id,
            "http://schemas.microsoft.com/ws/2008/06/identity/claims/role": roles
        } = jwtDecode<TokenPayload>(this.getToken() as string);

        return {
            id,
            name,
            roles
        }
    }
}

export default JwtService;