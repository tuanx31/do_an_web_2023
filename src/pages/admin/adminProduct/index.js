import axios from '~/setup/axios';
import FormData from 'form-data';

import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";


const AdminProduct = () => {
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
    const [listImage, setlistImage] = useState()


    const [listIdcategory, setlistIdcategory] = useState([])
    const [listIdTrademark, setlistIdTrademark] = useState([])


    const addNewProduct = async () => {
        const form = new FormData();
        form.append('size', size);
        form.append('id_category', id_category);
        form.append('color', color);
        form.append('Material', material);
        form.append('price', price);
        form.append('quantity', quantity);
        form.append('name', name);
        form.append('id_trademark', id_tradeMark);
        form.append('sale_of', sale_of);
        form.append('consistent', consident);
        form.append('ImageFile', images);
        for (let index = 0; index < listImage.length; index++) {
            const element = listImage[index];
            form.append('listImageFile', element);
        }

        form.append('description', desc);
        form.append('design', design);
        const response = await axios.post(
            '/api/Products',
            form,
            {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }
        );
        console.log(response)
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
    return (<>
        <Container>
            <div className="row themsp my-5">

                <h1>Thêm sản phẩm</h1>
                <form>
                    <div className="my-3 form-floating">
                        <input type="text" className="form-control rounded-0" id="floatingInput" value={name} onChange={e => setname(e.target.value)} placeholder="Tên sản phẩm" />
                        <label htmlFor="floatingInput">Tên sản phẩm</label>
                    </div>
                    <div className="mb-3 ">
                        <input type="text" className="form-control rounded-0" value={price} onChange={e => setprice(e.target.value)} placeholder="Giá sản phẩm" />
                    </div>
                    <div className="mb-3 ">
                        <input type="text" className="form-control rounded-0" value={quantity} onChange={e => setquantity(e.target.value)} placeholder="Số lượng trong kho" />
                    </div>
                    <div className="mb-3">
                        <input type="text" className="form-control rounded-0" value={desc} onChange={e => setdesc(e.target.value)} placeholder="Thông tin sản phẩm" />
                    </div>
                    <div className="mb-3">
                        <input type="text" className="form-control rounded-0" value={sale_of} onChange={e => setsale_of(e.target.value)} placeholder="Giảm giá" />
                    </div>
                    <div className="mb-3">
                        <input type="text" className="form-control rounded-0" value={material} onChange={e => setmaterial(e.target.value)} placeholder="Chất liệu sp" />
                    </div>
                    <div className="mb-3">
                        <input type="text" className="form-control rounded-0" value={color} onChange={e => setcolor(e.target.value)} placeholder="Màu sp" />
                    </div>
                    <div className="mb-3">
                        <input type="text" className="form-control rounded-0" value={consident} onChange={e => setconsident(e.target.value)} placeholder="Tương thích" />
                    </div>
                    <div className="mb-3">
                        <input type="text" className="form-control rounded-0" value={design} onChange={e => setdesign(e.target.value)} placeholder="Kiểu thiết kế" />
                    </div>
                    <div className="mb-3">
                        <input type="text" className="form-control rounded-0" value={size} onChange={e => setsize(e.target.value)} placeholder="Size" />
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
                                        <option value={item.categoryId} key={item.categoryId}>{item.name}</option>
                                    ))}
                                    </>
                                    :
                                    <>
                                        <option>error fetch data</option>
                                    </>
                                }
                                {/* {
                                    listIdTrademark?.map((item, index) => (
                                        <option value={item.name} key={item.categoryId} >{item.name}</option>
                                    ))
                                } */}
                            </select>
                            <label htmlFor="floatingSelect">Thương hiệu</label>
                        </div>
                    </div>
                    <div>
                        <div className="input-group mb-3 rounded-0">
                            <label className="input-group-text rounded-0" htmlFor="inputGroupFile01">Upload Big Img</label>
                            <input type="file" className="form-control rounded-0" id="inputGroupFile01" onChange={handleImg} />
                        </div>
                        <div className="input-group mb-3 rounded-0">
                            <label className="input-group-text rounded-0" htmlFor="inputGroupFile01">Upload small Img</label>
                            <input type="file" className="form-control rounded-0" id="inputGroupFile01" multiple="multiple" onChange={handlelistImg} />
                        </div>
                    </div>
                    <button className='btn btn-success' onClick={() => {
                        addNewProduct();
                    }}>Add</button>
                </form>
            </div>
        </Container>
    </>);
}

export default AdminProduct;