import React from "react";
import {Link, NavLink} from "react-router-dom";
import "./Header.css";

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to="/" className="navbar-brand">Accounts App</Link>
            <ul className="navbar-nav ml-auto">
                <NavLink to="/" exact activeClassName={"activeLink"} className="nav-link">Accounts</NavLink>
                <NavLink to="/add" activeClassName={"activeLink"} className="nav-link">Add Account</NavLink>
                <NavLink to="/edit" activeClassName={"activeLink"} className="nav-link">Edit / Delete</NavLink>
            </ul>
        </nav>
    )
}

export default Header;