import React from 'react';
import Header from '../../components/Main/Header'
import Footer from '../../components/Main/Footer'
import Navbar from '../../components/Main/NavBar';
export default ({ children, category }) => {

    console.log('render Main')

    return (
        <div className="user-page">
            <Header />
            <Navbar category = { category } />
            <div className="content">
                {children}
            </div>
            <Footer />
        </div>
    )
}
