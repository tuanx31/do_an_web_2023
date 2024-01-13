import axios from '~/setup/axios';
import FormData from 'form-data';

import { useEffect, useState } from "react";
import { Button, Container, Modal, Pagination } from "react-bootstrap";
import { fetchAllProduct, deleteProduct } from '~/service/admin/adminService';

import { toast } from 'react-toastify';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { fetch1Product } from '~/service/users/product';

const MydModalWithGrid = (props) => {
    const [name, setname] = useState()
    const [price, setprice] = useState()
    const [quantity, setquantity] = useState()
    const [desc, setdesc] = useState()
    const [sale_of, setsale_of] = useState()
    const [material, setmaterial] = useState()
    const [color, setcolor] = useState()
    const [consident, setconsident] = useState()
    const [design, setdesign] = useState()
    const [size, setsize] = useState()
    const [id_category, setid_category] = useState(4)
    const [id_tradeMark, setid_tradeMark] = useState(1)
    const [images, setimages] = useState()
    const [listImage, setlistImage] = useState([])
    const [hot, sethot] = useState(false)

    const [listIdcategory, setlistIdcategory] = useState([])
    const [listIdTrademark, setlistIdTrademark] = useState([])

    // const [issucess,setIssucess] = useState(false)

    const addNewProduct = async () => {
        try {
            const form = new FormData();
            size && form.append('size', size);
            id_category && form.append('id_category', id_category);
            color && form.append('color', color);
            material && form.append('Material', material);
            price && form.append('price', price);
            quantity && form.append('quantity', quantity);
            form.append('name', name);
            id_tradeMark && form.append('id_trademark', id_tradeMark);
            sale_of && form.append('sale_of', sale_of);
            consident && form.append('consistent', consident);
            images && form.append('ImageFile', images);
            hot && form.append('hot', hot);
            for (let index = 0; index < listImage.length; index++) {
                const element = listImage[index];
                listImage && form.append('listImageFile', element);
            }
            desc && form.append('description', desc);
            design && form.append('design', design);
            await axios.post(
                '/api/Products',
                form,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                }
            );
            toast.success("Thêm sản phẩm thành công")
            setname("");
            setprice("");
            setquantity("");
            setdesc("");
            setsale_of("");
            setmaterial("");
            setcolor("");
            setconsident("");
            setdesign("");
            setsize("");
            setid_category(4);
            setid_tradeMark(1);
            setimages(null);
            setlistImage([]);
            sethot(false);
            fetchAllProduct("");
        } catch (error) {
            console.log(error)
            toast.error("thất bại")
        }

    }


    const fetchdata = async () => {
        try {
            const response = await axios.get(`/api/Category`, {
                headers: {
                    'accept': 'application/json'
                }
            });
            if (response) {
                setlistIdcategory(response)
            }
        } catch (error) {
            console.log(error)
        }

    }
    const fetchdataTrademark = async () => {
        try {
            const response = await axios.get(`/api/Trademarks`, {
                headers: {
                    'accept': 'application/json'
                }
            });
            if (response) {
                setlistIdTrademark(response)
            }
        } catch (error) {
            console.log(error)
        }

    }
    useEffect(() => { fetchdata(); fetchdataTrademark(); }
        , [])



    const handleChangeCategory = (e) => {
        setid_category(e.target.value);
    };
    const handleChangeTrademark = (e) => {
        setid_tradeMark(e.target.value);
    };

    const handleImg = (e) => {
        if (e.target.files && e.target.files[0]) {
            setimages(e.target.files[0])
        }
    }

    const handlelistImg = (e) => {
        if (e.target.files) {
            setlistImage(e.target.files)
        }
    }
    return (
        <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Thêm sản phẩm
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className="grid-example">
                <Container>
                    <div className="row themsp">
                        <form>
                            <div className="mb-3 form-floating">
                                <input type="text" className="form-control rounded-0" id="floatingInput" value={name} onChange={e => setname(e.target.value)} placeholder="Tên sản phẩm" />
                                <label htmlFor="floatingInput">Tên sản phẩm</label>
                            </div>
                            <div className="mb-3 form-floating">
                                <input type="text" className="form-control rounded-0" id="floatingInput" value={price} onChange={e => setprice(e.target.value)} placeholder="Giá sản phẩm" />
                                <label htmlFor="floatingInput">Giá sản phẩm</label>
                            </div>
                            <div className="mb-3 form-floating">
                                <input type="text" className="form-control rounded-0" id="floatingInput" value={quantity} onChange={e => setquantity(e.target.value)} placeholder=" Số lượng trong kho" />
                                <label htmlFor="floatingInput">Số lượng trong kho</label>
                            </div>
                            <div className="mb-3 form-floating">
                                <input type="text" className="form-control rounded-0" id="floatingInput" value={desc} onChange={e => setdesc(e.target.value)} placeholder="Thông tin sản phẩm" />
                                <label htmlFor="floatingInput">Thông tin sản phẩm</label>
                            </div>
                            <div className="mb-3 form-floating">
                                <input type="text" className="form-control rounded-0" id="floatingInput" value={sale_of} onChange={e => setsale_of(e.target.value)} placeholder="Giảm giá" />
                                <label htmlFor="floatingInput">Giảm giá</label>
                            </div>
                            <div className="mb-3 form-floating">
                                <input type="text" className="form-control rounded-0" id="floatingInput" value={material} onChange={e => setmaterial(e.target.value)} placeholder="Chất liệu sp" />
                                <label htmlFor="floatingInput">Chất liệu</label>
                            </div>
                            <div className="mb-3 form-floating">
                                <input type="text" className="form-control rounded-0" id="floatingInput" value={color} onChange={e => setcolor(e.target.value)} placeholder="Màu sp" />
                                <label htmlFor="floatingInput">Màu sp</label>
                            </div>
                            <div className="mb-3 form-floating">
                                <input type="text" className="form-control rounded-0" id="floatingInput" value={consident} onChange={e => setconsident(e.target.value)} placeholder="Tương thích" />
                                <label htmlFor="floatingInput">Tương thích</label>
                            </div>
                            <div className="mb-3 form-floating">
                                <input type="text" className="form-control rounded-0" id="floatingInput" value={design} onChange={e => setdesign(e.target.value)} placeholder="Kiểu thiết kế" />
                                <label htmlFor="floatingInput">Kiểu thiết kế</label>
                            </div>
                            <div className="mb-3 form-floating">
                                <input type="text" className="form-control rounded-0" id="floatingInput" value={size} onChange={e => setsize(e.target.value)} placeholder="Size" />
                                <label htmlFor="floatingInput">size</label>
                            </div>
                            <div className="d-flex gap-5 ">
                                <div className="form-floating">
                                    <select className="form-select mb-3" id="floatingSelect" value={id_category} onChange={handleChangeCategory}>
                                        {listIdcategory && listIdcategory.length > 0 ?
                                            <>{listIdcategory?.map((item, index) => (
                                                <option value={item.categoryId} key={item.categoryId}>{item.name}</option>
                                            ))}
                                            </>
                                            :
                                            <>
                                                <option>error fetch data</option>
                                            </>
                                        }
                                    </select>
                                    <label htmlFor="floatingSelect">Loại sản phẩm</label>
                                </div>
                                <div className="form-floating">
                                    <select className="form-select form-select-lg mb-3" id="floatingSelect" value={id_tradeMark} onChange={handleChangeTrademark}>

                                        {listIdTrademark && listIdTrademark.length > 0 ?
                                            <>{listIdTrademark?.map((item, index) => (
                                                <option value={item.id} key={item.id}>{item.name}</option>
                                            ))}
                                            </>
                                            :
                                            <>
                                                <option>error fetch data</option>
                                            </>
                                        }
                                    </select>
                                    <label htmlFor="floatingSelect">Thương hiệu</label>
                                </div>
                                <div className="form-floating">
                                    <select className="form-select form-select-lg mb-3" id="floatingSelect" value={hot} onChange={(e) => sethot(e.target.value)}>
                                        <option value={true}>True</option>
                                        <option value={false}>False</option>
                                    </select>
                                    <label htmlFor="floatingSelect">Hot</label>
                                </div>
                            </div>
                            <div>
                                <div className="input-group mb-3 rounded-0">
                                    <label className="input-group-text rounded-0" htmlFor="inputGroupFile01">Upload Big Img</label>
                                    <input type="file" className="form-control rounded-0" id="inputGroupFile01" onChange={handleImg} />
                                </div>
                                <div className="input-group rounded-0">
                                    <label className="input-group-text rounded-0" htmlFor="inputGroupFile01">Upload small Img</label>
                                    <input type="file" className="form-control rounded-0" id="inputGroupFile01" multiple="multiple" onChange={handlelistImg} />
                                </div>
                            </div>

                        </form>
                    </div>
                </Container>
            </Modal.Body>
            <Modal.Footer>

                <Button className='btn-danger' onClick={props.onHide}>Close</Button>
                <button className='btn btn-primary' onClick={() => {
                    addNewProduct();
                }}>Thêm sản phẩm</button>
            </Modal.Footer>
        </Modal>
    );
}

