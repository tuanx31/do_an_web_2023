import actionType from "../actions/actionType";

const initState = {
    hotProduct: []
}

const productReducer = (state = initState, action) => {
    switch (action.type) {

        case actionType.FETCH_HOT_PRODUCT:
            return {
                ...state,
                hotProduct: action.hotProduct
            }
        default:
            return state
    }
}

export default productReducer;