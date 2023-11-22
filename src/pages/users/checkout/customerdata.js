import { OrderProduct, OrderDetailProduct } from "~/service/users/checkout";
import "./checkout.scss"
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import _ from "lodash";
import { toast } from "react-toastify";
import { useDispatch } from 'react-redux'
import * as actions from '~/store/actions';
import { validateInput } from "~/service/tools";
const initialDataCustomer = {
    nameCustomer: '',
    emailCustomer: '',
    phoneCustomer: '',
    address: '',
}


const Customerdata = (props) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { orderStore, total, note } = props
    const [dataCustomer, setDataCustomer] = useState(initialDataCustomer);
    const [error, setError] = useState({});
    const handleChangeName = (data) => {
        let NewData = _.cloneDeep(dataCustomer)
        NewData.nameCustomer = data
        setDataCustomer(NewData)
    }
    const handleChangeEmail = (data) => {
        let NewData = _.cloneDeep(dataCustomer)
        NewData.emailCustomer = data
        setDataCustomer(NewData)
    }
    const handleChangePhone = (data) => {
        let NewData = _.cloneDeep(dataCustomer)
        NewData.phoneCustomer = data
        setDataCustomer(NewData)
    }
    const handleChangeAdress = (data) => {
        let NewData = _.cloneDeep(dataCustomer)
        NewData.address = data
        setDataCustomer(NewData)
    }
    const dataOrder = {
        note: note || 'note',
        total: total,
        ...dataCustomer
    }

    const hanleclickOrder = async () => {
        const datavalid = {
            name: dataCustomer.nameCustomer,
            email: dataCustomer.emailCustomer,
            phone: dataCustomer.phoneCustomer,
            address: dataCustomer.address
        }
        setError(validateInput(datavalid))
        if (validateInput(datavalid).name || validateInput(datavalid).email || validateInput(datavalid).phone || validateInput(datavalid).address) {
            return
        }
        // if (!dataCustomer.address || !dataCustomer.emailCustomer || !dataCustomer.nameCustomer || !dataCustomer.phoneCustomer) {
        //     toast.error("Vui lòng nhập đầy đủ thông tin")
        //     return
        // }
        if (orderStore.length < 1) {
            toast.error("Đơn hàng trống")
            return
        }
        console.log("step 2")
        setDataCustomer(initialDataCustomer)
        const res = await OrderProduct(dataOrder)
        orderStore && orderStore.map(async (item) => {
            const dataOrderDetail = {
                'amount': item.soluong,
                'price': item.price - (item.price * item.sale_of / 100),
                'color': item.colorCart,
                'size': item.sizeCart,
                'id_product': item.id,
                'id_order': res.id
            }
            await OrderDetailProduct(dataOrderDetail)
        })
        dispatch(actions.Abate({ cartStore: [], note: '' }))
        dispatch(actions.deleteAllCart())
        navigate("/thankyou")

    }

    return (<>
        <p><span>Bạn đã có tài khoản? </span> <Link style={{ cursor: "pointer" }} to={"/login"} className='dangnhap'>Đăng nhập</Link></p>
        <div>
            <div className='form-floating my-3 ' >
                <input type='text' className={error.name ? 'form-control is-invalid' : 'form-control'} placeholder='Họ và tên' value={dataCustomer.nameCustomer} onChange={e => handleChangeName(e.target.value)} />
                <label htmlFor="floatingInput">Họ và tên</label>
                {error.name && <p className="text-danger">{error.name}</p>}
            </div>

            <div className="d-flex flex-row bd-highlight gap-2" >
                <div className='form-floating my-2 w-75 bd-highlight '>
                    <input type='email' className={error.email ? 'form-control is-invalid' : 'form-control'} id='floatingInput' value={dataCustomer.emailCustomer} placeholder='name@example.com' onChange={e => handleChangeEmail(e.target.value)} />
                    <label htmlFor="floatingInput">Email</label>
                    {error.email && <p className="text-danger">{error.email}</p>}

                </div>
                <div className='form-floating my-2  flex-shrink-2 bd-highlight'>
                    <input type='text' className={error.phone ? 'form-control is-invalid' : 'form-control'} id='floatingInput' value={dataCustomer.phoneCustomer} placeholder='Nhap so dien thoai cua ban' onChange={e => handleChangePhone(e.target.value)} />
                    <label htmlFor="floatingInput">Điện thoại</label>
                    {error.phone && <p className="text-danger">{error.phone}</p>}

                </div>
            </div>
            <div className='form-floating my-3 ' >
                <input type='name' className={error.address ? 'form-control is-invalid' : 'form-control'} id='floatingInput' placeholder='Ho Va Ten' value={dataCustomer.address} onChange={e => handleChangeAdress(e.target.value)} />
                <label htmlFor="floatingInput">Địa chỉ</label>
                {error.address && <p className="text-danger">{error.address}</p>}

            </div>
            <div className='my-4'>
                <Link to={"/cart"}>Giỏ hàng</Link>
                <button className='btn btn-primary float-end' onClick={hanleclickOrder}>Đặt hàng</button>
            </div>
        </div>

    </>);
}

export default Customerdata;