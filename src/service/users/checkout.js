import axios from "~/setup/axios";



const OrderProduct = async (data, email) => {
    console.log(data, email)
    try {
        return axios.post('api/Orders',
            data,
            {
                params: {
                    'email': email
                },
                headers: {
                    'accept': 'text/plain',
                    'Content-Type': 'application/json'
                }
            })
    } catch (error) {
        return (error)
    }
}
const OrderDetailProduct = async (data) => {
    try {
        return axios.post('/api/OrderDetails',
            data, {
            headers: {
                'accept': 'text/plain',
                'Content-Type': 'application/json'
            }
        })
    } catch (error) {
        return (error)
    }
}

const getOrderProductbyId = async (idOrder) => {
    try {
        return axios.get(`/api/Orders/${idOrder}`, {
            headers: {
                'accept': 'text/plain'
            }
        })
    } catch (error) {
        return error
    }
}
const getOrderProductbyEmail = async (email) => {
    try {
        return axios.get(`/api/Orders/emailUser/${email}`, {
            headers: {
                'accept': 'text/plain'
            }
        })
    } catch (error) {
        return error
    }
}

export { OrderProduct, OrderDetailProduct, getOrderProductbyId, getOrderProductbyEmail }