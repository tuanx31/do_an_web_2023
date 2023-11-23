import axios from "~/setup/axios";

const registerNewUser = async (data) => {
    try {

        return axios.post('api/Account/signUp',
            data, {
            headers: {
                'accept': 'text/plain',
                'Content-Type': 'application/json'
            }
        })
    }
    catch {

    }
}
export { registerNewUser }