import actionType from "../actions/actionType";

const initState = {
    orderStore: [],
    note: "không có note"
}

const checkoutReducer = (state = initState, action) => {
    switch (action.type) {
        case actionType.ABATE:
            if (Array.isArray(action.payload.cartStore)) {
                return { orderStore: [...action.payload.cartStore], note: action.payload.note }
            } else {
                return { orderStore: [action.payload] }
            }
        default:
            return state
    }
}

export default checkoutReducer