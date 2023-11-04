import axios from "~/setup/axios";


const fetch1Product = async (id) => {
    return await axios.get(`/api/Products/${id}`, {
        headers: {
            'accept': 'application/json'
        }
    });
}

export {
    fetch1Product
}