const handleArray = (str) => {
    return str.split("|")
}
const validateInput = (values) => {
    const error = {}
    const email_pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const password_pattenrn = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/; // Minimum eight characters, at least one letter and one number:
    const phone_pattenrn = /(03|05|07|08|09|01[2|6|8|9])+([0-9]{8})\b/;
    if (values.name === "") {
        error.name = "Họ tên không được để trống"
    } else if (values.name.length < 10) {
        error.name = "Họ tên phải lớn hơn 10 ký tự"
    }
    if (values.email === "") {
        error.email = "email không được để trống"
    }
    else if (!email_pattern.test(values.email)) {
        error.email = "Email không hợp lệ"
    }
    if (values.password === "") {
        error.password = "Mật khẩu không được để trống"
    } else if (!password_pattenrn.test(values.password)) {
        error.password = "Mật khẩu phải lớn hơn 8 ký tự , ít nhất 1 chữ và 1 số "
    }
    if (values.phone === "") {
        error.phone = "Số điện thoại không được để trống"
    } else if (!phone_pattenrn.test(values.phone)) {
        error.phone = "Số điện thoại không hợp lệ"
    }
    if (values.address === "") {
        error.address = "Địa chỉ không được để trống"
    } else if (values.address.length < 10) {
        error.address = "Địa chỉ phải lớn hơn 10 ký tự"
    }
    return error

}
export {
    handleArray, validateInput
}
