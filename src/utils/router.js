export const ROUTERS = {
    ADMIN: {
        HOME: "admin",
        PRODUCT: "admin/product/:page",
        ORDER: 'admin/order',
        USER: 'admin/user',
        CATEGORY: 'admin/category',
        TRADEMARK: 'admin/trademark'
    },
    USER: {
        HOME: "",
        INTRODUCE: "introduce",
        CONTACT: "contact",
        ACCOUNT: "account",
        PRODUCT: "products/:idCategory/:page",
        DETAILPRODUCT: "products/:idCategory/detail/:idProduct",
        SEARCH: "search",
        CART: "cart",
        CHECKOUT: "checkout",
        CSBM: "chinh-sach-bao-mat",
        CSBH: "chinh-sach-bao-hanh",
        DKDV: "dieu-khoan-dich-vu",
        LOGIN: 'login',
        REGISTER: 'register',
        THANKYOU: 'thankyou/:idOrder'
    }
}