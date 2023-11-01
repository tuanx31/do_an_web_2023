export const ROUTERS = {
    ADMIN: {
        HOME: "admin",
        PRODUCT: "admin/product"

    },
    USER: {
        HOME: "",
        INTRODUCE: "introduce",
        CONTACT: "contact",
        ACCOUNT: "account",
        PRODUCT: "products/:idCategory",
        DETAILPRODUCT: "products/:idCategory/detail/:idProduct",
        SEARCH: "search",
        CART: "cart",
    }
}