import Link from 'next/link'
import React from 'react'


const Footer = () => {
    return (
        <>
            <footer className="footer py-4  ">
                <div className="container-fluid">
                    <div className="row align-items-center justify-content-lg-between">
                        <div className="col-lg-6 mb-lg-0 mb-4">
                            <div className="copyright text-center text-sm text-muted text-lg-start">
                                ©  designed and developed
                                <Link href="https://www.coderworldlabs.com/" className="font-weight-bold" target="_blank"> CWL </Link>
                                for a better web.
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <ul className="nav nav-footer justify-content-center justify-content-lg-end">
                                <li className="nav-item">
                                    <Link href="#" className="nav-link text-muted">Creative Tim</Link>
                                </li>
                                <li className="nav-item">
                                    <Link href="#" className="nav-link text-muted">About Us</Link>
                                </li>
                                <li className="nav-item">
                                    <Link href="#" className="nav-link text-muted">Blog</Link>
                                </li>
                                <li className="nav-item">
                                    <Link href="#" className="nav-link pe-0 text-muted">License</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer