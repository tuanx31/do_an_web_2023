import axios from "~/setup/axios";

const fetchAllProduct = async () => {
    try {

        return await axios.get(`/api/Products`, {
            headers: {
                'accept': 'application/json'
            }
        });
    } catch (error) {
        console.log(error)
    }
}

const deleteProduct = async (id) => {
    try {
        return await axios.delete(`/api/Products/${id}`)
    }
    catch {

    }
}

const fetchOrder = async () => {
    try {
        return await axios.get('/api/Orders')
    } catch (error) {

    }
}
export {
    fetchAllProduct, deleteProduct, fetchOrder
}