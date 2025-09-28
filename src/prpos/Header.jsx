import Logo1 from '../assets/img/logo.png'
import { BrowserRouter, Outlet, Route, Routes, NavLink, Navigate, Link } from 'react-router-dom'

function Header(props) {

    return (
        <header id="stickyHeader">
            <div className="container">
                <div className="top-bar">
                    <div className="logo">
                        <a href="#">
                            <img src={Logo1} alt="logo"></img>
                        </a>
                    </div>
                    <nav className="navbar">
                        <ul className="navbar-links">
                            <li className="navbar-dropdown menu-item-children">
                                <a href="#">Demo Pages</a>
                                <ul className="sub-menu">
                                    <li> < Link to='/'> home 1 </ Link></li>
                                    <li>< Link to='/home2'> home 2 </ Link></li>
                                    <li>< Link to='/home3'> home 3 </ Link></li>
                                    <li>< Link to='/home4'> home 4 </ Link></li>
                                </ul>
                            </li>
                            <li className="navbar-dropdown">
                                <a href="#about"> About </a>
                            </li>
                            <li className="navbar-dropdown">
                                <a href="#services">Services</a>
                            </li>
                            <li className="navbar-dropdown">
                                <a href="#team">Team</a>
                            </li>
                            <li className="navbar-dropdown">
                                <a href="#pricing">Pricing</a>
                            </li>
                            <li className="navbar-dropdown">
                                <a href="#blog">blog</a>
                            </li>
                        </ul>
                    </nav>
                    <a href="callto:+12344502086"><i className="flaticon-smart-phone"></i><b> +1234 450 2086</b></a>
                </div>
            </div>
        </header>
    )
}

export default Header