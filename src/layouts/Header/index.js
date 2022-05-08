import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return <>
            <h3>I am a header to help with navigation.</h3>
            <nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/users">Users</NavLink>
            </nav>
           </>
}

export default Header;