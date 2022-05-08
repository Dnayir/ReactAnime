import React from 'react';
import { Outlet } from 'react-router-dom';
import { default as Footer } from './Footer';
import { default as Header } from './Header';

const Layout = () => {
    return <>
            <Header />
                <Outlet />
            <Footer />
           </>
}

export default Layout;