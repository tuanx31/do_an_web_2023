import actionType from "./actionType";

const addToCart = () => (dispatch) => {
    dispatch({
        type: actionType.ADD_TO_CART,
        data: [{
            id: 1,
            id_category: 0,
            name: "Ốp lưng chống sốc iPhone X",
            price: 350000,
            sale_of: 10,

        },
        {
            id: 2,
            id_category: 3,
            name: "Tai nghe Bluetooth Sony WH-1000XM4",
            price: 2500000,
            sale_of: 30,
        },]
    })
}

export { addToCart } 