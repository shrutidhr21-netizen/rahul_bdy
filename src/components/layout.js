// src/components/Layout.js
import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
// Optionally: import Header from './Header';

function Layout() {
    return (
        <div className="app-container">
            {/* Optional Header */}
            {/* <Header /> */}

            {/* This will render the current page content */}
            <main>
                <Outlet />
            </main>

            {/* Footer always present */}
            <Footer />
        </div>
    );
}

export default Layout;
