"use client"

import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation';

const Sidebar = () => {
    const pathname = usePathname();

    const navItems = [
        { label: 'Dashboard', icon: 'dashboard', href: '/', key: 1 },
        { label: 'Label', icon: 'create_new_folder', href: '/label', key: 2 },
        { label: 'Artist', icon: 'artist', href: '/artists', key: 3 },
        { label: 'Audio Releases', icon: 'library_music', href: '/releases', key: 4 },
        { label: 'Video Songs', icon: 'video_library', href: '#', key: 5 },
        { label: 'Release Copyright Claim', icon: 'do_not_disturb_on', href: '#', key: 6 },
        { label: 'Analytics', icon: 'bar_chart', href: '#', key: 7 },
        { label: 'Bank Account', icon: 'account_balance', href: '#', key: 8 },
        { label: 'Payment Withdrawa', icon: 'wallet', href: '#', key: 9},
        { label: 'Payment Historys', icon: 'payments', href: '#', key: 10 },
        { label: 'Log Out', icon: 'logout', href: '/admin/login', key: 11 },
    ];
    return (
        <>

            <aside className="card sidenav navbar navbar-vertical navbar-expand-xs border-radius-lg fixed-start ms-2  my-2" id="sidenav-main">
                <div className="sidenav-header">
                    <i className="fas fa-times p-3 cursor-pointer opacity-5 position-absolute end-0 top-0 d-none d-xl-none text-white" aria-hidden="true" id="iconSidenav"></i>
                    <Link className="navbar-brand px-4 py-3 m-0" href="/">
                        <img src="/assets/img/logos/mixtune-img.webp" className="navbar-brand-img" width="26" height="26" alt="main_logo" />
                        <span className="ms-1 text-sm ">Mixx Tune</span>
                    </Link>
                </div>
                <hr className="horizontal dark mt-0 mb-2" />

                <div className="collapse navbar-collapse  w-auto " id="sidenav-collapse-main">
                    <ul className="navbar-nav">
                        {navItems.map(({ label, icon, href, key }) => (
                            <li className="nav-item" key={key}>
                                <Link
                                    href={href}
                                    className={`nav-link ${pathname === href ? 'active bg-gradient-dark text-white' : 'text-dark'}`}
                                >
                                    <i className="material-symbols-rounded opacity-5">{icon}</i>
                                    <span className="nav-link-text ms-1">{label}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="sidenav-footer position-absolute w-100 bottom-0 ">
                    <div className="mx-3">
                        <Link className="btn bg-gradient-green w-100 text-black" href="#" type="button">Upgrade to pro</Link>
                    </div>
                </div>
            </aside>
        </>
    )
}

export default Sidebar