"use client";
import React, { useState } from 'react';
import Link from 'next/link'

const page = () => {
    const [activeTab, setActiveTab] = useState("All");

    return (
        <>
            <div className='page-wrapper container'>
                <div className='row'>
                    <div className='col-12'>
                        <div className='card p-3 rounded-3'>
                            <div className='d-flex justify-content-between'>
                                <div className="pe-md-3 mb-3 align-items-center">
                                    <div className="input-group input-group-outline">
                                        <label className="form-label">Search here...</label>
                                        <input type="text" className="form-control" />
                                    </div>
                                </div>
                                {/* <div>
                                    <Link className="btn bg-gradient-green text-black w-100" href="#" type="button">
                                        Create
                                    </Link>
                                </div> */}
                            </div>

                            <div className="row">
                                <div className="col-12">
                                    <div className="card my-4">
                                        <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                                            <div className="bg-gradient-dark shadow-dark border-radius-lg pt-4 pb-3">
                                                <h6 className="text-white text-capitalize ps-3">All Releases</h6>
                                            </div>
                                        </div>
                                        <div className="card-body px-0 pb-2">
                                            <div className="table-responsive p-0">
                                                <table className="table align-items-center mb-0">
                                                    <thead>
                                                        <tr>
                                                            <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Type</th>
                                                            <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Status</th>
                                                            <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Title / Artist</th>
                                                            <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Label</th>
                                                            <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Release date/<br /> Hour / Time zone</th>
                                                            <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">No. of track</th>
                                                            <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">UPC / Catalog Number</th>
                                                            <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Promotion</th>
                                                            <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Delivered  <br />Territories<br /> & Stores</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td><i className="material-symbols-rounded">album</i></td>
                                                            <td><i className="material-symbols-rounded opacity-5">block</i></td>
                                                            <td>
                                                                <div className="d-flex align-items-center gap-2">
                                                                    <img src="/assets/img/team-2.jpg" className="avatar avatar-sm border-radius-lg" alt="album" />
                                                                    <div className="d-flex flex-column">
                                                                        <Link href="#">
                                                                            <p className="mb-0 text-xxs text-danger">Sankatmochan <br /> Hanumanstaka</p>
                                                                        </Link>
                                                                        <p className="text-xxs text-secondary mb-0">By Kapil Koli</p>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td><p className="text-xxs mb-0">Sanatan <br /> Records</p></td>
                                                            <td><p className="text-xxs mb-0">05/29/2024</p></td>
                                                            <td><p className="text-xxs mb-0">1 Track</p></td>
                                                            <td><p className="text-xxs mb-0">UPC: 3617388727688<br /><span className="text-secondary text-xxs">Cat#: empty</span></p></td>
                                                            <td><Link href="#" className="text-info text-xxs">Promote</Link></td>
                                                            <td>
                                                                <p className="text-xxs mb-0 border p-1 align-items-center d-flex justify-content-center">
                                                                    <i className="material-symbols-rounded text-xxs me-4">globe</i>
                                                                    240 terrs.
                                                                </p>
                                                                <p className="text-xxs mb-0 border p-1 mt-1 align-items-center d-flex justify-content-center">
                                                                    <i className="material-symbols-rounded text-xxs me-4">apps</i>
                                                                    0 stores
                                                                </p>
                                                            </td>
                                                        </tr>

                                                        <tr>
                                                            <td><i className="material-symbols-rounded">album</i></td>
                                                            <td><i className="material-symbols-rounded opacity-5">block</i></td>
                                                            <td>
                                                                <div className="d-flex align-items-center gap-2">
                                                                    <img src="/assets/img/team-2.jpg" className="avatar avatar-sm border-radius-lg" alt="album" />
                                                                    <div className="d-flex flex-column">
                                                                        <Link href="#">
                                                                            <p className="mb-0 text-xxs">Sankatmochan <br /> Hanumanstaka</p>
                                                                        </Link>
                                                                        <p className="text-xxs text-secondary mb-0">By Sparshika Kapoor</p>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td><p className="text-xxs mb-0">Sanatan <br /> Records</p></td>
                                                            <td><p className="text-xxs mb-0">05/21/2024</p></td>
                                                            <td><p className="text-xxs mb-0">1 Track</p></td>
                                                            <td><p className="text-xxs mb-0">UPC: 3617388437358<br /><span className="text-secondary text-xxs">Cat#: empty</span></p></td>
                                                            <td><Link href="#" className="text-info text-xxs">Promote</Link></td>
                                                            <td>
                                                                <p className="text-xxs mb-0 border p-1 align-items-center d-flex justify-content-center">
                                                                    <i className="material-symbols-rounded text-xxs me-4">globe</i>
                                                                    240 terrs.
                                                                </p>
                                                                <p className="text-xxs mb-0 border p-1 mt-1 align-items-center d-flex justify-content-center">
                                                                    <i className="material-symbols-rounded text-xxs me-4">apps</i>
                                                                    0 stores
                                                                </p>
                                                            </td>
                                                        </tr>

                                                        <tr>
                                                            <td><i className="material-symbols-rounded">album</i></td>
                                                            <td><i className="material-symbols-rounded opacity-5">block</i></td>
                                                            <td>
                                                                <div className="d-flex align-items-center gap-2">
                                                                    <img src="/assets/img/team-2.jpg" className="avatar avatar-sm border-radius-lg" alt="album" />
                                                                    <div className="d-flex flex-column">
                                                                        <Link href="#">
                                                                            <p className="mb-0 text-xxs">Sankatmochan <br /> Hanumanstaka</p>
                                                                        </Link>
                                                                        <p className="text-xxs text-secondary mb-0">By Sparshika Kapoor</p>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td><p className="text-xxs mb-0">Sanatan <br /> Records</p></td>
                                                            <td><p className="text-xxs mb-0">05/21/2024</p></td>
                                                            <td><p className="text-xxs mb-0">1 Track</p></td>
                                                            <td><p className="text-xxs mb-0">UPC: 3617388437303<br /><span className="text-secondary text-xxs">Cat#: empty</span></p></td>
                                                            <td><Link href="#" className="text-info text-xxs">Promote</Link></td>
                                                            <td>
                                                                <p className="text-xxs mb-0 border p-1 align-items-center d-flex justify-content-center">
                                                                    <i className="material-symbols-rounded text-xxs me-4">globe</i>
                                                                    240 terrs.
                                                                </p>
                                                                <p className="text-xxs mb-0 border p-1 mt-1 align-items-center d-flex justify-content-center">
                                                                    <i className="material-symbols-rounded text-xxs me-4">apps</i>
                                                                    0 stores
                                                                </p>
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
                    </div>
                </div>
            </div>
        </>
    )
}

export default page;