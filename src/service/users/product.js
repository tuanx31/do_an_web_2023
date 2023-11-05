import axios from "~/setup/axios";


const fetch1Product = async (id) => {
    return await axios.get(`/api/Products/${id}`, {
        headers: {
            'accept': 'application/json'
        }
    });
}

const fetchCateGorys = async () => {
    return await axios.get(`/api/Category`, {
        headers: {
            'accept': 'application/json'
        }
    });
}

export {
    fetch1Product, fetchCateGorys
}