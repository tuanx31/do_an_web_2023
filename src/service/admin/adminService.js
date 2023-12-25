import axios from "~/setup/axios";

const fetchAllProduct = async (page) => {
    try {

        return await axios.get(`/api/Products`, {
            params: {
                'page': page
            },
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

const fetchOrderDetailByIdOrder = async (id_order) => {
    try {
        return await axios.get(`/api/OrderDetails/SearchByIdOrder/${id_order}`)
    } catch (error) {

    }
}

const deleteOrderDetail = async (id_order) => {
    try {
        return await axios.delete(`/api/Orders/${id_order}`)
    } catch (error) {

    }
}

const getAllUser = async () => {
    try {
        return await axios.get("/api/Account")
    } catch (error) {
        console.log(error)
    }
}
export {
    fetchAllProduct, deleteProduct, fetchOrder, fetchOrderDetailByIdOrder, deleteOrderDetail, getAllUser
}