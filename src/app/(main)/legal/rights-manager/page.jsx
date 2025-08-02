import React from 'react'

const page = () => {
    return (
        <>

            <div className="container">
                <div className='card p-3'>
                    <h3 className="fw-semibold">Rights Issues</h3>

                    <div className="d-flex align-items-center justify-content-between mt-3">
                        <div>
                            <button className="btn btn-outline-primary me-2">Pending rights issues</button>
                            <button className="btn btn-outline-secondary">Analytics</button>
                        </div>

                        <div className="text-end">
                            <button className="btn btn-primary btn-pill">Send request form</button>
                        </div>
                    </div>

                    <div className="mt-4 d-flex gap-3">
                        <div className="py-2 px-3 coustom-border rounded shadow-sm d-flex align-items-center gap-2">
                            <img src="/assets/img/illustrations/1384060.png" alt="YouTube" width="30" />
                            <span className="status-pill bg-pending">🔥 23</span>
                            <span className="status-pill bg-resolved">🔥 0</span>
                        </div>
                    </div>


                    <div className='mt-4'>
                        <p>All Platform issues</p>
                        <div className=" row g-3">
                            <div className="col-md-3">
                                <label >My Action</label>
                                <select className="form-select filter-select">
                                    <option>All (26)</option>
                                </select>
                            </div>
                            <div className="col-md-3">
                                <label >Category</label>
                                <select className="form-select filter-select">
                                    <option> All (26)</option>
                                </select>
                            </div>
                            <div className="col-md-3">
                                <label >Label</label>
                                <select className="form-select filter-select">
                                    <option>All</option>
                                </select>
                            </div>
                            <div className="col-md-3">
                                <label >Artist</label>
                                <select className="form-select filter-select">
                                    <option>All</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12">
                            <div className="card my-4">
                                <div className="card-body px-0 pb-2">
                                    <div className="table-responsive p-0">
                                        <table className="table align-items-center mb-0">
                                            <thead>
                                                <tr>
                                                    <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Store</th>
                                                    <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Category</th>
                                                    <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Assets <br />Title</th>
                                                    <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Album <br /> Track <br /> title</th>
                                                    <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">artist <br /> assets <br />ID</th>
                                                    <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">upc</th>
                                                    <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Other party</th>
                                                    <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">daily <br /> views</th>
                                                    <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">expiry</th>
                                                    <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">status</th>
                                                </tr>
                                            </thead>
                                            <tbody>

                                                <tr>
                                                    <td>
                                                        <img src="/assets/img/illustrations/1384060.png" alt="YouTube" width="25" />
                                                    </td>
                                                    <td>
                                                        <p className="text-xs mb-0">Releas <br /> claim</p>
                                                    </td>

                                                    <td>
                                                        <p className="text-xs mb-0">Jai Laxmi <br />Mata Aarti</p>
                                                    </td>

                                                    <td>
                                                        <p className="text-xs mb-0">Jai Laxmi <br /> Mata Aarti</p>
                                                    </td>

                                                    <td>
                                                        <p className="text-xs mb-0">vikas kumar</p>
                                                    </td>

                                                    <td>
                                                        <p className="text-xs mb-0">1234563456</p>
                                                    </td>

                                                    <td>
                                                        <p className="text-xs mb-0 w-20">Giri Trading Agency Private  <br /> Limited - Right Manager for Music</p>
                                                    </td>

                                                    <td>
                                                        <p className="text-xs mb-0">0</p>
                                                    </td>

                                                    <td>
                                                        <p className="text-xs mb-0">5 d</p>
                                                    </td>

                                                    <td>
                                                        <p className="text-xs mb-0">New</p>
                                                    </td>

                                                </tr>

                                                <tr>
                                                    <td>
                                                        <img src="/assets/img/illustrations/1384060.png" alt="YouTube" width="25" />
                                                    </td>
                                                    <td>
                                                        <p className="text-xs mb-0">Releas <br /> claim</p>
                                                    </td>

                                                    <td>
                                                        <p className="text-xs mb-0">Jai Laxmi <br />Mata Aarti</p>
                                                    </td>

                                                    <td>
                                                        <p className="text-xs mb-0">Jai Laxmi <br /> Mata Aarti</p>
                                                    </td>

                                                    <td>
                                                        <p className="text-xs mb-0">vikas kumar</p>
                                                    </td>

                                                    <td>
                                                        <p className="text-xs mb-0">1234563456</p>
                                                    </td>

                                                    <td>
                                                        <p className="text-xs mb-0 w-20">Giri Trading Agency Private  <br /> Limited- Right Manager for Music</p>
                                                    </td>

                                                    <td>
                                                        <p className="text-xs mb-0">0</p>
                                                    </td>

                                                    <td>
                                                        <p className="text-xs mb-0">5 d</p>
                                                    </td>

                                                    <td>
                                                        <p className="text-xs mb-0">New</p>
                                                    </td>

                                                </tr>

                                                <tr>
                                                    <td>
                                                        <img src="/assets/img/illustrations/1384060.png" alt="YouTube" width="25" />
                                                    </td>
                                                    <td>
                                                        <p className="text-xs mb-0">Releas <br /> claim</p>
                                                    </td>

                                                    <td>
                                                        <p className="text-xs mb-0">Jai Laxmi <br />Mata Aarti</p>
                                                    </td>

                                                    <td>
                                                        <p className="text-xs mb-0">Jai Laxmi <br /> Mata Aarti</p>
                                                    </td>

                                                    <td>
                                                        <p className="text-xs mb-0">vikas kumar</p>
                                                    </td>

                                                    <td>
                                                        <p className="text-xs mb-0">1234563456</p>
                                                    </td>

                                                    <td>
                                                        <p className="text-xs mb-0 w-20">Giri Trading Agency Private <br /> Limited  - Right Manager for Music</p>
                                                    </td>

                                                    <td>
                                                        <p className="text-xs mb-0">0</p>
                                                    </td>

                                                    <td>
                                                        <p className="text-xs mb-0">5 d</p>
                                                    </td>

                                                    <td>
                                                        <p className="text-xs mb-0">New</p>
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
            </div >


        </>
    )
}

export default page