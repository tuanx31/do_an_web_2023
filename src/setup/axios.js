import axios from "axios";

const fulldata = localStorage.getItem("persist:accountStore");
let tokens;
fulldata ? tokens = JSON.parse(fulldata).token.replace(/\"/g, '') : tokens = "";
const s = `bearer ${tokens}`

const instance = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL
});
instance.defaults.headers.common['Authorization'] = s;

instance.interceptors.response.use(function (response) {
    return response.data
},
    function (error) {
        return Promise.reject(error)
    })

export default instance;