import './styles.css';
import React from "react";
import { Link, useLocation } from 'react-router-dom';
import Instagram from './../../images/icons/Instagram.png';
import Github from './../../images/icons/Github.png';
import Logo from './../../images/Logo.png'

function Navbar() {

    let currentPage = useLocation().pathname;

    return (
        <div>
            <div id="navbar_solid"></div>
            <div id="navbar_gradient"></div>
            <Link to="/" class="navbar_link"><img id="navbar_logo" src={Logo} alt=""></img></Link>
            <div id="navbar_links">
                <Link to="/" class="navbar_link" id={(currentPage === '/' || currentPage === '') ? "navbar_link_selected":""}>Home</Link>
                <Link to="/about-us" class="navbar_link" id={(currentPage === '/about-us' || currentPage === '/about-us/') ? "navbar_link_selected":""}>About Us</Link>
                <Link to="/awards" class="navbar_link" id={(currentPage === '/awards' || currentPage === '/awards/') ? "navbar_link_selected":""}>Awards</Link>
                <Link to="/outreach" class="navbar_link" id={(currentPage === '/outreach' || currentPage === '/outreach/') ? "navbar_link_selected":""}>Outreach</Link>
            </div>
            <div id="navbar_icons">
                <a href="https://www.instagram.com/sbhs_750R/"><img class="navbar_icon" id="instagram" src={Instagram} alt=""></img></a>
                <a href="https://github.com/SB-750Royals"><img class="navbar_icon" id="github" src={Github} alt=""></img></a>
            </div>
            <div id="header_divider"></div>
        </div>

    );
}

export default Navbar;