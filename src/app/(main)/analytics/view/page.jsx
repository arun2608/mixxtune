"use client"

import Link from 'next/link'
import React from 'react'

const page = () => {
    return (
        <>

            <div className='card container p-4'>

                <div className="top-bar mb-3">
                    <div>
                        <h5 className="mb-0">Views</h5>
                        <small className="text-muted">Monitor your YouTube videos and channels performances.</small>
                    </div>
                </div>

                <div className="channel-card">
                    <img src="/assets/img/logos/mixtune-img.webp" alt="channel" />
                    <div>
                        <span className="badge bg-secondary text-xxs">Channel</span>
                        <h6 className="mb-0">MixxTune Records</h6>
                    </div>
                </div>

                <div className="row">
                    <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4">
                        <div className="card">
                            <div className="card-header p-2 ps-3">
                                <div className="d-flex justify-content-between">
                                    <div>
                                        <h4 className="mb-0">53k</h4>
                                        <p className="text-sm mb-0 text-capitalize">Views</p>
                                    </div>
                                </div>
                            </div>
                            <hr className="dark horizontal my-0" />
                            <div className="card-footer p-2 ps-3">
                                <p className="mb-0 text-sm"><span className="text-success font-weight-bolder">+55% </span>than last week</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4">
                        <div className="card">
                            <div className="card-header p-2 ps-3">
                                <div className="d-flex justify-content-between">
                                    <div>
                                        <h4 className="mb-0">2300</h4>
                                        <p className="text-sm mb-0 text-capitalize">Gained subscribers</p>
                                    </div>
                                </div>
                            </div>
                            <hr className="dark horizontal my-0" />
                            <div className="card-footer p-2 ps-3">
                                <p className="mb-0 text-sm"><span className="text-success font-weight-bolder">+3% </span>than last month</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4">
                        <div className="card">
                            <div className="card-header p-2 ps-3">
                                <div className="d-flex justify-content-between">
                                    <div>
                                        <h4 className="mb-0">3,462</h4>
                                        <p className="text-sm mb-0 text-capitalize">Watch time (hours)</p>
                                    </div>
                                </div>
                            </div>
                            <hr className="dark horizontal my-0" />
                            <div className="card-footer p-2 ps-3">
                                <p className="mb-0 text-sm"><span className="text-danger font-weight-bolder">-2% </span>than yesterday</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-3 col-sm-6">
                        <div className="card">
                            <div className="card-header p-2 ps-3">
                                <div className="d-flex justify-content-between">
                                    <div>
                                        <h4 className="mb-0">10</h4>
                                        <p className="text-sm mb-0 text-capitalize">Long video uploads</p>
                                    </div>
                                </div>
                            </div>
                            <hr className="dark horizontal my-0" />
                            <div className="card-footer p-2 ps-3">
                                <p className="mb-0 text-sm"><span className="text-success font-weight-bolder">+5% </span>than yesterday</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="territories mt-4">
                    <span><img src="https://flagcdn.com/in.svg" width="20" /> India (97%)</span>
                    <span><img src="https://flagcdn.com/us.svg" width="20" /> United States (1%)</span>
                    <span><img src="https://flagcdn.com/ca.svg" width="20" /> Canada (0%)</span>
                </div>


                <div className="tabs mt-4">
                    <button className="tab-btn active">All</button>
                    <button className="tab-btn">Long Videos</button>
                    <button className="tab-btn">Short Videos</button>
                </div>


                <div className="row mt-4">
                    <div className="col-12">
                        <div className="card my-4">
                            <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                                <div className="bg-gradient-dark shadow-dark border-radius-lg pt-4 pb-3">
                                    <h6 className="text-white text-capitalize text-sm ps-3">sort by period growth</h6>
                                </div>
                            </div>
                            <div className="card-body px-0 pb-2">
                                <div className="table-responsive p-0">
                                    <table className="table align-items-center mb-0">
                                        <thead>
                                            <tr>
                                                <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Video</th>
                                                <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Publication <br /> Date</th>
                                                <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Views</th>
                                                <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Engagement</th>
                                                <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">watch time <br /> (hours)</th>
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
                                                    <span class="badge badge-sm bg-gradient-success text-xxs">
                                                        +47k</span>
                                                    <p className="text-xs mb-0 mt-2">4.5M all time</p>
                                                </td>


                                                <td>
                                                    <span class="badge badge-sm bg-gradient-success text-xxs">High</span>
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
                                                    <span class="badge badge-sm bg-gradient-success text-xxs">
                                                        +47k</span>
                                                    <p className="text-xs mb-0 mt-2">4.5M all time</p>
                                                </td>


                                                <td>
                                                    <span class="badge badge-sm bg-gradient-success text-xxs">High</span>
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
                                                    <span class="badge badge-sm bg-gradient-success text-xxs">
                                                        +47k</span>
                                                    <p className="text-xs mb-0 mt-2">4.5M all time</p>
                                                </td>


                                                <td>
                                                    <span class="badge badge-sm bg-gradient-success text-xxs">High</span>
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
            </div>

        </>
    )
}

export default page