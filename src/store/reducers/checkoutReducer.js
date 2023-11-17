import actionType from "../actions/actionType";

const initState = {
    oderStore: [],
    note: "không có note"
}

const checkoutReducer = (state = initState, action) => {
    switch (action.type) {
        case actionType.ABATE:
            if (Array.isArray(action.payload.cartStore)) {
                return { oderStore: [...action.payload.cartStore], note: action.payload.note }
            } else {
                return { oderStore: [action.payload] }
            }
        default:
            return state
    }
}

export default checkoutReducer