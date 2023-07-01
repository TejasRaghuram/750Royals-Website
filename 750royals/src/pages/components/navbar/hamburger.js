import './styles.css';
import { React, useState } from "react";
import { Link, useLocation } from 'react-router-dom';
import Instagram from './../../images/icons/Instagram.png';
import Github from './../../images/icons/Github.png';
import Logo from './../../images/Logo.png'

function SmallNavbar() {

    const [menuOpen, setMenuOpen] = useState(false);
    let currentPage = useLocation().pathname;

    let menu = "menu_closed";
    if(menuOpen)
    {
        menu = "menu_opened";
    }

    return (
        <div>
            <div id="navbar_solid"></div>
            <div id="navbar_gradient"></div>
            <Link to="/" class="navbar_link"><img id="navbar_logo_small" src={Logo} alt=""></img></Link>
            <div id="hamburger" onClick = {() => setMenuOpen(!menuOpen)}>
                <div class="hamburger_line" id="line1"></div>
                <div class="hamburger_line" id="line2"></div>
                <div class="hamburger_line" id="line3"></div>
            </div>
            <div id={menu}>
                <div id="navbar_links_small">
                    <Link to="/" class="navbar_link" id={(currentPage === '/' || currentPage === '') ? "navbar_link_selected":""} onClick = {() => setMenuOpen(!menuOpen)}>Home</Link>
                    <br class="menu_split"></br>
                    <Link to="/about-us" class="navbar_link" id={(currentPage === '/about-us' || currentPage === '/about-us/') ? "navbar_link_selected":""} onClick = {() => setMenuOpen(!menuOpen)}>About Us</Link>
                    <br class="menu_split"></br>
                    <Link to="/awards" class="navbar_link" id={(currentPage === '/awards' || currentPage === '/awards/') ? "navbar_link_selected":""} onClick = {() => setMenuOpen(!menuOpen)}>Awards</Link>
                    <br class="menu_split"></br>
                    <Link to="/outreach" class="navbar_link" id={(currentPage === '/outreach' || currentPage === '/outreach/') ? "navbar_link_selected":""} onClick = {() => setMenuOpen(!menuOpen)}>Outreach</Link>
                    <br class="menu_split"></br>
                </div>
                <div id="menu_gradient"></div>
            </div>
            <div id="navbar_icons">
                <a href="https://www.instagram.com/sbhs_750R/"><img class="navbar_icon" id="instagram" src={Instagram} alt=""></img></a>
                <a href="https://github.com/SB-750Royals"><img class="navbar_icon" id="github" src={Github} alt=""></img></a>
            </div>
            <div id="header_divider"></div>
        </div>

    );
}

export default SmallNavbar;