const ModalEditProduct = (props) => {
    const { data } = props;
    const [name, setname] = useState(data.name)
    const [price, setprice] = useState(data.price)
    const [quantity, setquantity] = useState(data.quantity)
    const [desc, setdesc] = useState(data.description)
    const [sale_of, setsale_of] = useState(data.sale_of)
    const [material, setmaterial] = useState(data.material)
    const [color, setcolor] = useState(data.color)
    const [consident, setconsident] = useState(data.consistent)
    const [design, setdesign] = useState(data.design)
    const [size, setsize] = useState(data.size)
    const [id_category, setid_category] = useState(data.id_category)
    const [id_tradeMark, setid_tradeMark] = useState(data.id_tradeMark)
    const [images, setimages] = useState()
    const [listImage, setlistImage] = useState([])
    const [hot, sethot] = useState(data.hot)

    const [listIdcategory, setlistIdcategory] = useState([])
    const [listIdTrademark, setlistIdTrademark] = useState([])
    // const [issucess,setIssucess] = useState(false)

    const addNewProduct = async () => {
        try {
            const form = new FormData();
            size && form.append('size', size);
            id_category && form.append('id_category', id_category);
            color && form.append('color', color);
            material && form.append('Material', material);
            price && form.append('price', price);
            quantity && form.append('quantity', quantity);
            form.append('name', name);
            id_tradeMark && form.append('id_trademark', id_tradeMark);
            sale_of && form.append('sale_of', sale_of);
            consident && form.append('consistent', consident);
            images && form.append('ImageFile', images);
            hot && form.append('hot', hot);
            for (let index = 0; index < listImage.length; index++) {
                const element = listImage[index];
                listImage && form.append('listImageFile', element);
            }
            desc && form.append('description', desc);
            design && form.append('design', design);
            await axios.post(
                '/api/Products',
                form,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                }
            );
            toast.success("Thêm sản phẩm thành công")
            setname("");
            setprice("");
            setquantity("");
            setdesc("");
            setsale_of("");
            setmaterial("");
            setcolor("");
            setconsident("");
            setdesign("");
            setsize("");
            setid_category(4);
            setid_tradeMark(1);
            setimages(null);
            setlistImage([]);
            sethot(false);
            fetchAllProduct("");
        } catch (error) {
            console.log(error)
            toast.error("thất bại")
        }

    }


    const fetchdata = async () => {
        try {
            const response = await axios.get(`/api/Category`, {
                headers: {
                    'accept': 'application/json'
                }
            });
            if (response) {
                setlistIdcategory(response)
            }
        } catch (error) {
            console.log(error)
        }

    }

    const fetchdataTrademark = async () => {
        try {
            const response = await axios.get(`/api/Trademarks`, {
                headers: {
                    'accept': 'application/json'
                }
            });
            if (response) {
                setlistIdTrademark(response)
            }
        } catch (error) {
            console.log(error)
        }

    }
    useEffect(() => { fetchdata(); fetchdataTrademark(); }
        , [])



    const handleChangeCategory = (e) => {
        setid_category(e.target.value);
    };
    const handleChangeTrademark = (e) => {
        setid_tradeMark(e.target.value);
    };

    const handleImg = (e) => {
        if (e.target.files && e.target.files[0]) {
            setimages(e.target.files[0])
        }
    }

    const handlelistImg = (e) => {
        if (e.target.files) {
            setlistImage(e.target.files)
        }
    }
    return (
        <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Sửa sản phẩm
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className="grid-example">
                <Container>
                    <div className="row themsp">
                        <form>
                            <div className="mb-3 form-floating">
                                <input type="text" className="form-control rounded-0" id="floatingInput" value={name} onChange={e => setname(e.target.value)} placeholder="Tên sản phẩm" />
                                <label htmlFor="floatingInput">Tên sản phẩm</label>
                            </div>
                            <div className="mb-3 form-floating">
                                <input type="text" className="form-control rounded-0" id="floatingInput" value={price} onChange={e => setprice(e.target.value)} placeholder="Giá sản phẩm" />
                                <label htmlFor="floatingInput">Giá sản phẩm</label>
                            </div>
                            <div className="mb-3 form-floating">
                                <input type="text" className="form-control rounded-0" id="floatingInput" value={quantity} onChange={e => setquantity(e.target.value)} placeholder=" Số lượng trong kho" />
                                <label htmlFor="floatingInput">Số lượng trong kho</label>
                            </div>
                            <div className="mb-3 form-floating">
                                <input type="text" className="form-control rounded-0" id="floatingInput" value={desc} onChange={e => setdesc(e.target.value)} placeholder="Thông tin sản phẩm" />
                                <label htmlFor="floatingInput">Thông tin sản phẩm</label>
                            </div>
                            <div className="mb-3 form-floating">
                                <input type="text" className="form-control rounded-0" id="floatingInput" value={sale_of} onChange={e => setsale_of(e.target.value)} placeholder="Giảm giá" />
                                <label htmlFor="floatingInput">Giảm giá</label>
                            </div>
                            <div className="mb-3 form-floating">
                                <input type="text" className="form-control rounded-0" id="floatingInput" value={material} onChange={e => setmaterial(e.target.value)} placeholder="Chất liệu sp" />
                                <label htmlFor="floatingInput">Chất liệu</label>
                            </div>
                            <div className="mb-3 form-floating">
                                <input type="text" className="form-control rounded-0" id="floatingInput" value={color} onChange={e => setcolor(e.target.value)} placeholder="Màu sp" />
                                <label htmlFor="floatingInput">Màu sp</label>
                            </div>
                            <div className="mb-3 form-floating">
                                <input type="text" className="form-control rounded-0" id="floatingInput" value={consident} onChange={e => setconsident(e.target.value)} placeholder="Tương thích" />
                                <label htmlFor="floatingInput">Tương thích</label>
                            </div>
                            <div className="mb-3 form-floating">
                                <input type="text" className="form-control rounded-0" id="floatingInput" value={design} onChange={e => setdesign(e.target.value)} placeholder="Kiểu thiết kế" />
                                <label htmlFor="floatingInput">Kiểu thiết kế</label>
                            </div>
                            <div className="mb-3 form-floating">
                                <input type="text" className="form-control rounded-0" id="floatingInput" value={size} onChange={e => setsize(e.target.value)} placeholder="Size" />
                                <label htmlFor="floatingInput">size</label>
                            </div>
                            <div className="d-flex gap-5 ">
                                <div className="form-floating">
                                    <select className="form-select mb-3" id="floatingSelect" value={id_category} onChange={handleChangeCategory}>
                                        {listIdcategory && listIdcategory.length > 0 ?
                                            <>{listIdcategory?.map((item, index) => (
                                                <option value={item.categoryId} key={item.categoryId}>{item.name}</option>
                                            ))}
                                            </>
                                            :
                                            <>
                                                <option>error fetch data</option>
                                            </>
                                        }
                                    </select>
                                    <label htmlFor="floatingSelect">Loại sản phẩm</label>
                                </div>
                                <div className="form-floating">
                                    <select className="form-select form-select-lg mb-3" id="floatingSelect" value={id_tradeMark} onChange={handleChangeTrademark}>

                                        {listIdTrademark && listIdTrademark.length > 0 ?
                                            <>{listIdTrademark?.map((item, index) => (
                                                <option value={item.id} key={item.id}>{item.name}</option>
                                            ))}
                                            </>
                                            :
                                            <>
                                                <option>error fetch data</option>
                                            </>
                                        }
                                    </select>
                                    <label htmlFor="floatingSelect">Thương hiệu</label>
                                </div>
                                <div className="form-floating">
                                    <select className="form-select form-select-lg mb-3" id="floatingSelect" value={hot} onChange={(e) => sethot(e.target.value)}>
                                        <option value={true}>True</option>
                                        <option value={false}>False</option>
                                    </select>
                                    <label htmlFor="floatingSelect">Hot</label>
                                </div>
                            </div>
                            <div>
                                <div className="input-group mb-3 rounded-0">
                                    <label className="input-group-text rounded-0" htmlFor="inputGroupFile01">Upload Big Img</label>
                                    <input type="file" className="form-control rounded-0" id="inputGroupFile01" onChange={handleImg} />
                                </div>
                                <div className="input-group rounded-0">
                                    <label className="input-group-text rounded-0" htmlFor="inputGroupFile01">Upload small Img</label>
                                    <input type="file" className="form-control rounded-0" id="inputGroupFile01" multiple="multiple" onChange={handlelistImg} />
                                </div>
                            </div>

                        </form>
                    </div>
                </Container>
            </Modal.Body>
            <Modal.Footer>

                <Button className='btn-danger' onClick={props.onHide}>Đóng</Button>
                <button className='btn btn-primary' onClick={() => {
                    addNewProduct();
                }}>Lưu</button>
            </Modal.Footer>
        </Modal>
    );
}

