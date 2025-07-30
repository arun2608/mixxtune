"use client"

import FileUplode from "@/_component/FileUplode";
import Link from "next/link";
import React, { useState } from "react";
const page = () => {
    return (
        <>

            <div className="container">
                <h2 className="fw-bold mb-2">Create Label</h2>
                <div className="form-card p-4">
                    <h5 className="mb-4">Personal Information</h5>
                    <hr className="horizontal dark mt-0 mb-2" />
                    <div className="row g-4">
                        <div className="col-md-4">
                            <label className="form-label text-white">Label Name <span className='text-danger'>*</span></label>
                            <input type="text" className="form-control dark-input" placeholder="Enter Label Name" />
                        </div>
                        <div className="col-md-4">
                            <label className="form-label text-white">Full Name <span className='text-danger'>*</span></label>
                            <input type="text" className="form-control dark-input" placeholder="Enter Full Name" />
                        </div>
                        <div className="col-md-4">
                            <label className="form-label text-white">Mobile Number <span className='text-danger'>*</span></label>
                            <input type="number" className="form-control dark-input" placeholder="Enter Mobile Number" />
                        </div>
                        <div className="col-md-4">
                            <label className="form-label text-white">Email ID <span className='text-danger'>*</span></label>
                            <input type="email" className="form-control dark-input" placeholder="Enter Email ID" />
                        </div>
                        <div className="col-md-4">
                            <label className="form-label text-white">Address Line 1  <span className='text-danger'>*</span></label>
                            <input type="text" className="form-control dark-input" placeholder="Enter Address Line 1" />
                        </div>
                        <div className="col-md-4">
                            <label className="form-label text-white">Address Line 2</label>
                            <input type="text" className="form-control dark-input" placeholder="Enter Address Line 2" />
                        </div>
                        <div className="col-md-4">
                            <label className="form-label text-white">City  <span className='text-danger'>*</span></label>
                            <input type="text" className="form-control dark-input" placeholder="Enter City" />
                        </div>
                        <div className="col-md-4">
                            <label className="form-label text-white">State <span className='text-danger'>*</span></label>
                            <input type="text" className="form-control dark-input" placeholder="Enter State" />
                        </div>
                        <div className="col-md-4">
                            <label className="form-label text-white">Pincode <span className='text-danger'>*</span></label>
                            <input type="text" className="form-control dark-input" placeholder="Enter Pincode" />
                        </div>
                    </div>
                </div>

                <div className="form-card p-4">
                    <h5 className="mb-4">Adhar Card Details</h5>
                    <hr className="horizontal dark mt-0 mb-2" />
                    <div className="row g-4">
                        <div className="col-md-6">
                            <label className="form-label">Aadhar Card Front Photo <span className="text-danger">*</span></label>
                            <FileUplode />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Aadhar Card Front Photo <span className="text-danger">*</span></label>
                            <FileUplode />
                        </div>
                    </div>
                </div>
                 <div className='w-20'>
                <Link className="btn bg-gradient-green text-black w-100" href="/label/create" type="button">
                    Create</Link>
            </div>
            </div>

        </>
    )
}

export default page