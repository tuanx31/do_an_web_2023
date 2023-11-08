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

const fetchProductByCategory = async (id) => {
    return await axios.get(`/api/Products/productbycategory/${id}`, {
        headers: {
            'accept': 'application/json'
        }
    });
}

const fetchHotProduct = async () => {
    return await axios.get(`/api/Products/hotproduct`, {
        headers: {
            'accept': 'application/json'
        }
    });
}
const fetchNewProduct = async () => {
    return await axios.get(`/api/Products/newproduct`, {
        headers: {
            'accept': 'application/json'
        }
    });
}
export {
    fetch1Product, fetchCateGorys, fetchProductByCategory, fetchHotProduct, fetchNewProduct
}