const AdminProduct = () => {
    const navigate = useNavigate()
    const { page } = useParams();
    const [totalPage, setTotalPage] = useState(1);
    const { isAdmin } = useSelector(state => state.account);
    const [ModalEditShow, setModalEditShow] = useState(false);
    useEffect(() => {
        isAdmin === false && navigate("/")
    }, [isAdmin])
    const [Delshow, setDelShow] = useState(false);
    const [modalShow, setModalShow] = useState(false);
    const [iddel, setiddel] = useState(null)
    const [listProduct, setListProduct] = useState([]);
    const [dataEdit, setdataEdit] = useState(0);

    const fetchAllProducts = async () => {
        try {
            const data = await fetchAllProduct(page);
            data && setTotalPage(data.totalPage)
            data && setListProduct(data.data)
        } catch (error) {
            console.log(error)
        }

    }
    const fetchProductEdit = async (idProduct) => {
        const res = await fetch1Product(idProduct);
        res && setdataEdit(res);

    }
    useEffect(() => {
        fetchAllProducts();
    }, [modalShow, page])


    const handleDelteProduct = (id) => {
        setDelShow(true)
        setiddel(id)

    }
    const ComfirmDelete = async () => {
        if (iddel) {
            await deleteProduct(iddel);
            fetchAllProducts();
        }
        setDelShow(false)
    }

    let items = [];
    const Pagination_ = (page, totalPage) => {

        let active = Number(page);
        for (let number = 1; number <= totalPage; number++) {
            items.push(
                <Link key={number} to={`/admin/product/${number}`} style={{ color: "unset" }}>
                    <Pagination.Item active={number === active} href={`/admin/product/${number}`}>
                        <Link to={`/admin/product/${number}`} style={{ color: "unset" }}>{number}</Link>
                    </Pagination.Item>
                </Link>
            );
        }
    }
    let num = 1
    return (<>
        <Container className='my-4'>
            <h1 className="fw-bold text-center text-danger text-uppercase">Quản lý Sản phẩm</h1>
            <Button variant="primary" className='float-end my-4 z-3' onClick={() => setModalShow(true)}>
                Thêm sản phẩm
            </Button>

            <MydModalWithGrid size={"lg"} show={modalShow} onHide={() => setModalShow(false)} />
            <ModalEditProduct size={"lg"} show={ModalEditShow} onHide={() => setModalEditShow(false)} data={dataEdit} />

            <div className='ShowProduct'>
                <table className="table table-hover">
                    <thead >
                        <tr >
                            <th scope="col" >Stt</th>
                            <th scope="col">Id</th>
                            <th scope="col" >Thumbnail</th>
                            <th scope="col">Tên sản phẩm</th>
                            <th scope="col">Số Lượng trong kho</th>
                            <th scope="col">Xóa/sửa</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            listProduct && listProduct.map((item, index) => (
                                <tr key={item.id}>
                                    <th scope="row">{(Number(page) - 1) * 20 + num++}</th>
                                    <th>{item.id}</th>
                                    <td><img src={"https://localhost:7139/resources/" + item.img} alt='' style={{ width: "80px" }} /></td>
                                    <td>{item.name}</td>
                                    <td>{item.quantity}</td>
                                    <td ><button className='btn btn-warning ' onClick={() => { setModalEditShow(true); fetchProductEdit(item.id) }}>Sửa</button> <button className='btn btn-danger' onClick={() => handleDelteProduct(item.id)}>Xóa</button></td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
            {Pagination_(page, totalPage)}
            <div className="d-flex justify-content-center">
                <Pagination>{items}</Pagination>
            </div>
            <Modal
                show={Delshow}
                onHide={() => { setDelShow(false); setiddel(null) }}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Xoá sản phẩm ?</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Xác nhận xóa
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => { setDelShow(false); setiddel(null) }}>
                        Close
                    </Button>
                    <Button variant="danger" onClick={ComfirmDelete} >Xóa</Button>
                </Modal.Footer>
            </Modal>
        </Container>
    </>);
}

export default AdminProduct;