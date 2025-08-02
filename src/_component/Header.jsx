"use client";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";

const Header = ({ toggleSidebar, toggleTheme }) => {
    const [profileOpen, setProfileOpen] = useState(false);
    const profileRef = useRef();

    // Close the dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (profileRef.current && !profileRef.current.contains(event.target)) {
                setProfileOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <nav className="navbar mt-3 mb-4 navbar-main navbar-expand-lg px-0 mx-3 shadow-none border-radius-xl" id="navbarBlur" data-scroll="true">
            <div className="container-fluid py-1 px-3">
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb bg-transparent mb-0 pb-0 pt-1 px-0 me-sm-6 me-5">
                        <li className="breadcrumb-item text-sm" aria-current="page">Dashboard</li>
                    </ol>
                </nav>
                <div className="collapse navbar-collapse mt-sm-0 mt-2 me-md-0 me-sm-4" id="navbar">
                    <div className="ms-md-auto pe-md-3 d-flex align-items-center">
                        <div className="input-group input-group-outline">
                            <label className="form-label">Type here...</label>
                            <input type="text" className="form-control" />
                        </div>
                    </div>
                    <ul className="navbar-nav d-flex align-items-center justify-content-end">

                        <li className="nav-item pe-3 d-flex align-items-center">
                            <a href="#" className="nav-link text-body p-0">
                                <i className="material-symbols-rounded fixed-plugin-button-nav">settings</i>
                            </a>
                        </li>

                        <li className="nav-item pe-3 d-flex align-items-center" onClick={toggleTheme}>
                            <a href="#" className="nav-link text-body p-0">
                                <i className="material-symbols-rounded fixed-plugin-button-nav">dark_mode</i>
                            </a>
                        </li>

                        <li className="nav-item dropdown pe-3 d-flex align-items-center">
                            <a href="#" className="nav-link text-body p-0" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                                <i className="material-symbols-rounded">notifications</i>
                            </a>
                            <ul className="dropdown-menu dropdown-menu-end px-2 py-3 me-sm-n4" aria-labelledby="dropdownMenuButton">
                                <li className="mb-2">
                                    <a className="dropdown-item border-radius-md" href="#">
                                        <div className="d-flex py-1">
                                            <div className="my-auto">
                                                <img src="/assets/img/team-2.jpg" className="avatar avatar-sm me-3" />
                                            </div>
                                            <div className="d-flex flex-column justify-content-center">
                                                <h6 className="text-sm font-weight-normal mb-1">
                                                    <span className="font-weight-bold">New message</span> from Laur
                                                </h6>
                                                <p className="text-xs text-secondary mb-0">
                                                    <i className="fa fa-clock me-1"></i>
                                                    13 minutes ago
                                                </p>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                                <li className="mb-2">
                                    <a className="dropdown-item border-radius-md" href="#">
                                        <div className="d-flex py-1">
                                            <div className="my-auto">
                                                <img src="https://demos.creative-tim.com/material-dashboard/assets/img/small-logos/logo-spotify.svg" className="avatar avatar-sm bg-gradient-dark me-3" />
                                            </div>
                                            <div className="d-flex flex-column justify-content-center">
                                                <h6 className="text-sm font-weight-normal mb-1">
                                                    <span className="font-weight-bold">New album</span> by Travis Scott
                                                </h6>
                                                <p className="text-xs text-secondary mb-0">
                                                    <i className="fa fa-clock me-1"></i>
                                                    1 day
                                                </p>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                            </ul>
                        </li>

                        <li className="nav-item dropdown d-flex align-items-center position-relative" ref={profileRef}>
                            <button
                                className="nav-link text-body font-weight-bold px-0 bg-transparent border-0"
                                onClick={() => setProfileOpen(!profileOpen)}
                            >
                                <i className="material-symbols-rounded">account_circle</i>
                            </button>

                            {profileOpen && (
                                <ul
                                    className="dropdown-menu show position-absolute mt-2 py-2 shadow-lg"

                                >
                                    <li>
                                        <Link className="dropdown-item d-flex align-items-center" href="/profile">
                                            <i className="material-symbols-rounded me-2">person</i> Profile
                                        </Link>
                                    </li>

                                    <li>
                                        <Link className="dropdown-item d-flex align-items-center" href="/tax-information">
                                            <i className="material-symbols-rounded me-2">account_balance</i> Tax Information
                                        </Link>
                                    </li>

                                    <li>
                                        <Link className="dropdown-item d-flex align-items-center" href="/bank-information">
                                            <i className="material-symbols-rounded me-2">credit_card</i> Bank Information
                                        </Link>
                                    </li>

                                    <li>
                                        <Link className="dropdown-item d-flex align-items-center" href="/user-access">
                                            <i className="material-symbols-rounded me-2">group</i> Use Access
                                        </Link>
                                    </li>

                                    <li>
                                        <Link className="dropdown-item d-flex align-items-center" href="#">
                                            <i className="material-symbols-rounded me-2">lock_open</i> Password
                                        </Link>
                                    </li>

                                    <li>
                                        <Link className="dropdown-item d-flex align-items-center" href="#">
                                            <i className="material-symbols-rounded me-2">draft</i> Addition Services
                                        </Link>
                                    </li>

                                    <li>
                                        <Link className="dropdown-item d-flex align-items-center" href="#">
                                            <i className="material-symbols-rounded me-2">support_agent</i> Support
                                        </Link>
                                    </li>

                                    <li>
                                        <hr className="horizontal dark mt-0 mb-2" />
                                    </li>

                                    <li>
                                        <Link className="dropdown-item d-flex align-items-center text-danger" href="/admin/login">
                                            <i className="material-symbols-rounded me-2">logout</i> Logout
                                        </Link>
                                    </li>
                                </ul>
                            )}
                        </li>

                        <li className="nav-item d-xl-none ps-3 d-flex align-items-center" onClick={toggleSidebar}>
                            <a href="#" className="nav-link text-body p-0" id="iconNavbarSidenav">
                                <div className="sidenav-toggler-inner">
                                    <i className="sidenav-toggler-line"></i>
                                    <i className="sidenav-toggler-line"></i>
                                    <i className="sidenav-toggler-line"></i>
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;
