import axios from "~/setup/axios";

const fetchAllProduct = async () => {
    return await axios.get(`/api/Products`, {
        headers: {
            'accept': 'application/json'
        }
    });
}

const deleteProduct = async (id) => {
    return await axios.delete(`/api/Products/${id}`);
}

export {
    fetchAllProduct, deleteProduct
}