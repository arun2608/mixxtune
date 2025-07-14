"use client"

import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation';

const SuparadminSidebar = () => {
    const pathname = usePathname();

    const navItems = [
        { label: 'Dashboard', icon: 'dashboard', href: '/suparadmin', key: 1 },
        { label: 'Massage', icon: 'Chat', href: '#', key: 2 },
        { label: 'Media', icon: 'Folder', href: '/suparadmin/media', key: 3 },
        { label: 'Users', icon: 'account_circle', href: '/suparadmin/users', key: 4 },
        { label: 'Releases', icon: 'music_note', href: '/suparadmin/releases', key: 5 },
        { label: 'Statistics', icon: 'analytics', href: '#', key: 6 },
        { label: 'Artists', icon: 'artist', href: '/suparadmin/artists', key: 7 },
        { label: 'Label', icon: 'local_offer', href: '/suparadmin/label', key: 8 },
        { label: 'OAC Requests', icon: 'verified', href: '/suparadmin/oac-requests', key: 9 },
        { label: 'Claim Release Requests', icon: 'copyright', href: '/suparadmin/claim-requests', key: 10 },
        { label: 'Notifications', icon: 'Notifications', href: '#', key: 11 },
        { label: 'Support Ticket', icon: 'help_center', href: '#', key: 12 },
        { label: 'Withdrawal Requests', icon: 'atm', href: '#', key: 13 },
        { label: 'Subscriptions', icon: 'diamond', href: '#', key: 14 },
        { label: 'Subscriptions Settings', icon: 'manufacturing', href: '#', key: 15 },
        { label: 'plans', icon: 'tactic', href: '#', key: 16 },
        { label: 'SMTP', icon: 'mail', href: '#', key: 17 },
        { label: 'GDRP Compliance', icon: 'article', href: '#', key: 18 },
        { label: 'Log Out', icon: 'logout', href: '/suparadmin/admin/login', key: 19 },
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