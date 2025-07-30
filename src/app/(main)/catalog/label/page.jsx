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
                                        <Link className="btn bg-gradient-green text-black w-100" href="/catalog/label/create" type="button">
                                            Create</Link>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-12">
                                    <div className="card my-4">
                                        <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                                            <div className="bg-gradient-dark shadow-dark border-radius-lg pt-4 pb-3">
                                                <h6 className="text-white text-capitalize ps-3">Label table</h6>
                                            </div>
                                        </div>
                                        <div className="card-body px-0 pb-2">
                                            <div className="table-responsive p-0">
                                                <table className="table align-items-center mb-0">
                                                    <thead>
                                                        <tr className='d-flex justify-content-between'>
                                                            <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Label Profile</th>
                                                            <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Releases</th>
                                                            <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Releases</th>
                                                            <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Releases</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr className='d-flex justify-content-between'>
                                                            <td>
                                                                <div className="d-flex px-2 py-1">
                                                                    <div>
                                                                        <img src="/assets/img/team-2.jpg" className="avatar avatar-sm me-3 border-radius-lg" alt="user1" />
                                                                    </div>
                                                                    <div className="d-flex flex-column justify-content-center">
                                                                        <h6 className="mb-0 text-sm">John Michael</h6>
                                                                        <p className="text-xs text-secondary mb-0">ID 16011</p>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td className='d-flex align-items-center  pe-4'>
                                                                <p className="text-md font-weight-bold mb-0">0</p>
                                                                <i className="material-symbols-rounded opacity-5 delete">delete</i>
                                                            </td>

                                                            <td className='d-flex align-items-center  pe-4'>
                                                                <p className="text-md font-weight-bold mb-0">0</p>
                                                                <i className="material-symbols-rounded opacity-5 delete">delete</i>
                                                            </td>

                                                            <td className='d-flex align-items-center  pe-4'>
                                                                <p className="text-md font-weight-bold mb-0">0</p>
                                                                <i className="material-symbols-rounded opacity-5 delete">delete</i>
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