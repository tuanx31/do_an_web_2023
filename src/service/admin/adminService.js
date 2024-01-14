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
const deleteUser = async (email) => {
    try {
        return await axios.delete(`/api/Account/${email}`)
    } catch (error) {
        console.log(error);
    }
}
const getAllUser = async () => {
    try {
        return await axios.get("/api/Account")
    } catch (error) {
        console.log(error)
    }
}
const EditUser = async (id, data) => {
    try {
        return await axios.put(`/api/Account/${id}`,
            data,
            {
                headers: {
                    'accept': '*/*',
                    'Content-Type': 'application/json'
                }
            })
    } catch (error) {
        console.log(error)
    }
}
const getCountProduct = async () => {
    try {
        return await axios.get("/api/Products/getcountProduct")
    } catch (error) {
        console.log(error);
    }
}
const getCountOrder = async () => {
    try {
        return await axios.get("/api/Orders/getCountOrder")
    } catch (error) {
        console.log(error);
    }
}
const getCountUser = async () => {
    try {
        return await axios.get("/api/Account/getCountUser")
    } catch (error) {
        console.log(error);
    }
}

const fetchdataTrademarks = async () => {
    try {
        return await axios.get(`/api/Trademarks`, {
            headers: {
                'accept': 'application/json'
            }
        })
    } catch (error) {
        console.log(error)
    }
}
const fetchAllCategory = async () => {
    try {
        return await axios.get(`/api/Category`, {
            headers: {
                'accept': 'application/json'
            }
        })
    } catch (error) {
        console.log(error)
    }
}

const getUserbyEmail = async (email) => {
    try {
        return await axios.get(`/api/Account/getUser/${email}`, {
            headers: {
                'accept': 'application/json'
            }
        })
    } catch (error) {
        console.log(error)
    }
}
const getRoles = async () => {
    try {
        return await axios.get(`/api/Account/getAllRole`, {
            headers: {
                'accept': 'application/json'
            }
        })
    } catch (error) {
        console.log(error)
    }
}
export {
    fetchAllProduct,
    deleteProduct,
    fetchOrder,
    fetchOrderDetailByIdOrder,
    deleteOrderDetail,
    getAllUser,
    getCountProduct,
    getCountOrder,
    getCountUser,
    fetchdataTrademarks,
    fetchAllCategory,
    getUserbyEmail,
    deleteUser,
    getRoles,
    EditUser
}