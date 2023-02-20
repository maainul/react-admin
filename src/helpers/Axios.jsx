import axios from 'axios'

// Post Data Without BEARER TOKEN
// FOR Insecure URL ONLY
export const postDataInsecHeader = {
    method: "POST",
    headers: {
        Accept: 'application/json',
        "Content-Type": "application/json",
    }
}

// Post Data With BEARER TOKEN
// FOR Secure URL ONLY
export function postDataSecHeader(token) {
    return {
        method: "POST",
        headers: {
            Accept: 'application/json',
            "Content-Type": "application/json",
            Authorization: `Bearer ` + token
        }
    }
}


export const AxiosSecure = axios.create();
export const AxiosInsecure = axios.create();
export const AxiosRefTkn = axios.create();