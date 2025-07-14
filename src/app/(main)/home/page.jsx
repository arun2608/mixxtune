import React from 'react'
import Link from 'next/link'

const page = () => {
    return (
        <>

            <div className='page-wrapper container'>
                <div className='row'>
                    <div className='col-12 col-md-8 col-lg-8'>
                        <div className="uploader-card">
                            <div className="uploader-image">
                                {/* <img src="https://images.unsplash.com/photo-1612831661345-43f3b8e3c02b" alt="Uploader Graphic" /> */}
                            </div>
                            <div className="uploader-content">
                                <div className="uploader-title">Uploader</div>
                                <div className="uploader-subtitle">Create and manage releases</div>
                                <div className="uploader-buttons">
                                    <Link href="/releases/create">
                                        <button className="btn-black">Create</button>
                                    </Link>
                                    <Link href="/releases">
                                        <button className="btn-white">My Releases</button>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="card artists-section  p-3 rounded-3">
                            <div className="artists-title d-flex align-items-center ">
                                <i className="material-symbols-rounded opacity-5 mx-2">portrait</i>
                                <p className='fw-bold mb-0'>Artists</p>
                            </div>


                            <div className='d-flex gap-3'>
                                <Link href="/artists">
                                    <div className="add-artist">+</div>
                                </Link>

                                <div className="add-artist-1">
                                    <img src="/assets/img/illustrations/pexels-entero-32930806.jpg" alt="" />
                                </div>

                            </div>
                        </div>

                        <div className='card p-3 rounded-3 mt-4'>
                            <div className="artists-title d-flex  align-items-center">
                                <i className="material-symbols-rounded opacity-5 mx-2">Schedule</i>
                                <p className='fw-bold mb-0'>Pending</p>
                            </div>
                            <div className='side-card bg-gray-200 rounded-3 text-center text-black p-3 mt-3'>
                                Nothing Pending.
                            </div>
                        </div>
                    </div>

                    <div className='col-12 col-md-4 col-lg-4 card rounded-3 p-3'>
                        <div className=' side-headingn rounded-3 px-4'>
                            <div className='d-flex  align-items-center gap-2'>
                                <i className="material-symbols-rounded opacity-5">notifications</i>
                                <p className='fw-bold mb-0'>notifications</p>
                            </div>
                            <div className='side-card bg-gray-200 rounded-3 text-center text-black p-3 mt-4'>
                                No Notification yet.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default page