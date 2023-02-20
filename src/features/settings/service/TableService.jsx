import { AxiosInsecure, postDataInsecHeader } from '../../../helpers/Axios'
import { AUTH_API } from '../URLS'


export const TableService = async (values) => {
    return AxiosInsecure.post(`${AUTH_API}/settings/table/create`, JSON.stringify(values), postDataInsecHeader)
}
