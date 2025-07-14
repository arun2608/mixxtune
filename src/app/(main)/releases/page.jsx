"use client";
import React, { useState } from 'react';
import Link from 'next/link'

const page = () => {

    const [activeTab, setActiveTab] = useState("All");
    return (
        <>

            <div className='page-wrapper container'>
                <div className='row'>
                    <div className='col-12 col-md-8 col-lg-8'>
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
                                        <Link className="btn bg-gradient-green text-black w-100" href="/releases/create" type="button">
                                            Create</Link>
                                    </div>
                                </div>
                            </div>

                            <div className='release-count d-flex justify-content-between'>
                                <div className='d-flex align-items-center'>
                                    <i className="material-symbols-rounded opacity-5">report</i>
                                    <p className="nav-link-text ms-1 mb-0">Release Count</p>
                                </div>
                                <div className='count mt-2'>
                                    <span className='mx-2 fw-bold'>0</span>
                                    <span className='bg-gray-200 text-dark fw-bold p-2 rounded-3'>999</span>
                                </div>
                            </div>


                            <div className='releases-header  p-3 rounded-3'>
                                <div className='header-btn d-flex gap-2'>
                                    <div
                                        className={`each-release-btn px-3 py-2 rounded ${activeTab === "All" ? "bg-dark text-white" : "bg-gray-200 text-dark"}`}
                                        onClick={() => setActiveTab("All")}
                                        style={{ cursor: "pointer" }}
                                    >
                                        All
                                    </div>

                                    <div
                                        className={`each-release-btn px-3 py-2 rounded ${activeTab === "Approved" ? "bg-dark text-white" : "bg-gray-200 text-dark"}`}
                                        onClick={() => setActiveTab("Approved")}
                                        style={{ cursor: "pointer" }}
                                    >
                                        Approved
                                    </div>

                                    <div
                                        className={`each-release-btn px-3 py-2 rounded ${activeTab === "Pending" ? "bg-dark text-white" : "bg-gray-200 text-dark"}`}
                                        onClick={() => setActiveTab("Pending")}
                                        style={{ cursor: "pointer" }}
                                    >
                                        Pending
                                    </div>

                                    <div
                                        className={`each-release-btn px-3 py-2 rounded ${activeTab === "Action Required" ? "bg-dark text-white" : "bg-gray-200 text-dark"}`}
                                        onClick={() => setActiveTab("Action Required")}
                                        style={{ cursor: "pointer" }}
                                    >
                                        Action Required
                                    </div>

                                    <div
                                        className={`each-release-btn px-3 py-2 rounded ${activeTab === "Unfinished" ? "bg-dark text-white" : "bg-gray-200 text-dark"}`}
                                        onClick={() => setActiveTab("Unfinished")}
                                        style={{ cursor: "pointer" }}
                                    >
                                        Unfinished
                                    </div>

                                    <div
                                        className={`each-release-btn px-3 py-2 rounded ${activeTab === "Rejected" ? "bg-dark text-white" : "bg-gray-200 text-dark"}`}
                                        onClick={() => setActiveTab("Rejected")}
                                        style={{ cursor: "pointer" }}
                                    >
                                        Rejected
                                    </div>
                                </div>
                            </div>

                            {
                                activeTab === "All" && (
                                    <div className='releases-form card p-3 rounded-3 mt-3'>
                                        <div className='side-headingn p-3 rounded-3 px-4'>
                                            <div className='side-card bg-gray-200 rounded-3 text-center text-black p-3 mt-3'>
                                                Nothing Found.
                                            </div>
                                        </div>
                                    </div>

                                )
                            }

                            {
                                activeTab === "Approved" && (
                                    <div className='releases-form card p-3 rounded-3 mt-3'>
                                        <div className='side-headingn p-3 rounded-3 px-4'>
                                            <div className='side-card bg-gray-200 rounded-3 text-center text-black p-3 mt-3'>
                                                Nothing Found.
                                            </div>
                                        </div>
                                    </div>

                                )
                            }

                            {
                                activeTab === "Pending" && (
                                    <div className='releases-form card p-3 rounded-3 mt-3'>
                                        <div className='side-headingn p-3 rounded-3 px-4'>
                                            <div className='side-card bg-gray-200 rounded-3 text-center text-black p-3 mt-3'>
                                                Nothing Found.
                                            </div>
                                        </div>
                                    </div>

                                )
                            }

                            {
                                activeTab === "Action Required" && (
                                    <div className='releases-form  p-3 rounded-3 mt-3'>
                                        <div className='side-headingn p-3 rounded-3 px-4'>
                                            <div className='side-card bg-gray-200 rounded-3 text-center text-black p-3 mt-3'>
                                                Nothing Found.
                                            </div>
                                        </div>
                                    </div>

                                )
                            }

                            {
                                activeTab === "Unfinished" && (
                                    <div className='releases-form  p-3 rounded-3 mt-3'>
                                        <div className='side-headingn p-3 rounded-3 px-4'>
                                            <div className='side-card bg-gray-200 rounded-3 text-center text-black p-3 mt-3'>
                                                Nothing Found.
                                            </div>
                                        </div>
                                    </div>

                                )
                            }


                            {
                                activeTab === "Rejected" && (
                                    <div className='releases-form  p-3 rounded-3 mt-3'>
                                        <div className='side-headingn p-3 rounded-3 px-4'>
                                            <div className='side-card bg-gray-200 rounded-3 text-center text-black p-3 mt-3'>
                                                Nothing Found.
                                            </div>
                                        </div>
                                    </div>

                                )
                            }
                        </div>
                    </div>
                    <div className='col-12 col-md-4 col-lg-4 card rounded-3 p-3'>
                        <div className='side-headingn p-3 rounded-3 px-4'>
                            <div className='d-flex align-items-center gap-2'>
                                <i className="material-symbols-rounded opacity-5">chat</i>
                                <p className='fw-bold mt-2'>Release Notices</p>
                            </div>
                            <div className='side-card bg-gray-200 rounded-3 text-center text-black p-3 mt-3'>
                                No notice yet.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default page