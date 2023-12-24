import { OrderProduct, OrderDetailProduct } from "~/service/users/checkout";
import "./checkout.scss"
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import _ from "lodash";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from 'react-redux'
import * as actions from '~/store/actions';
import { validateInput } from "~/service/tools";
const initialDataCustomer = {
    address: '',
}


const Customerdata = (props) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { isAuthenticate, dataUser } = useSelector(state => state.account)
    const { orderStore, total, note } = props
    const [dataCustomer, setDataCustomer] = useState(initialDataCustomer);
    const [error, setError] = useState({});
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
            address: dataCustomer.address
        }
        setError(validateInput(datavalid))
        if (validateInput(datavalid).address) {
            return
        }
        if (orderStore.length < 1) {
            toast.error("Đơn hàng trống")
            return
        }
        if (!isAuthenticate) {
            toast.error("Đăng nhập để tiếp tục")
            return
        }
        setDataCustomer(initialDataCustomer)
        const res = await OrderProduct(dataOrder, dataUser.email)
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
        navigate(`/thankyou/${res.id}`)

    }

    return (<>
        <p><span>Bạn đã có tài khoản? </span> <Link style={{ cursor: "pointer" }} to={"/login"} className='dangnhap'>Đăng nhập</Link></p>
        <div>
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