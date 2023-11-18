
import "bootstrap/js/dist/dropdown"
import "bootstrap/js/dist/offcanvas"
import './Heading.scss'

import { AiOutlineSearch } from 'react-icons/ai';
import { IoCartOutline } from 'react-icons/io5';
import { GrPrevious } from 'react-icons/gr'
import { NavLink, Link, useNavigate } from 'react-router-dom';

import { Category } from '~/assest/users/data/Category';
import { useState } from "react";


import * as actions from '~/store/actions';
import { useDispatch, useSelector } from "react-redux";

const Header = () => {
    const { cartStore } = useSelector(state => state.cart)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    let amount = 0
    for (const element of cartStore) {
        amount += element.soluong
    }
    const [keyword, setKeyword] = useState("")
    const handleSearch = async (e) => {
        if (e.keyCode === 13) {
            dispatch(actions.SearchProducts(keyword))
            navigate("/search")
            setKeyword("")
        }
    }


    const openSearch = () => {
        const form_search = document.getElementById("form-searchmb")
        form_search.classList.remove("d-none")
    }
    const closeSearch = () => {
        const form_search = document.getElementById("form-searchmb")

        form_search.classList.add("d-none")
    }

    return (
        <>
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg bg-body-tertiary ">
                <div className="container ">
                    <Link className="navbar-brand fw-bold fs-3 " to={""}>
                        Tuna Shop
                    </Link>
                    <div
                        className="sidebar offcanvas offcanvas-end"
                        tabIndex={-1}
                        id="offcanvasNavbar"
                        aria-labelledby="offcanvasNavbarLabel"
                    >
                        <div className="offcanvas-header border-bottom">
                            <Link className="offcanvas-title text-white fw-bold fs-3" id="offcanvasNavbarLabel " to={""}>
                                Tuna Shop
                            </Link>
                            <button
                                type="button"
                                className="btn-close btn-close-white border-0 shadow-none"
                                data-bs-dismiss="offcanvas"
                                aria-label="Close"
                            />
                        </div>
                        <div className="offcanvas-body justify-content-around">
                            <ul className="navbar-nav justify-content-around">
                                <li className="nav-item">
                                    <NavLink className="nav-link text-uppercase" aria-current="page" to="">
                                        Trang Chủ
                                    </NavLink>
                                </li>
                                <li className="nav-item dropdown">
                                    <button
                                        className="nav-link dropdown-toggle text-uppercase"
                                        to="products"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        Sản Phẩm
                                    </button>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        {Category?.map((product, index) => (
                                            <li key={index}><Link className="dropdown-item fs-14px" key={index} to={`/products/${product.id}`}>{product?.name}</Link></li>
                                        ))}
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <NavLink to={"contact"} className='nav-link text-uppercase'>Liên hệ</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to={"introduce"} className='nav-link text-uppercase'>Giới Thiệu</NavLink>
                                </li>
                                <li className="nav-item dropdown">
                                    <NavLink to={"account"} className='nav-link dropdown-toggle text-uppercase' data-bs-toggle="dropdown"
                                        role="button"
                                        aria-expanded="false"  >Tài khoản</NavLink>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li><Link className="dropdown-item fs-14px" to={`/login`}>Đăng Nhập</Link></li>
                                        <li><Link className="dropdown-item fs-14px" to={`/register`}>Đăng Ký</Link></li>

                                    </ul>
                                </li>

                            </ul>
                        </div>

                    </div>
                    <div className="d-flex bg-white me-lg-3 position-absolute form-searchmb d-none shadow z-1" id="form-searchmb" role="search">
                        <button className="btn border-end rounded-0 " onClick={closeSearch} type="reset">
                            <GrPrevious />
                        </button>
                        <input
                            className="form-control shadow-none border-0 "
                            type="search"
                            placeholder="Tìm kiếm ..."
                            aria-label="Search"
                            value={keyword}
                            onChange={e => setKeyword(e.target.value)}
                            onKeyUp={handleSearch}
                        />
                        <button className="btn shadow-none border-0 rounded-0 border-start">
                            <AiOutlineSearch size={20} />
                        </button>
                    </div>
                    <div className="d-flex bg-white rounded-2 me-lg-3 form-search d-none d-sm-flex ">
                        <input
                            className="form-control shadow-none border-0 "
                            type="search"
                            placeholder="Tìm kiếm ..."
                            aria-label="Search"
                            value={keyword}
                            onChange={e => setKeyword(e.target.value)}
                            onKeyUp={handleSearch}
                        />
                        <button className="btn shadow-none border-0 rounded-0" onClick={handleSearch}>
                            <AiOutlineSearch size={20} />
                        </button>
                    </div>
                    <div className="d-flex align-items-center">
                        <div className="div-search d-flex d-sm-none">
                            {/* <div className="space"></div> */}
                            <button className="btn shadow-none border-0 rounded-0 " onClick={openSearch} >
                                <AiOutlineSearch size={20} color="white" />
                            </button>
                        </div>
                        <div className="position-relative">
                            <NavLink to={"cart"} className='fs-14px cart'><IoCartOutline size={23} color="white" />{amount != 0 && <span className="d-flex align-items-center justify-content-center rounded-circle position-absolute text-center text-white">{amount}</span>}</NavLink>
                        </div>
                        <button
                            className="navbar-toggler border-0 shadow-none"
                            type="button"
                            data-bs-toggle="offcanvas"
                            data-bs-target="#offcanvasNavbar"
                            aria-controls="offcanvasNavbar"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon" />
                        </button>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header; 