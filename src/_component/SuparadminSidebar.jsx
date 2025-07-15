"use client"

import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation';

const SuparadminSidebar = () => {
    const pathname = usePathname();

    const navItems = [
        { label: 'Dashboard', icon: 'dashboard', href: '/suparadmin', key: 1 },
        { label: 'Admins', icon: 'admin_panel_settings', href: '#', key: 2 },
        { label: 'Customers', icon: 'group', href: '#', key: 3 },
        { label: 'Audio Songs', icon: 'music_note', href: '#', key: 4 },
        { label: 'Video Songs', icon: 'video_library', href: '#', key: 5 },
        { label: 'Release Copyright Claim', icon: 'do_not_disturb_on', href: '#', key: 6 },
        { label: 'Settings', icon: 'settings', href: '#', key: 7 },
        { label: 'Label', icon: 'folder_open', href: '#', key: 8 },
        { label: 'Analytics', icon: 'bar_chart', href: '#', key: 9 },
        { label: 'Bank Account', icon: 'account_balance', href: '#', key: 10 },
        { label: 'Wallet Transactions', icon: 'wallet', href: '#', key: 11 },
        { label: 'Withdrawal Requests', icon: 'atm', href: '#', key: 12 },
        { label: 'Announcements', icon: 'Notifications', href: '#', key: 13 },
        { label: 'Audio Releases', icon: 'queue_music', href: '#', key: 14 },
        { label: 'Log Out', icon: 'logout', href: '#', key: 15 },
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
                        <Link className="btn bg-gradient-green w-100 text-black" href="#" type="button">Settings</Link>
                    </div>
                </div>
            </aside>

        </>
    )
}

export default SuparadminSidebar