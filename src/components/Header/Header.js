import React from 'react';
import logo from '../../logo.png'

const Header = () => {
    return (
        
        // header
        <div>
            <nav className = "navbar shadow navbar-light bg-light">
                <div className="container-fluid">
                    <div className = "navbar-brand">
                        <img src={logo} alt="" width="40px" className="me-3"/>
                        <span className="fs-4 fw-bold"><span className=" text-danger">Circle</span> Tech</span>
                    </div>
                    <form className = "d-flex">
                        <input className = "form-control me-2" type="search" placeholder="Search People" aria-label="Search"/>
                        <button className = "btn btn-outline-danger" type="submit">Search</button>
                    </form>
                </div>
            </nav>
            <h2 className ="text-center my-5">Total Salaries Budget:<span className = "text-danger"> $1 Million</span></h2>
        </div>
    );
};

export default Header;