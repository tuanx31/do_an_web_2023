import actionType from "../actions/actionType";

const initState = {
    isAuthenticate: false,
    dataUser: null,
    isAdmin: false,
    token: ""
}

const AccountReducer = (state = initState, action) => {
    switch (action.type) {
        case actionType.LOGIN:
            return {
                isAuthenticate: action.payload.authen,
                dataUser: action.payload.data,
                isAdmin: action.payload.isAdmin,
                token: action.payload.token
            }
        case actionType.LOGOUT:
            return state = initState
        default:
            return state
    }
}
export default AccountReducer