"use client";

import Link from 'next/link';
import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/navigation';

const Sidebar = () => {

    const pathname = usePathname();
    const [showModal, setShowModal] = useState(false);
    const [modalStep, setModalStep] = useState(0);
    const [releaseType, setReleaseType] = useState('audio');
    const [releaseGenre, setReleaseGenre] = useState('any');
    const [catalogOpen, setCatalogOpen] = useState(false);
    const [analyticsOpen, setAnalyticsOpen] = useState(false);
    const [financeDropdownOpen, setFinanceDropdownOpen] = useState(false);
    const [legalDropdownOpen, setLegalDropdownOpen] = useState(false);

    const router = useRouter();

    return (
        <>
            <aside className="card sidenav navbar navbar-vertical navbar-expand-xs border-radius-lg fixed-start ms-2 my-2" id="sidenav-main">
                <div className="sidenav-header">
                    <i className="fas fa-times p-3 cursor-pointer opacity-5 position-absolute end-0 top-0 d-none d-xl-none text-white" />
                    <Link className="navbar-brand px-4 py-3 m-0" href="/">
                        <img src="/assets/img/logos/mixtune-img.webp" className="navbar-brand-img" width="26" height="26" alt="main_logo" />
                        <span className="ms-1 text-sm">Mixx Tune</span>
                    </Link>
                </div>

                <hr className="horizontal dark mt-0 mb-2" />

                <div className="sidenav-footer position-relative w-100 bottom-0">
                    <div className="mx-3">
                        <button
                            className="btn bg-gradient-primary w-100 text-black"
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
                            <Link href="/" className={`nav-link ${pathname === '/' ? 'active bg-gradient-dark text-white' : 'text-dark'}`}>
                                <i className="material-symbols-rounded opacity-5">dashboard</i>
                                <span className="nav-link-text ms-1">Dashboard</span>
                            </Link>
                        </li>

                        <li className="nav-item">
                            <div
                                className="nav-link d-flex align-items-center justify-content-between cursor-pointer"
                                onClick={() => setCatalogOpen(!catalogOpen)}
                            >
                                <Link href="#" className='d-flex align-items-center  justify-content-center'>
                                    <i className="material-symbols-rounded opacity-5">library_music</i>
                                    <span className="nav-link-text ms-1">Catalog</span>
                                </Link>
                                <i className="material-symbols-rounded">{catalogOpen ? "expand_less" : "expand_more"}</i>
                            </div>
                        </li>

                        {catalogOpen && (

                            <ul className="navbar-nav ps-4">
                                <li className="nav-item">
                                    <Link href="/catalog/releases" className={`nav-link text-dark ${pathname === '/catalog/releases' ? 'active bg-gradient-dark text-white' : ''}`}>
                                        <span className="nav-link-text ms-1">All Releases</span>
                                    </Link>
                                </li>

                                <li className="nav-item">
                                    <Link href="/catalog/draft" className={`nav-link text-dark ${pathname === '/catalog/draft' ? 'active bg-gradient-dark text-white' : ''}`}>
                                        <span className="nav-link-text ms-1">Draft</span>
                                    </Link>
                                </li>

                                <li className="nav-item">
                                    <Link href="/catalog/canceletion-request" className={`nav-link text-dark ${pathname === '/catalog/canceletion-request' ? 'active bg-gradient-dark text-white' : ''}`}>
                                        <span className="nav-link-text ms-1">Cancelation Request</span>
                                    </Link>
                                </li>
                            </ul>
                        )}

                        {/* <li className="nav-item">
                            <Link href="#" className="nav-link text-dark">
                                <i className="material-symbols-rounded opacity-5">do_not_disturb_on</i>
                                <span className="nav-link-text ms-1">Release Copyright Claim</span>
                            </Link>
                        </li> */}

                        <li className="nav-item">
                            <div
                                className="nav-link d-flex align-items-center justify-content-between cursor-pointer"
                                onClick={() => setAnalyticsOpen(!analyticsOpen)}
                            >
                                <Link href="#" className='d-flex align-items-center  justify-content-center'>
                                    <i className="material-symbols-rounded opacity-5">bar_chart</i>
                                    <span className="nav-link-text ms-1">Analytics</span>
                                </Link>
                                <i className="material-symbols-rounded">{analyticsOpen ? "expand_less" : "expand_more"}</i>
                            </div>
                        </li>

                        {analyticsOpen && (
                            <ul className="navbar-nav ps-4">
                                <li className="nav-item">
                                    <Link href="/analytics/daily-trend" className={`nav-link text-dark ${pathname === '/analytics/daily-trend' ? 'active bg-gradient-dark text-white' : ''}`}>

                                        <span className="nav-link-text ms-1">Daily Trend</span>
                                    </Link>
                                </li>

                                <li className="nav-item">
                                    <Link href="/analytics/playlist-chart" className={`nav-link text-dark ${pathname === '/analytics/playlist-chart' ? 'active bg-gradient-dark text-white' : ''}`}>
                                        <span className="nav-link-text ms-1">Playlists and Charts</span>
                                    </Link>
                                </li>

                                <li className="nav-item">
                                    <Link href="/analytics/view" className={`nav-link text-dark ${pathname === '/analytics/view' ? 'active bg-gradient-dark text-white' : ''}`}>
                                        <span className="nav-link-text ms-1">Views</span>
                                    </Link>
                                </li>

                                 <li className="nav-item">
                                    <Link href="/analytics/short-video" className={`nav-link text-dark ${pathname === '/analytics/short-video' ? 'active bg-gradient-dark text-white' : ''}`}>
                                        <span className="nav-link-text ms-1">Short From Video</span>
                                    </Link>
                                </li>
                            </ul>
                        )}

                        <li className="nav-item">
                            <div
                                className="nav-link d-flex align-items-center justify-content-between cursor-pointer"
                                onClick={() => setFinanceDropdownOpen(!financeDropdownOpen)}
                            >
                                <Link href="#" className='d-flex align-items-center  justify-content-center'>
                                    <i className="material-symbols-rounded opacity-5">account_balance_wallet</i>
                                    <span className="nav-link-text ms-1">Finance</span>
                                </Link>
                                <i className="material-symbols-rounded">{financeDropdownOpen ? "expand_less" : "expand_more"}</i>
                            </div>
                        </li>

                        {financeDropdownOpen && (
                            <ul className="navbar-nav ps-4">

                                <li className="nav-item">
                                    <Link href="/finance/payment-opration" className={`nav-link text-dark ${pathname === '/finance/payment-opration' ? 'active bg-gradient-dark text-white' : ''}`}>
                                        <span className="nav-link-text ms-1">Payment & opration</span>
                                    </Link>
                                </li>


                                <li className="nav-item">
                                    <Link href="/finance/finance-reports" className={`nav-link text-dark ${pathname === '/finance/finance-reports' ? 'active bg-gradient-dark text-white' : ''}`}>
                                        <span className="nav-link-text ms-1">Finance Reports</span>
                                    </Link>
                                </li>

                                <li className="nav-item">
                                    <Link href="/finance/finacial-analytics" className={`nav-link text-dark ${pathname === '/finance/finacial-analytics' ? 'active bg-gradient-dark text-white' : ''}`}>
                                        <span className="nav-link-text ms-1">Finacial analytics</span>
                                    </Link>
                                </li>
                                {/* <li className="nav-item">
                                    <Link href="/finance/payment-history" className={`nav-link text-dark ${pathname === '/finance/payment-history' ? 'active bg-gradient-dark text-white' : ''}`}>
                                        <span className="nav-link-text ms-1">Payment & opration</span>
                                    </Link>
                                </li> */}
                            </ul>
                        )}

                        <li className="nav-item">
                            <div
                                className="nav-link d-flex align-items-center justify-content-between cursor-pointer"
                                onClick={() => setLegalDropdownOpen(!legalDropdownOpen)}
                            >
                                <Link href="#" className='d-flex align-items-center  justify-content-center'>
                                    <i className="material-symbols-rounded opacity-5">vpn_lock</i>
                                    <span className="nav-link-text ms-1">Legal</span>
                                </Link>
                                <i className="material-symbols-rounded">{legalDropdownOpen ? "expand_less" : "expand_more"}</i>
                            </div>
                        </li>

                        {legalDropdownOpen && (
                            <ul className="navbar-nav ps-4">
                                <li className="nav-item">
                                    <Link href="/legal/rights-manager" className={`nav-link text-dark ${pathname === '/legal/rights-manager' ? 'active bg-gradient-dark text-white' : ''}`}>
                                        <span className="nav-link-text ms-1">Rights Manager</span>
                                    </Link>
                                </li>
                            </ul>
                        )
                        }



                        <li className="nav-item">
                            <Link href="/admin/login" className="nav-link text-dark">
                                <i className="material-symbols-rounded opacity-5">logout</i>
                                <span className="nav-link-text ms-1">Log Out</span>
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className="sidenav-footer position-absolute w-100 bottom-0">
                    <div className="mx-3">
                        <Link className="btn bg-gradient-primary w-100 text-black" href="#">
                            Upgrade to pro
                        </Link>
                    </div>
                </div>
            </aside>

            {showModal && (
                <div className="popup-model-card position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center">
                    <div className="card rounded-4 shadow p-4" style={{ width: '500px' }}>
                        <div className="d-flex align-items-center mb-3 border-bottom pb-2">
                            <div className="text-muted me-3 fw-medium">{modalStep + 1}/3</div>
                            <div className="fw-semibold">New release</div>
                        </div>

                        <div className="modal-body px-1">
                            {modalStep === 0 && (
                                <>
                                    <p className="fw-semibold mb-3">What is the type of your new release?</p>
                                    <div className="form-check mb-2">
                                        <input className="form-check-input me-3" type="radio" name="releaseType" id="audio" value="audio" checked={releaseType === 'audio'} onChange={(e) => setReleaseType(e.target.value)} />
                                        <label className="form-check-label" htmlFor="audio">Audio Release</label>
                                    </div>
                                    <div className="form-check mb-2">
                                        <input className="form-check-input me-3" type="radio" name="releaseType" id="video" value="video" checked={releaseType === 'video'} onChange={(e) => setReleaseType(e.target.value)} />
                                        <label className="form-check-label" htmlFor="video">Video Release</label>
                                    </div>
                                    <div className="form-check mb-4">
                                        <input className="form-check-input me-3" type="radio" name="releaseType" id="ringtone" value="ringtone" checked={releaseType === 'ringtone'} onChange={(e) => setReleaseType(e.target.value)} />
                                        <label className="form-check-label" htmlFor="ringtone">Ringtone Release</label>
                                    </div>
                                </>
                            )}

                            {modalStep === 1 && (
                                <>
                                    <p className="fw-semibold mb-1">What is the genre of your new audio release?</p>
                                    <p className="text-muted small mb-4">Releases of Western Classical or Jazz genre require different information</p>

                                    <div className="form-check mb-2">
                                        <input
                                            className="form-check-input me-3"
                                            type="radio"
                                            name="genre"
                                            id="anyGenre"
                                            value="any"
                                            checked={releaseGenre === 'any'}
                                            onChange={(e) => setReleaseGenre(e.target.value)}
                                        />
                                        <label className="form-check-label" htmlFor="anyGenre">Any genre</label>
                                    </div>

                                    <div className="form-check mb-2">
                                        <input
                                            className="form-check-input me-3"
                                            type="radio"
                                            name="genre"
                                            id="classical"
                                            value="western_classical"
                                            checked={releaseGenre === 'western_classical'}
                                            onChange={(e) => setReleaseGenre(e.target.value)}
                                        />
                                        <label className="form-check-label" htmlFor="classical">Western classical</label>
                                    </div>

                                    <div className="form-check mb-4">
                                        <input
                                            className="form-check-input me-3"
                                            type="radio"
                                            name="genre"
                                            id="jazz"
                                            value="jazz"
                                            checked={releaseGenre === 'jazz'}
                                            onChange={(e) => setReleaseGenre(e.target.value)}
                                        />
                                        <label className="form-check-label" htmlFor="jazz">Jazz</label>
                                    </div>
                                </>
                            )}


                            {modalStep === 2 && (
                                <>
                                    <p className="fw-semibold mb-3">Give your release a title</p>
                                    <input type="text" className="form-control" placeholder="Release Title" />
                                </>
                            )}
                        </div>

                        {/* Modal Footer */}
                        <div className="d-flex justify-content-between px-1">
                            <button
                                className="btn btn-light rounded-pill px-4"
                                onClick={() => {
                                    if (modalStep === 0) {
                                        setShowModal(false);
                                    } else {
                                        setModalStep(modalStep - 1);
                                    }
                                }}
                            >
                                {modalStep === 0 ? 'Cancel' : 'Back'}
                            </button>
                            {modalStep < 2 ? (
                                <button className="btn btn-primary rounded-pill px-4" onClick={() => setModalStep(modalStep + 1)}>Next</button>
                            ) : (
                                <button className="btn btn-primary rounded-pill px-4" onClick={() => {
                                    setShowModal(false);
                                    router.push('/catalog/releases/create');
                                }}>Create</button>
                            )}
                        </div>
                    </div>
                </div >
            )}

        </>
    );
};

export default Sidebar;
