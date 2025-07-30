'use client'

import React, { useState } from 'react';

const Page = () => {
    const [activeTab, setActiveTab] = useState('ALL');

    return (
        <>
            <div className='page-wrapper card container'>
                <div className=" mt-5">
                    <h3 className="mb-4 fw-bold">Playlists & Charts</h3>

                    <div className="d-flex flex-wrap align-items-center mb-3 platform-tabs gap-2">
                        <button className={`tab-btn ${activeTab === 'ALL' ? 'active' : ''}`} onClick={() => setActiveTab('ALL')}>
                            ALL
                        </button>
                        <button className={`tab-btn ${activeTab === 'SPOTIFY' ? 'active' : ''}`} onClick={() => setActiveTab('SPOTIFY')}>
                            <img src="/assets/img/illustrations/174872.png" alt="Spotify" height={20} className="me-1" />
                            SPOTIFY
                        </button>
                        <button className={`tab-btn ${activeTab === 'DEEZER' ? 'active' : ''}`} onClick={() => setActiveTab('DEEZER')}>
                            <img src="/assets/img/illustrations/deezar2-removebg-preview.png" alt="Deezer" height={20} className="me-1" />
                            DEEZER
                        </button>
                        <button className={`tab-btn ${activeTab === 'APPLE' ? 'active' : ''}`} onClick={() => setActiveTab('APPLE')}>
                            <img src="/assets/img/illustrations/apple2.png" alt="Apple Music" height={20} className="me-1" />
                            APPLE MUSIC
                        </button>
                        <button className={`tab-btn ${activeTab === 'YOUTUBE' ? 'active' : ''}`} onClick={() => setActiveTab('YOUTUBE')}>
                            <img src="/assets/img/illustrations/1384060.png" alt="YouTube" height={25} className="me-1" />
                            YOUTUBE
                        </button>
                    </div>


                    <div className="tab-content mt-4">
                        {activeTab === 'ALL' && (
                            <div className="empty-state text-center">
                                <img src="/assets/img/illustrations/no-data-removebg-preview.png" alt="No activity" />
                                <h4 className="mt-3">No playlisting activity found over the selected period</h4>
                                <p>Meanwhile, you can read more about how Believe can help you get playlisted.</p>
                            </div>
                        )}

                        {activeTab === 'SPOTIFY' && (
                            <div className="empty-state text-center">
                                <img src="/assets/img/illustrations/no-data-removebg-preview.png" alt="No activity" />
                                <h4 className="mt-3">No playlisting activity found over the selected period</h4>
                                <p>Meanwhile, you can read more about how Believe can help you get playlisted.</p>
                            </div>
                        )}

                        {activeTab === 'DEEZER' && (
                            <div className="empty-state text-center">
                                <img src="/assets/img/illustrations/no-data-removebg-preview.png" alt="No activity" />
                                <h4 className="mt-3">No playlisting activity found over the selected period</h4>
                                <p>Meanwhile, you can read more about how Believe can help you get playlisted.</p>
                            </div>
                        )}

                        {activeTab === 'APPLE' && (
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

                <div className='row'>
                    <div className='col-12 col-md-4 col-lg-4'>
                        <div className='adi-img'>
                            <img src="/assets/img/music/article1.jpg" alt="" />
                        </div>
                        <div className='adi-title'>
                            <h6>Learn More</h6>
                        </div>
                    </div>

                    <div className='col-12 col-md-4 col-lg-4'>
                        <div className='adi-img'>
                            <img src="/assets/img/music/article2.jpg" alt="" />
                        </div>
                        <div className='adi-title'>
                            <h6>Get playlisted</h6>
                        </div>
                    </div>

                    <div className='col-12 col-md-4 col-lg-4'>
                        <div className='adi-img'>
                            <img src="/assets/img/music/article3.jpg" alt="" />
                        </div>
                        <div className='adi-title'>
                            <h6>Read more</h6>
                        </div>
                    </div>

                </div>
            </div>

        </>
    );
};

export default Page;
