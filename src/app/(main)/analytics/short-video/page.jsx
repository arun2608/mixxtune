'use client'

import React, { useState } from 'react';
import Link from 'next/link';

const Page = () => {
    const [activeTab, setActiveTab] = useState('ALL');

    return (
        <>
            <div className='page-wrapper card container'>
                <div className=" mt-5">
                    <h3 className="fw-bold">Short-form videos</h3>
                    <p className='mb-4'>Discover and understand trends using your music.</p>

                    <div className="d-flex flex-wrap align-items-center mb-3 platform-tabs gap-2">
                        <button className={`tab-btn align-items-center ${activeTab === 'ALL' ? 'active' : ''}`} onClick={() => setActiveTab('ALL')}>
                            ALL
                        </button>
                        <button className={`tab-btn align-items-center ${activeTab === 'tik tok' ? 'active' : ''}`} onClick={() => setActiveTab('tik tok')}>
                            <img src="/assets/img/logos/001-removebg-preview.png" alt="tik tok" height={20} className="me-1" />
                            TIK TOK
                        </button>
                        <button className={`tab-btn align-items-center ${activeTab === 'instagram' ? 'active' : ''}`} onClick={() => setActiveTab('instagram')}>
                            <img src="/assets/img/logos/002-removebg-preview.png" alt="instagram" height={22} className="me-1" />
                            INSTAGRAM
                        </button>
                        <button className={`tab-btn align-items-center ${activeTab === 'facebook' ? 'active' : ''}`} onClick={() => setActiveTab('facebook')}>
                            <img src="/assets/img/logos/003-removebg-preview.png" alt="facebook" height={20} className="me-1" />
                            FACEBOOK
                        </button>
                        <button className={`tab-btn align-items-center ${activeTab === 'YOUTUBE' ? 'active' : ''}`} onClick={() => setActiveTab('YOUTUBE')}>
                            <img src="/assets/img/logos/04-removebg-preview.png" alt="YouTube shorts" height={20} className="me-1" />
                            YOUTUBE SHORT
                        </button>
                    </div>


                    <div className="tab-content mt-4">
                        {activeTab === 'ALL' && (
                            <>

                                <div className='row'>
                                    <div className='col-12 col-md-8 col-lg-8'>
                                        <div className='card short-video-card d-flex flex-row justify-content-start align-items-center p-3'>
                                            <div className='card-image me-4'>
                                                <img src="/assets/img/logos/00004.jpg" className='rounded-2' alt="" width={100} />
                                            </div>

                                            <div className='card-content'>
                                                <h5>Om Sham Shanicharaya Namah was viewed 0 times </h5>
                                                <h7 className='text-muted fw-bold'>This track by Kapil Koli is your most popular track.</h7>
                                                <Link href="#" >
                                                    <p className='align-items-center mb-0'>Get a detailed insight on its performance</p>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='col-12 col-md-4 col-lg-4'>
                                        <div className='card short-video-card p-3' style={{ backgroundImage: 'url(/assets/img/vr-bg.jpg)', backgroundPosition: 'center', objectFit: 'cover' }}>
                                            <div className='card-content'>

                                                <p className='d-flex justify-content-start align-items-center'> <i className='material-symbols-rounded me-3'>auto_stories</i>
                                                    Resources
                                                </p>

                                                <p className='fw-bold text-lg mb-0'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod, necessitatibus.</p>

                                            </div>
                                        </div>
                                    </div>
                                </div>


                                <div className='row mt-4'>
                                    <div className='col-12 col-md-4 col-lg-4'>
                                        <div className='card d-flex flex-row p-3'>

                                            <div className='coustom-border rounded me-5 p-3'>
                                                <div className='card-img d-flex gap-3'>
                                                    <img src="/assets/img/logos/001-removebg-preview.png" alt="" height={25} />
                                                    <img src="/assets/img/logos/002-removebg-preview.png" alt="" height={30} />
                                                </div>
                                                <div className='card-img d-flex gap-3 mt-3'>
                                                    <img src="/assets/img/logos/003-removebg-preview.png" alt="" height={25} />
                                                    <img src="/assets/img/logos/04-removebg-preview.png" alt="" height={25} />
                                                </div>
                                            </div>

                                            <div className='card-content'>
                                                <h4>0</h4>
                                                <h5>Creations</h5>
                                            </div>

                                        </div>
                                    </div>

                                    <div className='col-12 col-md-4 col-lg-4'>
                                        <div className='card d-flex flex-row p-3'>

                                            <div className='coustom-border rounded me-5 p-3'>
                                                <div className='card-img d-flex gap-3'>
                                                    <img src="/assets/img/logos/001-removebg-preview.png" alt="" height={25} />
                                                    <img src="/assets/img/logos/002-removebg-preview.png" alt="" height={30} />
                                                </div>
                                                <div className='card-img d-flex gap-3 mt-3'>
                                                    <img src="/assets/img/logos/003-removebg-preview.png" alt="" height={25} />
                                                    <img src="/assets/img/logos/04-removebg-preview.png" alt="" height={25} />
                                                </div>
                                            </div>

                                            <div className='card-content'>
                                                <h4>0</h4>
                                                <h5>Views</h5>
                                            </div>

                                        </div>
                                    </div>

                                    <div className='col-12 col-md-4 col-lg-4'>
                                        <div className='card d-flex flex-row p-3'>

                                            <div className='coustom-border rounded me-5 p-3'>
                                                <div className='card-img d-flex gap-3'>
                                                    <img src="/assets/img/logos/001-removebg-preview.png" alt="" height={25} />
                                                    <img src="/assets/img/logos/002-removebg-preview.png" alt="" height={30} />
                                                </div>
                                                <div className='card-img d-flex gap-3 mt-3'>
                                                    <img src="/assets/img/logos/003-removebg-preview.png" alt="" height={25} />
                                                    <img src="/assets/img/logos/04-removebg-preview.png" alt="" height={25} />
                                                </div>
                                            </div>

                                            <div className='card-content'>
                                                <h4>0</h4>
                                                <h5>Audio streams</h5>
                                            </div>

                                        </div>
                                    </div>


                                </div>


                                <div className="row mt-4">
                                    <div className="col-12">
                                        <div className="card my-4">
                                            <div className="card-body px-0 pb-2">
                                                <div className="table-responsive p-0">
                                                    <table className="table align-items-center mb-0">
                                                        <thead>
                                                            <tr>
                                                                <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Track</th>
                                                                <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Last release<br /> Date</th>
                                                                <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Creation</th>
                                                                <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Views</th>
                                                                <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Audio<br /> stream</th>
                                                                <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Territories</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td>
                                                                    <div className="d-flex align-items-center gap-2">
                                                                        <img src="/assets/img/team-2.jpg" className="avatar avatar-sm border-radius-lg" alt="album" />
                                                                        <div className="d-flex flex-column">
                                                                            <Link href="#">
                                                                                <p className="mb-0 text-xxs">Raat ke Sikaari (official Video) Masoom Sharama</p>
                                                                            </Link>
                                                                            <p className="text-xxs text-secondary mb-0">MixxTune Record</p>
                                                                        </div>
                                                                    </div>
                                                                </td>

                                                                <td>
                                                                    <p className="text-xxs mb-0">Nov 28, 2024</p>
                                                                </td>

                                                                <td>
                                                                    <p className="text-xs mb-0 mt-2">0</p>
                                                                </td>

                                                                <td>
                                                                    <p className="text-xs mb-0 mt-2">20</p>
                                                                </td>

                                                                <td>
                                                                    <p className="text-xs mb-0">578</p>
                                                                </td>

                                                                <td>
                                                                    <div className="d-flex align-items-center gap-2">
                                                                        <img src="https://flagcdn.com/in.svg" width="20" className="avatar avatar-sm border-radius-lg" alt="album" />
                                                                        <img src="https://flagcdn.com/us.svg" width="20" className="avatar avatar-sm border-radius-lg" alt="album" />
                                                                        <img src="https://flagcdn.com/ca.svg" width="20" className="avatar avatar-sm border-radius-lg" alt="album" />
                                                                    </div>
                                                                </td>

                                                            </tr>

                                                            <tr>
                                                                <td>
                                                                    <div className="d-flex align-items-center gap-2">
                                                                        <img src="/assets/img/team-2.jpg" className="avatar avatar-sm border-radius-lg" alt="album" />
                                                                        <div className="d-flex flex-column">
                                                                            <Link href="#">
                                                                                <p className="mb-0 text-xxs">Raat ke Sikaari (official Video) Masoom Sharama</p>
                                                                            </Link>
                                                                            <p className="text-xxs text-secondary mb-0">MixxTune Record</p>
                                                                        </div>
                                                                    </div>
                                                                </td>

                                                                <td>
                                                                    <p className="text-xxs mb-0">Nov 28, 2024</p>
                                                                </td>

                                                                <td>
                                                                    <p className="text-xs mb-0 mt-2">0</p>
                                                                </td>

                                                                <td>
                                                                    <p className="text-xs mb-0 mt-2">20</p>
                                                                </td>

                                                                <td>
                                                                    <p className="text-xs mb-0">578</p>
                                                                </td>

                                                                <td>
                                                                    <div className="d-flex align-items-center gap-2">
                                                                        <img src="https://flagcdn.com/in.svg" width="20" className="avatar avatar-sm border-radius-lg" alt="album" />
                                                                        <img src="https://flagcdn.com/us.svg" width="20" className="avatar avatar-sm border-radius-lg" alt="album" />
                                                                        <img src="https://flagcdn.com/ca.svg" width="20" className="avatar avatar-sm border-radius-lg" alt="album" />
                                                                    </div>
                                                                </td>

                                                            </tr>

                                                            <tr>
                                                                <td>
                                                                    <div className="d-flex align-items-center gap-2">
                                                                        <img src="/assets/img/team-2.jpg" className="avatar avatar-sm border-radius-lg" alt="album" />
                                                                        <div className="d-flex flex-column">
                                                                            <Link href="#">
                                                                                <p className="mb-0 text-xxs ">Raat ke Sikaari (official Video) Masoom Sharama</p>
                                                                            </Link>
                                                                            <p className="text-xxs text-secondary mb-0">MixxTune Record</p>
                                                                        </div>
                                                                    </div>
                                                                </td>

                                                                <td>
                                                                    <p className="text-xxs mb-0">Nov 28, 2024</p>
                                                                </td>

                                                                <td>
                                                                    <p className="text-xs mb-0 mt-2">0</p>
                                                                </td>

                                                                <td>
                                                                    <p className="text-xs mb-0 mt-2">20</p>
                                                                </td>

                                                                <td>
                                                                    <p className="text-xs mb-0">578</p>
                                                                </td>

                                                                <td>
                                                                    <div className="d-flex align-items-center gap-2">
                                                                        <img src="https://flagcdn.com/in.svg" width="20" className="avatar avatar-sm border-radius-lg" alt="album" />
                                                                        <img src="https://flagcdn.com/us.svg" width="20" className="avatar avatar-sm border-radius-lg" alt="album" />
                                                                        <img src="https://flagcdn.com/ca.svg" width="20" className="avatar avatar-sm border-radius-lg" alt="album" />
                                                                    </div>
                                                                </td>

                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </>

                        )}

                        {activeTab === 'tik tok' && (
                            <div className="empty-state text-center">
                                <img src="/assets/img/illustrations/no-data-removebg-preview.png" alt="No activity" />
                                <h4 className="mt-3">No playlisting activity found over the selected period</h4>
                                <p>Meanwhile, you can read more about how Believe can help you get playlisted.</p>
                            </div>
                        )}

                        {activeTab === 'instagram' && (
                            <div className="empty-state text-center">
                                <img src="/assets/img/illustrations/no-data-removebg-preview.png" alt="No activity" />
                                <h4 className="mt-3">No playlisting activity found over the selected period</h4>
                                <p>Meanwhile, you can read more about how Believe can help you get playlisted.</p>
                            </div>
                        )}

                        {activeTab === 'facebook' && (
                            <div className="empty-state text-center">
                                <img src="/assets/img/illustrations/no-data-removebg-preview.png" alt="No activity" />
                                <h4 className="mt-3">No playlisting activity found over the selected period</h4>
                                <p>Meanwhile, you can read more about how Believe can help you get playlisted.</p>
                            </div>
                        )}

                        {activeTab === 'YOUTUBE' && (
                            <div className="empty-state text-center">
                                <img src="/assets/img/illustrations/no-data-removebg-preview.png" alt="No activity" />
                                <h4 className="mt-3">No playlisting activity found over the selected period</h4>
                                <p>Meanwhile, you can read more about how Believe can help you get playlisted.</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>

        </>
    );
};

export default Page;
