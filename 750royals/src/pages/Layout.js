import './styles/Layout.css';
import { React, useState, useEffect } from "react";
import { Outlet } from 'react-router-dom';
import Navbar from "./components/navbar/main.js";
import SmallNavbar from './components/navbar/hamburger';
import Footer from "./components/footer/main.js";

function Layout() {
    
    const [navbar, setNavbar] = useState(window.innerWidth > 750);

    const updateNavbar = () => {
        setNavbar(window.innerWidth > 750);
    };
    
    useEffect(() => {
        window.addEventListener("resize", updateNavbar);
        return () => window.removeEventListener("resize", updateNavbar);
    });

    return (
        <div>
            {navbar? (<Navbar></Navbar>):(<SmallNavbar></SmallNavbar>)}
            <Outlet />
            <Footer></Footer>
        </div>

    );
}

export default Layout;