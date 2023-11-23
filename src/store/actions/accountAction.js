import actionType from "./actionType";

const SaveLogin = (data) => {
    return {
        type: actionType.LOGIN,
        payload: data
    }
}
const LogOut = () => {
    return {
        type: actionType.LOGOUT,
        payload: null
    }
}
export {
    SaveLogin, LogOut
}
