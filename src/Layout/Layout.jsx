import React from 'react';
import NavBar from '../Compo/NavBar';
import { Outlet } from 'react-router';
import Footer from '../Compo/Footer';

const Layout = () => {
    return (
        <div className="max-w-7xl mx-auto">
            <NavBar />
            <div className="mt-4">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default Layout;
