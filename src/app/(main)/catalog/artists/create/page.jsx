"use client";
import React from 'react';
import Link from 'next/link';
import FileUplode from '@/_component/FileUplode';

const Page = () => {

    return (
        <div className="container">
            <h2 className="fw-bold mb-2">Create Artist</h2>
            <div className="form-card p-4">
                <div className="row g-4">
                    <div className="col-md-12">
                        <label className="form-label">Profile<span className="text-danger">*</span></label>
                        <FileUplode />
                    </div>
                    <div className="col-md-4">
                        <label className="form-label text-white">Artist Name <span className='text-danger'>*</span></label>
                        <input type="text" className="form-control dark-input" placeholder="Enter Artist Name" />
                    </div>
                    <div className="col-md-4">
                        <label className="form-label text-white">Spotify ID <span className='text-danger'>*</span></label>
                        <input type="text" className="form-control dark-input" placeholder="Enter Spotify ID " />
                    </div>
                    <div className="col-md-4">
                        <label className="form-label text-white">Apple ID <span className='text-danger'>*</span></label>
                        <input type="text" className="form-control dark-input" placeholder="Enter Apple ID" />
                    </div>
                    <div className="col-md-4">
                        <label className="form-label text-white">Email ID <span className='text-danger'>*</span></label>
                        <input type="email" className="form-control dark-input" placeholder="Enter Email ID" />
                    </div>
                    <div className="col-md-4">
                        <label className="form-label text-white">Instagram  <span className='text-danger'>*</span></label>
                        <input type="text" className="form-control dark-input" placeholder="Enter Instagram ID" />
                    </div>
                    <div className="col-md-4">
                        <label className="form-label text-white">Facebook</label>
                        <input type="text" className="form-control dark-input" placeholder="Enter Facebook ID" />
                    </div>
                    <div className="col-md-12">
                        <label className="form-label text-white">About <span className='text-danger'>*</span></label>
                        <textarea className="form-control dark-input" />
                    </div>
                </div>

            </div>
            <div className='w-10'>
                <Link className="btn bg-gradient-green text-black w-100" href="/label/create" type="button">
                    Create</Link>
            </div>
        </div>
    );
};

export default Page;
