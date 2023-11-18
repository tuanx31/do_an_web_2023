import { SearchProduct } from "~/service/users/product";
import actionType from "./actionType";

const SearchProducts = (keyword) => async (dispatch) => {
    try {
        const response = await SearchProduct(keyword)
        dispatch({
            type: actionType.SEARCH,
            payload: response,
            keyword: keyword
        })
    } catch (error) {
        dispatch({
            type: actionType.SEARCH,
            payload: []
        }
        )
    }
}

export {
    SearchProducts
}