import actionType from "../actions/actionType";

const initState = {
    cartStore: []
}

// const cartReducer = (state = initState, action) => {

//     switch (action.type) {
//         case actionType.ADD_TO_CART:
//             return {
//                 ...state,
//                 cartAr: action.payload
//             }
//         // const productInCart = state.cartAr.find(p => p.id === action.payload.id);
//         // if (!productInCart) {
//         //     return { cartAr: [...state.cartAr, action.payload] };
//         // }
//         // else {
//         //     let newCart = state.cartAr;
//         //     const objIndex = newCart.findIndex(obj => obj.id === action.payload.id);
//         //     if (newCart[objIndex].quantity === undefined) {
//         //         newCart[objIndex].quantity = 2;
//         //     } else {
//         //         newCart[objIndex].quantity = newCart[objIndex].quantity + 1;
//         //     }
//         //     return { cartAr: [...newCart] };
//         // }
//         // case actionType.DETELE_FROM_CART:
//         //     let newCart = state.cartAr;
//         //     const objIndex = newCart.findIndex(obj => obj.id === action.payload.id);
//         //     newCart.splice(objIndex, 1);
//         //     return { cartAr: [...newCart] };

//         default:
//             return action.state
//     }
// }

const cartReducer = (state = initState, action) => {
    switch (action.type) {
        case actionType.ADD_TO_CART:
            // console.log(action.payload)
            const productInCart = state.cartStore.find(p => p.id === action.payload.id);
            if (!productInCart) {
                return { cartStore: [...state.cartStore, action.payload] };
            }
            else {
                let newCart = state.cartStore;
                const objIndex = newCart.findIndex(obj => obj.id === action.payload.id);
                if (newCart[objIndex].soluong === undefined) {
                    newCart[objIndex].soluong = 2;
                } else {
                    newCart[objIndex].soluong = newCart[objIndex].soluong + action.payload.soluong;
                }
                return { cartStore: [...newCart] };
            }
        case actionType.DETELE_FROM_CART:
            let newCart = state.cartStore;
            const objIndex = newCart.findIndex(obj => obj.id === action.payload.id);
            newCart.splice(objIndex, 1);
            return { cartStore: [...newCart] };
        case actionType.UPDATE_CART:
            let newCartUpdate = state.cartStore
            const objIndexUpdate = newCartUpdate.findIndex(obj => obj.id === action.payload.id);
            newCartUpdate[objIndexUpdate] = action.payload
            return { cartStore: [...newCartUpdate] }
        default:
            return state
    }
}

export default cartReducer;