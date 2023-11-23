
import { fetchHotProduct } from "~/service/users/product";
import actionType from "./actionType";



const fetchHotProducts = () => async (dispatch) => {
    try {
        const response = await fetchHotProduct();
        if (response) {
            dispatch({
                type: actionType.FETCH_HOT_PRODUCT,
                newProduct: response
            })
        } else {
            dispatch({
                type: actionType.FETCH_HOT_PRODUCT,
                newProduct: []
            })
        }
    } catch (error) {
        console.log(error)
    }

}

export {
    fetchHotProducts
}