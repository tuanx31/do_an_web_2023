import * as actions from '~/store/actions';
import "./CartItemProduct.scss"
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom';
import { GoTrash } from "react-icons/go"
import _ from 'lodash';


const CartItemProduct = (props) => {
    const dispatch = useDispatch()
    const { item } = props
    const handleDeleteProduct = (item) => {
        dispatch(actions.deleteFromCart(item))
    }
    const updateCart = (value) => {
        let product = _.cloneDeep(item);
        product.soluong += Number(value);
        dispatch(actions.updateCart(product))
        if (product.soluong <= 0) {
            dispatch(actions.deleteFromCart(product))
        }
    }
    return (
        <>
            <tr className="text-center desktopItemCart" style={{ verticalAlign: "middle" }}>
                <th scope="row"><Link to={`/products/${item.id_category}/detail/${item.id}`}><img src={"https://localhost:7139/resources/" + item.img} alt="hinh anh" style={{ width: "120px", height: "120px" }} /></Link></th>
                <td className="text-muted fw-normal" ><Link to={`/products/${item.id_category}/detail/${item.id}`} className='text-black'>{item?.name}</Link><p className='mt-1'>{item?.colorCart} {item?.sizeCart}</p></td>
                <td className="fw-bold dongia">{item.price && (item.price - item.price * item.sale_of / 100).toLocaleString()}</td>
                <td > <button className='btn fw-bold fs-5 btn-light' onClick={() => updateCart(-1)}>-</button><input className='text-center border-0 bg-light' type="text" readOnly={true} min="0" style={{ width: "40px", height: "30px" }} value={item.soluong} /><button className='btn fw-bold fs-5 btn-light' onClick={() => updateCart(1)}>+</button></td>
                <th>{item.price && ((item.price - item.price * item.sale_of / 100) * item.soluong).toLocaleString()}</th>
                <td><GoTrash onClick={() => handleDeleteProduct(item)} style={{ cursor: "pointer" }} color="red" /></td>
            </tr>

            <div className='d-none mobileItemCart' >
                <Link to={`/products/${item.id_category}/detail/${item.id}`}><img src={"https://localhost:7139/resources/" + item.img} alt="hinh anh" style={{ width: "120px", height: "120px" }} /></Link>
                <div className='d-flex flex-column'>
                    <Link to={`/products/${item.id_category}/detail/${item.id}`} className='text-black'>{item?.name}</Link><br />
                    {(item?.colorCart || item?.sizeCart) && <p>{item?.colorCart} {item?.sizeCart}</p>}
                    <div><button className='btn fw-bold fs-5 btn-light' onClick={() => updateCart(-1)}>-</button><input className='text-center border-0 bg-light' type="text" readOnly={true} min="0" style={{ width: "40px", height: "30px" }} value={item.soluong} /><button className='btn fw-bold fs-5 btn-light' onClick={() => updateCart(1)}>+</button></div>
                    <span>{item.price && (item.price - item.price * item.sale_of / 100).toLocaleString()} <GoTrash className='ms-3' onClick={() => handleDeleteProduct(item)} style={{ cursor: "pointer" }} color="red" /></span>
                </div>
            </div>
        </>
    );
}

export default CartItemProduct;