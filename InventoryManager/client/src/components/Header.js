import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'
function Header() {
return (
<header>
        <h1>Kies Motorsports Inventory Manager </h1>
        <h4 className = "furry-friends">An Independently Managed Inventory Database for Kies Motorsports
        </h4>
        <NavLink className="nav-link" to="/">
        Home
        </NavLink>
        <span> | </span>
        <NavLink className="nav-link" to="/new">
        Add Item to Inventory Database
        </NavLink>
</header>
);
}
 // would like to have image to left of header of company logo 
export default Header;