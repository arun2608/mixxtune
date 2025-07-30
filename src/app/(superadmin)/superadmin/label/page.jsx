"use client";
import React from 'react';
import Link from 'next/link'

const page = () => {

    return (
        <>

            <div className='page-wrapper container'>
                <div className='row'>
                    <div className='col-12'>
                        <div className='card p-3 rounded-3'>
                            <div className='d-flex justify-content-between'>
                                <div className=" pe-md-3 align-items-center ">
                                    <div className="input-group input-group-outline">
                                        <label className="form-label">Search here...</label>
                                        <input type="text" className="form-control" />
                                    </div>
                                </div>
                                <div>
                                    <div className="">
                                        <Link className="btn bg-gradient-green text-black w-100" href="/superadmin/label/create" type="button">
                                            Create</Link>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-12">
                                    <div className="card my-4">
                                        <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                                            <div className="bg-gradient-dark shadow-dark border-radius-lg pt-4 pb-3">
                                                <h6 className="text-white text-capitalize ps-3">Label</h6>
                                            </div>
                                        </div>
                                        <div className="card-body px-0 pb-2">
                                            <div className="table-responsive p-0">
                                                <table className="table align-items-center mb-0">
                                                    <thead>
                                                        <tr>
                                                            <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Logo</th>
                                                            <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Title</th>
                                                            <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">User</th>
                                                            <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Date</th>
                                                            <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7  ps-2">ID</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>
                                                                <div>
                                                                    <img src="/assets/img/team-2.jpg" className="avatar avatar-sm me-3 border-radius-lg"
                                                                        alt="user1" />
                                                                </div>

                                                            </td>

                                                            <td>
                                                                <p className="text-xs font-weight-bold mb-0">Demo Title</p>
                                                            </td>


                                                            <td>
                                                                <p className="text-xs font-weight-bold mb-0">Alise</p>
                                                            </td>

                                                            <td className="align-middle text-center">
                                                                <span className="text-secondary text-xs font-weight-bold">23/04/18</span>
                                                            </td>
                                                            <td className="align-middle text-center">
                                                                <p className="text-xs font-weight-bold mb-0">12330</p>
                                                            </td>
                                                        </tr>

                                                        <tr>
                                                            <td>
                                                                <div>
                                                                    <img src="/assets/img/team-2.jpg" className="avatar avatar-sm me-3 border-radius-lg"
                                                                        alt="user1" />
                                                                </div>
                                                            </td>

                                                            <td>
                                                                <p className="text-xs font-weight-bold mb-0">Demo Title</p>
                                                            </td>

                                                            <td>
                                                                <p className="text-xs font-weight-bold mb-0">Alise</p>
                                                            </td>

                                                            <td className="align-middle text-center">
                                                                <span className="text-secondary text-xs font-weight-bold">23/04/18</span>
                                                            </td>
                                                            <td className="align-middle text-center">
                                                                <p className="text-xs font-weight-bold mb-0">12330</p>
                                                            </td>
                                                        </tr>

                                                        <tr>
                                                            <td>
                                                                <div>
                                                                    <img src="/assets/img/team-2.jpg" className="avatar avatar-sm me-3 border-radius-lg"
                                                                        alt="user1" />
                                                                </div>
                                                            </td>

                                                            <td>
                                                                <p className="text-xs font-weight-bold mb-0">Demo Title</p>
                                                            </td>

                                                            <td>
                                                                <p className="text-xs font-weight-bold mb-0">Alise</p>
                                                            </td>

                                                            <td className="align-middle text-center">
                                                                <span className="text-secondary text-xs font-weight-bold">23/04/18</span>
                                                            </td>
                                                            <td className="align-middle text-center">
                                                                <p className="text-xs font-weight-bold mb-0">12330</p>
                                                            </td>
                                                        </tr>

                                                        <tr>
                                                            <td>
                                                                <div>
                                                                    <img src="/assets/img/team-2.jpg" className="avatar avatar-sm me-3 border-radius-lg"
                                                                        alt="user1" />
                                                                </div>

                                                            </td>

                                                            <td>
                                                                <p className="text-xs font-weight-bold mb-0">Demo Title</p>
                                                            </td>

                                                            <td>
                                                                <p className="text-xs font-weight-bold mb-0">Alise</p>
                                                            </td>

                                                            <td className="align-middle text-center">
                                                                <span className="text-secondary text-xs font-weight-bold">23/04/18</span>
                                                            </td>
                                                            <td className="align-middle text-center">
                                                                <p className="text-xs font-weight-bold mb-0">12330</p>
                                                            </td>
                                                        </tr>


                                                        <tr>
                                                            <td>
                                                                <div>
                                                                    <img src="/assets/img/team-2.jpg" className="avatar avatar-sm me-3 border-radius-lg"
                                                                        alt="user1" />
                                                                </div>

                                                            </td>

                                                            <td>
                                                                <p className="text-xs font-weight-bold mb-0">Demo Title</p>
                                                            </td>

                                                            <td>
                                                                <p className="text-xs font-weight-bold mb-0">Alise</p>
                                                            </td>

                                                            <td className="align-middle text-center">
                                                                <span className="text-secondary text-xs font-weight-bold">23/04/18</span>
                                                            </td>

                                                            <td className="align-middle text-center">
                                                                <p className="text-xs font-weight-bold mb-0">12330</p>
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

export default page