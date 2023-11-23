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

const LoginUser = async (data) => {
    try {
        return axios.post("/api/Account/signIn",
            data, {
            headers: {
                'accept': 'text/plain',
                'Content-Type': 'application/json'
            }
        }
        )
    } catch (error) {

    }
}
export { registerNewUser, LoginUser }