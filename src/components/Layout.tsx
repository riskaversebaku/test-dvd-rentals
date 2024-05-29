import FnzLogo from "../assets/fnz-logo.png";
import React from "react";
import {Link, NavLink} from "react-router-dom";

type LayoutProps = {
    children: React.ReactNode;
};

export function Layout({children}: LayoutProps) {
    return (
        <>
            <div className="container">
                <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
                    <Link
                        to="/"
                        className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none"
                    >
                        <img src={FnzLogo} alt="Logo" width={30}/>
                        <span className="fs-4 ms-3">DVD Rental</span>
                    </Link>

                    <ul className="nav nav-pills">
                        <li className="nav-item">
                            <NavLink to="/" className="nav-link">Rentals</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/new-rental" className="nav-link">New Rental</NavLink>
                        </li>
                    </ul>
                </header>
            </div>
            {children}
        </>
    );
}