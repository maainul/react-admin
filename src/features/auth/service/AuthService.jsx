import { AxiosInsecure, postDataInsecHeader } from '../../../helpers/Axios'
import { AUTH_API } from '../URLS'


export const RegistrationService = async (values) => {
    return AxiosInsecure.post(`${AUTH_API}/users/reg`, JSON.stringify(values), postDataInsecHeader)
}
