"use client"

import Link from 'next/link'
import React, { useState } from 'react'
import { usePathname } from 'next/navigation';

const SuparadminSidebar = () => {
    const pathname = usePathname();
    const [showModal, setShowModal] = useState(false);
    const [financeDropdownOpen, setFinanceDropdownOpen] = useState(false);

    return (
        <>
            <aside className="card sidenav navbar navbar-vertical navbar-expand-xs border-radius-lg fixed-start ms-2 my-2" id="sidenav-main">
                <div className="sidenav-header">
                    <i className="fas fa-times p-3 cursor-pointer opacity-5 position-absolute end-0 top-0 d-none d-xl-none text-white" aria-hidden="true" id="iconSidenav"></i>
                    <Link className="navbar-brand px-4 py-3 m-0" href="/">
                        <img src="/assets/img/logos/mixtune-img.webp" className="navbar-brand-img" width="26" height="26" alt="main_logo" />
                        <span className="ms-1 text-sm">Mixx Tune</span>
                    </Link>
                </div>
                <hr className="horizontal dark mt-0 mb-2" />

                <div className="sidenav-footer position-relative w-100 bottom-0">
                    <div className="mx-3">
                        <button
                            className="btn bg-gradient-green w-100 text-black"
                            type="button"
                            onClick={() => setShowModal(true)}
                        >
                            <i className="material-symbols-rounded opacity-5">add</i>
                            One Release
                        </button>
                    </div>
                </div>

                <div className="collapse navbar-collapse w-auto" id="sidenav-collapse-main">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link href="/superadmin" className={`nav-link ${pathname === "/superadmin" ? 'active bg-gradient-dark text-white' : 'text-dark'}`}>
                                <i className="material-symbols-rounded opacity-5">dashboard</i>
                                <span className="nav-link-text ms-1">Dashboard</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="#" className="nav-link text-dark">
                                <i className="material-symbols-rounded opacity-5">admin_panel_settings</i>
                                <span className="nav-link-text ms-1">Admins</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="#" className="nav-link text-dark">
                                <i className="material-symbols-rounded opacity-5">group</i>
                                <span className="nav-link-text ms-1">Customers</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="#" className="nav-link text-dark">
                                <i className="material-symbols-rounded opacity-5">do_not_disturb_on</i>
                                <span className="nav-link-text ms-1">Release Copyright Claim</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="#" className="nav-link text-dark">
                                <i className="material-symbols-rounded opacity-5">settings</i>
                                <span className="nav-link-text ms-1">Settings</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="#" className="nav-link text-dark">
                                <i className="material-symbols-rounded opacity-5">folder_open</i>
                                <span className="nav-link-text ms-1">Label</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="#" className="nav-link text-dark">
                                <i className="material-symbols-rounded opacity-5">bar_chart</i>
                                <span className="nav-link-text ms-1">Analytics</span>
                            </Link>
                        </li>

                        <li className="nav-item">
                            <div
                                className="nav-link d-flex align-items-center justify-content-between cursor-pointer"
                                onClick={() => setFinanceDropdownOpen(!financeDropdownOpen)}

                            >
                                <div className='d-flex align-items-center  justify-content-center'>
                                    <i className="material-symbols-rounded opacity-5">account_balance_wallet</i>
                                    <span className="nav-link-text ms-1">Finance</span>
                                </div>
                                <i className="material-symbols-rounded">{financeDropdownOpen ? "expand_less" : "expand_more"}</i>
                            </div>

                        </li>
                        {financeDropdownOpen && (
                            <ul className="navbar-nav ps-4">
                                <li className="nav-item">
                                    <Link href="#" className="nav-link text-dark">
                                        <i className="material-symbols-rounded opacity-5">account_balance</i>
                                        <span className="nav-link-text ms-1">Bank Account</span>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link href="#" className="nav-link text-dark">
                                        <i className="material-symbols-rounded opacity-5">wallet</i>
                                        <span className="nav-link-text ms-1">Wallet Transactions</span>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link href="#" className="nav-link text-dark">
                                        <i className="material-symbols-rounded opacity-5">atm</i>
                                        <span className="nav-link-text ms-1">Withdrawal Requests</span>
                                    </Link>
                                </li>
                            </ul>
                        )}

                        <li className="nav-item">
                            <Link href="#" className="nav-link text-dark">
                                <i className="material-symbols-rounded opacity-5">Notifications</i>
                                <span className="nav-link-text ms-1">Announcements</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="#" className="nav-link text-dark">
                                <i className="material-symbols-rounded opacity-5">queue_music</i>
                                <span className="nav-link-text ms-1">Audio Releases</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="#" className="nav-link text-dark">
                                <i className="material-symbols-rounded opacity-5">logout</i>
                                <span className="nav-link-text ms-1">Log Out</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </aside>

            {/* Modal Popup */}
            {showModal && (
                <div className="popup-model-card position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center">
                    <div className="card rounded-4 shadow p-4" style={{ width: '500px' }}>
                        <div className="d-flex align-items-center mb-3 border-bottom pb-2">
                            <div className="text-muted me-3 fw-medium">1/3</div>
                            <div className="fw-semibold">New release</div>
                        </div>

                        <div className="modal-body px-1">
                            <p className="fw-semibold mb-3">What is the type of your new release?</p>
                            <div className="form-check mb-2">
                                <input className="form-check-input me-3" type="radio" name="releaseType" id="audio" defaultChecked />
                                <label className="form-check-label" htmlFor="audio">Audio Release</label>
                            </div>
                            <div className="form-check mb-2">
                                <input className="form-check-input me-3" type="radio" name="releaseType" id="video" />
                                <label className="form-check-label" htmlFor="video">Video Release</label>
                            </div>
                            <div className="form-check mb-4">
                                <input className="form-check-input me-3" type="radio" name="releaseType" id="ringtone" />
                                <label className="form-check-label" htmlFor="ringtone">Ringtone Release</label>
                            </div>
                        </div>

                        <div className="d-flex justify-content-end gap-3 px-1">
                            <button className="btn btn-light rounded-pill px-4" onClick={() => setShowModal(false)}>Cancel</button>
                            <button className="btn btn-success rounded-pill px-4">Next</button>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default SuparadminSidebar;
