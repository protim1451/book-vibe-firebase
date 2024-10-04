import { NavLink } from "react-router-dom";

import { useState } from "react";

const Header = () => {

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const closeDropdown = () => {
        setIsDropdownOpen(false);
    };

    const links = <>
        <li><NavLink to="/" onClick={closeDropdown}>Home</NavLink></li>
        <li><NavLink to="/listedbooks" onClick={closeDropdown}>Listed Books</NavLink></li>
        <li><NavLink to="/pagestoread" onClick={closeDropdown}>Pages to read</NavLink></li>
        <li><NavLink to="/topbooks" onClick={closeDropdown}>Blog</NavLink></li>
        <li><NavLink to="/about" onClick={closeDropdown}>About</NavLink></li>
        <li><NavLink to="/faq" onClick={closeDropdown}>FAQ</NavLink></li>
    </>

    return (
        <div className="mx-2 lg:mx-32">
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box NavActive">
                            {links}
                        </ul>
                    </div>
                    <NavLink to="/"> <a className="btn btn-ghost text-xl font-bold">Book Vibe</a></NavLink>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-3 NavActive">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end gap-1">
                    <a className="btn text-white bg-[#17BE0A]">Sign In</a>
                    <a className="btn text-white bg-[#59C6D2]">Buy Book</a>
                </div>
            </div>
        </div>
    );
};

export default Header;