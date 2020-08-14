import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
const Sidebar = props => {
    return (
        <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
            {/* Sidebar - Brand */}
            <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
                <div className="sidebar-brand-icon rotate-n-15">
                    <i className="fas fa-laugh-wink" />
                </div>
                <div className="sidebar-brand-text mx-3">ADMIN</div>
            </a>
            {/* Nav Item - Pages Collapse Menu */}
            <li className="nav-item">
                <Link className="nav-link" to="/admin">
                    <i className="fas fa-fw fa-tachometer-alt" />
                    <span>Dashboard</span></Link>
            </li>
            {/* Nav Item - Utilities Collapse Menu */}
            <li className="nav-item">
                <Link className="nav-link" to="/admin/products">
                    <i className="fas fa-fw fa-tachometer-alt" />
                    <span>Quản lý sản phẩm</span></Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/admin/category">
                    <i className="fas fa-fw fa-tachometer-alt" />
                    <span>Quản lý danh mục</span></Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/admin/post">
                    <i className="fas fa-fw fa-tachometer-alt" />
                    <span>Quản lý bài viết</span></Link>
            </li>
            {/* Divider */}

        </ul>
    )
}

Sidebar.propTypes = {

}

export default Sidebar
