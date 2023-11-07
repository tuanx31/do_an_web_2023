import actionType from "../actions/actionType";

const initState = {
    data: []
}

const cartReducer = (state = initState, action) => {
    switch (action.type) {
        case actionType.ADD_TO_CART:
            return {
                ...state,
                data: action.data
            }

        default:
            return state
    }
}

export default cartReducer;