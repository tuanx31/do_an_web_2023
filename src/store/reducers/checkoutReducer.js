import actionType from "../actions/actionType";

const initState = {
    oderStore: []
}

const checkoutReducer = (state = initState, action) => {
    switch (action.type) {
        case actionType.ABATE:
            if (Array.isArray(action.payload)) {
                return { oderStore: [...action.payload] }
            } else {
                return { oderStore: [action.payload] }
            }
        default:
            return state
    }
}

export default checkoutReducer