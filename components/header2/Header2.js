import React, { useState } from 'react'
import Link from 'next/link'
import logo from '/public/images/logo.svg'
import logo2 from '/public/images/logo-4.png'
import MobileMenu from '../MobileMenu/MobileMenu';
import HeaderTopbar from '../HeaderTopbar/HeaderTopbar';
import Image from 'next/image';

const Header2 = (props) => {    const [menuActive, setMenuState] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    const SubmitHandler = (e) => {
        e.preventDefault()
    }

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    }

    return (
        <header className={`header-area ${props.hclass}`}>
             <div id="header-sticky" className="menu-area">
                <div className="container-fluid">
                    <div className="second-menu">
                        <div className="row align-items-center">
                            <div className="col-xl-2 col-lg-3 col-md-7 col-5">
                                <div className="logo">
                                    <Link className='logo' onClick={ClickHandler} href="/"><Image src={logo2} alt="logo" /></Link>
                                    <Link className='logo-2' onClick={ClickHandler} href="/"><Image src={logo2} alt="logo" /></Link>
                                </div>
                            </div>
                            <div className="col-xl-7 col-lg-6 col-md-1 col-1 text-right text-xl-right d-none d-lg-block">
                                <div className="main-menu">
                                    <nav id="mobile-menu">
                                        <ul className="nav">
                                            <li className="has-submenu">
                                                <Link onClick={ClickHandler} href="/">Home</Link>
                                               
                                            </li>
                                            <li><Link onClick={ClickHandler} href="/about">About us</Link></li>
                                            <li><Link onClick={ClickHandler} href="/service-s2">Programs</Link></li>
                                            <li><Link onClick={ClickHandler} href="/partner">Become a Partner</Link></li>
                                            <li><Link onClick={ClickHandler} href="/contact">Contact</Link></li>




                                           
                                           
                                             
                                         </ul>
                                    </nav>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-3 col-md-4 col-5 text-left">
                                <div className="header-area-right">
                                    <ul>
                                        {/* <li><button className="search-toggle-btn"><i className="icon-23" onClick={() => setMenuState(!menuActive)}></i></button></li> */}
                                        <li className="header-right-btn">
                                            <Link onClick={ClickHandler} href="/Verifications" className="btn-style-1">Verifications</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-1">
                                <MobileMenu />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`header-search-form ${menuActive ? "active" : ""}`}>
                <button className="close-header-search" onClick={() => setMenuState(!menuActive)}><i className="icon-02"></i></button>
                <form method="post" onSubmit={SubmitHandler}>                    <div className="form-group">
                        <input 
                            type="text" 
                            name="search" 
                            value={searchTerm}
                            onChange={handleSearchChange}
                            placeholder="Search Here" 
                            required="" 
                        />
                        <button type="submit" className="search-btn"><i className="icon-23"></i></button>
                    </div>
                </form>
            </div>
        </header>
    )
}

export default Header2;
