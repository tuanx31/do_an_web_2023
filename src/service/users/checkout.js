import axios from "~/setup/axios";



const OrderProduct = async (data) => {
    try {
        return axios.post('api/Orders',
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

export { OrderProduct, OrderDetailProduct }