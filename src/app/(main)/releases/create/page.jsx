"use client";
import React, { useState } from 'react';
import FileUplode from '@/_component/FileUplode';
import Link from 'next/link';


const Page = () => {
    const [activeTab, setActiveTab] = useState("Release Information");

    return (
        <>
            <div className="container">
                <div className='form-card p-3 d-flex justify-content-center'>
                    <div className='header-btn d-flex'>
                        <div
                            className={`each-release-btn px-3 py-2 rounded-2 ${activeTab === "Release Information" ? "bg-dark text-white" : "bg-gray-200 text-dark"}`}
                            onClick={() => setActiveTab("Release Information")}
                            style={{ cursor: "pointer" }}
                        >
                            Release Information
                        </div>

                        <div
                            className={`each-release-btn px-3 py-2 rounded ${activeTab === "Upload" ? "bg-dark text-white" : "bg-gray-200 text-dark"}`}
                            onClick={() => setActiveTab("Upload")}
                            style={{ cursor: "pointer" }}
                        >
                            Upload
                        </div>

                        <div
                            className={`each-release-btn px-3 py-2 rounded ${activeTab === "Track" ? "bg-dark text-white" : "bg-gray-200 text-dark"}`}
                            onClick={() => setActiveTab("Track")}
                            style={{ cursor: "pointer" }}
                        >
                            Track
                        </div>

                        <div
                            className={`each-release-btn px-3 py-2 rounded ${activeTab === "Price" ? "bg-dark text-white" : "bg-gray-200 text-dark"}`}
                            onClick={() => setActiveTab("Price")}
                            style={{ cursor: "pointer" }}
                        >
                            Price
                        </div>

                        <div
                            className={`each-release-btn px-3 py-2 rounded ${activeTab === "Releasing Date" ? "bg-dark text-white" : "bg-gray-200 text-dark"}`}
                            onClick={() => setActiveTab("Releasing Date")}
                            style={{ cursor: "pointer" }}
                        >
                            Releasing Date
                        </div>

                        <div
                            className={`each-release-btn px-3 py-2 rounded ${activeTab === "Submisson" ? "bg-dark text-white" : "bg-gray-200 text-dark"}`}
                            onClick={() => setActiveTab("Submisson")}
                            style={{ cursor: "pointer" }}
                        >
                            Submisson
                        </div>
                    </div>
                </div>

                {activeTab === 'Release Information' && (
                    <div className="form-card p-4">
                        <div className="row g-4">

                            <div className="col-md-12">
                                <label className="form-label">Profile<span className="text-danger">*</span></label>
                                <FileUplode />
                            </div>

                            <div className="col-md-4">
                                <label className="form-label text-white">Release Title  <span className='text-danger'>*</span></label>
                                <input type="text" className="form-control dark-input" placeholder="Enter Release Title " />
                            </div>

                            <div className="col-md-4">
                                <label className="form-label text-white">Primary Artist <span className='text-danger'>*</span></label>
                                <input type="text" className="form-control dark-input" placeholder="Enter Primary Artist" />
                            </div>

                            <div className="col-md-4">
                                <label className="form-label text-white">Version/Subtitle <span className='text-danger'>*</span></label>
                                <input type="text" className="form-control dark-input" placeholder="Enter Version/Subtitle" />
                            </div>

                            <div className="col-md-4">
                                <label className="form-label text-white">Featuring <span className='text-danger'>*</span></label>
                                <input type="email" className="form-control dark-input" placeholder="Enter Featuring" />
                            </div>

                            <div className="col-md-4">
                                <label className="form-label text-white">Genre<span className='text-danger'>*</span></label>
                                <select name="genre" className="form-control dark-input">
                                    <option>-select a genre-</option>
                                    <option value="pop">Pop</option>
                                    <option value="folk">Folk</option>
                                    <option value="classical">Cssical</option>
                                </select>
                            </div>

                            <div className="col-md-4">
                                <label className="form-label text-white">Subgenre<span className='text-danger'>*</span></label>
                                <select name="Subgenre" className="form-control dark-input">
                                    <option>-select a subgenre-</option>
                                    <option value="classical-romantic">Classical-Romanticop</option>
                                    <option value="classical-sufi">Classical-Sufi</option>
                                    <option value="classical-choral">Classical-Choral</option>
                                </select>
                            </div>

                            <div className="col-md-4">
                                <label className="form-label text-white">Label Name<span className='text-danger'>*</span></label>
                                <select name="Subgenre" className="form-control dark-input">
                                    <option>-select a label-</option>
                                    <option value="classical-sanatan">Classical Sanatan</option>
                                    <option value="village-singer">Village Singer</option>
                                    <option value="sony-music">Sony Music</option>
                                </select>
                            </div>

                            <div className="col-md-4">
                                <label className="form-label text-white">Fomrat<span className='text-danger'>*</span></label>
                                <select name="Fomat" className="form-control dark-input">
                                    <option>-select a format-</option>
                                    <option value="single">Single</option>
                                    <option value="ep">EP</option>
                                    <option value="Album">Alubm</option>
                                </select>
                            </div>

                            <div className="col-md-4">
                                <label className="form-label text-white">Release Date<span className='text-danger'>*</span></label>
                                <input type="date" className="form-control dark-input" />
                            </div>

                            <div className="col-md-4">
                                <label className="form-label text-white">P Line <span className='text-danger'>*</span></label>
                                <input type="email" className="form-control dark-input" placeholder="Enter P Line" />
                            </div>

                            <div className="col-md-4">
                                <label className="form-label text-white">C Line<span className='text-danger'>*</span></label>
                                <input type="email" className="form-control dark-input" placeholder="Enter C Line" />
                            </div>

                            <div className="col-md-4">
                                <label className="form-label text-white">Production Year<span className='text-danger'>*</span></label>
                                <select name="production year" className="form-control dark-input">
                                    <option>-select a year-</option>
                                    <option value="2023">2023</option>
                                    <option value="2024">2024</option>
                                    <option value="2025">2025</option>
                                </select>
                            </div>

                            <div className="col-md-4">
                                <label className="form-label text-white">UPC/EAN</label>
                                <input type="text" className="form-control dark-input" placeholder="Enter UPC/EAN" />
                            </div>

                            <div className="col-md-4">
                                <label className="form-label text-white">Producer catalogue number</label>
                                <input type="text" className="form-control dark-input" placeholder="Enter Producer catalogue number" />
                            </div>

                        </div>
                    </div>

                )
                }

                {
                    activeTab === "Upload" && (
                        <div className='form-card p-4'>
                            <div className='row g-4'>

                            </div>

                        </div>
                    )
                }

                {
                    activeTab === "Track" && (
                        <div className='form-card p-4'>
                            <div className='row g-4'>

                            </div>
                        </div>
                    )
                }

                {
                    activeTab === "Price" && (
                        <div className='form-card p-4'>
                            <div className='row g-4'>
                                <div className="col-md-6">
                                    <label className="form-label text-white">Choose a main price tier<span className='text-danger'>*</span></label>
                                    <select name="Price" className="form-control dark-input">
                                        <option>-select -</option>
                                        <option value="Low">Low</option>
                                        <option value="medium">Medium</option>
                                        <option value="High">High</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    )
                }

                {
                    activeTab === "Releasing Date" && (
                        <div className='form-card p-4'>
                            <div className='row g-4'>

                                <div className="col-md-4">
                                    <label className="form-label text-white">Choose a main release date<span className='text-danger'>*</span></label>
                                    <input type="date" className="form-control dark-input" />
                                </div>

                                <div className="col-md-4"></div>
                                <div className="col-md-4"></div>

                                <div className="col-md-6">
                                    <label className="form-label text-white">Add a pre-order date<span className='text-danger'>*</span></label>
                                    <select name="pre-order date" className="form-control dark-input">
                                        <option>-select -</option>
                                        <option value="Low">Low</option>
                                        <option value="medium">Medium</option>
                                        <option value="High">High</option>
                                    </select>
                                </div>

                                <div className="col-md-6">
                                    <label className="form-label text-white">Add an exclusive release date<span className='text-danger'>*</span></label>
                                    <select name="exclusive release date" className="form-control dark-input">
                                        <option>-select -</option>
                                        <option value="Low">Low</option>
                                        <option value="medium">Medium</option>
                                        <option value="High">High</option>
                                    </select>
                                </div>

                            </div>
                        </div>

                    )
                }

                {
                    activeTab === "Submisson" && (
                        <div className='form-card p-4'>
                            <div className='row g-4'>

                            </div>
                        </div>
                    )
                }

                <div className='w-20'>
                    <Link className="btn bg-gradient-green text-black w-100" href="#" type="button">
                        Save</Link>
                </div>
            </div>

        </>
    );
};

export default Page;
