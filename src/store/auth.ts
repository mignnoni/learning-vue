import { JwtPayload, jwtDecode } from "jwt-decode";
import { api } from "../services/api";
import { LOGIN } from "./actions.type";
import { SET_AUTH } from "./mutations.type";
import { ROLES } from "../constants/Roles";
import JwtService from "../services/Jwt.service";

interface TokenPayload extends JwtPayload {
    "http://schemas.microsoft.com/ws/2008/06/identity/claims/role": Array<keyof typeof ROLES> | keyof typeof ROLES;
    "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier": string;
    "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name": string;
}


const state = {
    user: JwtService.getUser() ?? {
        name: null,
        id: null,
        roles: null
    },
    isAuth: JwtService.isAuth()
}

const getters = {
    user(state: any) {
        return state.user;
    },
    isAuth(state: any) {
        return state.isAuth;
    }
}

const actions = {
    [LOGIN](context: any, credentials: any) {
        return new Promise(resolve => {
            api.post('teamMembers/login', {
                email: credentials.email,
                password: credentials.password
            })
            .then((response) => {
                const { token } = response.data;
                context.commit(SET_AUTH, token);
                resolve(token);
            })
            .catch((error) => {
                console.log(error?.message);
            })
        })
    }
}

const mutations = {
    [SET_AUTH](state: any, payload: any) {

        const { 
            "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name": name,
            "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier": id,
            "http://schemas.microsoft.com/ws/2008/06/identity/claims/role": roles
        } = jwtDecode<TokenPayload>(payload);

        state.user = {
            name,
            id,
            roles
        }

        JwtService.saveToken(payload);
    }
}

export default {
    state,
    actions,
    mutations,
    getters
}