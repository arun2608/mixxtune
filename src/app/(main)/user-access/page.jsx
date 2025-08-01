import Link from 'next/link'
import React from 'react'

const page = () => {
    return (
        <>
            <div className='page-wrapper container'>
                <div className='row'>
                    <div className='col-12'>
                        <div className='card p-3 rounded-3'>
                            <div className='d-flex justify-content-end mb-3'>
                                <Link className="btn bg-gradient-primary" href="/user-access/create" type="button">
                                    <i className='material-symbols-rounded'>add</i>
                                    Add New User
                                </Link>
                            </div>

                            <div className='row'>
                                <div className='col-12 col-md-6 col-lg-6'>
                                    <div className="custom-form-group justify-content-start">
                                        <label className='w-40 text-end'>Search by login Or Email</label>
                                        <input type="text" className="custom-form-control dark-input mx-3" placeholder='Type here to search' />
                                    </div>
                                </div>

                                <div className='col-12 col-md-6 col-lg-6'>
                                    <div className="custom-form-group justify-content-start">
                                        <label className='w-40 text-end'>Account Status</label>
                                        <select className="custom-form-control dark-input mx-3">
                                            <option>All</option>
                                            <option>Indian</option>
                                            <option>Folk</option>
                                            <option>Hip Hop</option>
                                            <option>Classical</option>
                                        </select>
                                    </div>
                                </div>

                                <div className='col-12 col-md-6 col-lg-6'>
                                    <div className="custom-form-group justify-content-start">
                                        <label className='w-40 text-end'>This user has access to</label>
                                        <select className="custom-form-control dark-input mx-3">
                                            <option>All</option>
                                            <option>Indian</option>
                                            <option>Folk</option>
                                            <option>Hip Hop</option>
                                            <option>Classical</option>
                                        </select>
                                    </div>
                                </div>

                                <div className='col-12 col-md-6 col-lg-6'>
                                    <div className="custom-form-group justify-content-start">
                                        <label className='w-40 text-end'>Permission Level</label>
                                        <select className="custom-form-control dark-input mx-3">
                                            <option>All</option>
                                            <option>Standard User</option>
                                            <option>Advanced User</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-12">
                                    <div className="card my-4">
                                        <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                                            <div className="bg-gradient-dark shadow-dark border-radius-lg pt-4 pb-3">
                                                <h6 className="text-white text-capitalize ps-3">All User</h6>
                                            </div>
                                        </div>
                                        <div className="card-body px-0 pb-2">
                                            <div className="table-responsive p-0">
                                                <table className="table align-items-center mb-0">
                                                    <thead>
                                                        <tr>
                                                            <th className="text-uppercase text-secondary text-xs font-weight-bolder opacity-7 ps-2">Login</th>
                                                            <th className="text-uppercase text-secondary text-xs font-weight-bolder opacity-7 ps-2">Email</th>
                                                            <th className="text-uppercase text-secondary text-xs font-weight-bolder opacity-7 ps-2">Account Status</th>
                                                            <th className="text-uppercase text-secondary text-xs font-weight-bolder opacity-7 ps-2">This user has access to</th>
                                                            <th className="text-uppercase text-secondary text-xs font-weight-bolder opacity-7 ps-2">Permission Level</th>
                                                            <th className="text-uppercase text-secondary text-xs font-weight-bolder opacity-7 ps-2">Action</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>
                                                                <p className="text-xs mb-0">Arun_kumar</p>
                                                            </td>

                                                            <td>
                                                                <p className="text-xs mb-0">arunkumar@gmail.com</p>
                                                            </td>

                                                            <td>
                                                                <p className="text-xs mb-0">Confirmed last login <br />05/29/2024 <br /> 12:20:20</p>
                                                            </td>

                                                            <td>
                                                                <p className="text-xs mb-0">All Except Payment & Opration</p>
                                                            </td>

                                                            <td>
                                                                <p className="text-xs mb-0">Standard User</p>
                                                            </td>

                                                            <td>
                                                                <i className="material-symbols-rounded text-lg">edit</i>
                                                                <i className="material-symbols-rounded text-lg">delete</i>
                                                                <i className="material-symbols-rounded text-lg">power_settings_new</i>
                                                            </td>

                                                        </tr>

                                                        <tr>
                                                            <td>
                                                                <p className="text-xs mb-0">Sanchit_rajput</p>
                                                            </td>

                                                            <td>
                                                                <p className="text-xs mb-0">sanchitrajput@gmail.com</p>
                                                            </td>

                                                            <td>
                                                                <p className="text-xs mb-0">Confirmed last login <br />05/29/2024 <br /> 12:20:20</p>
                                                            </td>

                                                            <td>
                                                                <p className="text-xs mb-0">All Except Payment & Opration</p>
                                                            </td>

                                                            <td>
                                                                <p className="text-xs mb-0">Standard User</p>
                                                            </td>

                                                            <td>
                                                                <i className="material-symbols-rounded text-lg">edit</i>
                                                                <i className="material-symbols-rounded text-lg">delete</i>
                                                                <i className="material-symbols-rounded text-lg">power_settings_new</i>
                                                            </td>
                                                        </tr>

                                                        <tr>
                                                            <td>
                                                                <p className="text-xs mb-0">Aditya_thakur</p>
                                                            </td>

                                                            <td>
                                                                <p className="text-xs mb-0">adityathakur@gmail.com</p>
                                                            </td>

                                                            <td>
                                                                <p className="text-xs mb-0">Confirmed last login <br />05/29/2024 <br /> 12:20:20</p>
                                                            </td>

                                                            <td>
                                                                <p className="text-xs mb-0">All Except Payment & Opration</p>
                                                            </td>

                                                            <td>
                                                                <p className="text-xs mb-0">Standard User</p>
                                                            </td>

                                                            <td>
                                                                <i className="material-symbols-rounded text-lg">edit</i>
                                                                <i className="material-symbols-rounded text-lg">delete</i>
                                                                <i className="material-symbols-rounded text-lg">power_settings_new</i>
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