export const ROUTERS = {
    ADMIN: {
        HOME: "admin",
        PRODUCT: "admin/product",
        ORDER: 'admin/order'
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
        CHECKOUT: "checkout",
        CSBM: "chinh-sach-bao-mat",
        CSBH: "chinh-sach-bao-hanh",
        DKDV: "dieu-khoan-dich-vu",
        LOGIN: 'login',
        REGISTER: 'register',
        THANKYOU: 'thankyou'
    }
}