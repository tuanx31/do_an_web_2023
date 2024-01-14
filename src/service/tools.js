const handleArray = (str) => {
    return str.split("|")
}
const validateInput = (values) => {
    const error = {}
    const email_pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const password_pattenrn = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/; //Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character:
    const phone_pattenrn = /(03|05|07|08|09|01[2|6|8|9])+([0-9]{8})\b/;
    if (values.name === "") {
        error.name = "Họ tên không được để trống"
    } else if (values.name && values.name.length < 10) {
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
        error.password = "Mật khẩu phải lớn hơn 8 ký tự, ít nhất một chữ viết hoa,viết thường, 1 số và 1 ký tự đặc biệt"
    }
    if (values.confirmPassword === "") {
        error.confirmPassword = "Mật khẩu không được để trống"
    } else if (values.confirmPassword !== values.password) {
        error.confirmPassword = "Mật khẩu nhập lại không đúng"
    }
    if (values.phone === "") {
        error.phone = "Số điện thoại không được để trống"
    } else if (!phone_pattenrn.test(values.phone)) {
        error.phone = "Số điện thoại không hợp lệ"
    }
    if (values.address === "") {
        error.address = "Địa chỉ không được để trống"
    } else if (values.address && values.address.length < 10) {
        error.address = "Địa chỉ phải lớn hơn 10 ký tự"
    }
    return error

}


const handleDateTime = (isoDateTime) => {
    // Thời gian trong định dạng ISO

    // Chuyển đổi sang đối tượng Date
    const dateObject = new Date(isoDateTime);

    // Lấy thông tin từ đối tượng Date
    const year = dateObject.getFullYear();
    const month = dateObject.getMonth() + 1; // Tháng bắt đầu từ 0, cần cộng thêm 1
    const day = dateObject.getDate();
    const hours = dateObject.getHours();
    const minutes = dateObject.getMinutes();
    const seconds = dateObject.getSeconds();

    // Định dạng lại thời gian dễ nhìn
    const formattedDateTime = `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;

    return formattedDateTime
}
export {
    handleArray, validateInput, handleDateTime
}
