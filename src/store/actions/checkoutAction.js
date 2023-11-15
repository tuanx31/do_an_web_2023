import actionType from "./actionType";

const Abate = (data) => {
    return {
        type: actionType.ABATE,
        payload: data
    }
}

export {
    Abate
}