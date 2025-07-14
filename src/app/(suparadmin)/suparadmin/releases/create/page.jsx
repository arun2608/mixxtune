"use client";
import React, { useState } from 'react';

const Page = () => {
    const [activeTab, setActiveTab] = useState("Release Information");

    return (
        <div className='container'>
            <div className='row '>
                <div className='col-12 col-md-8 col-lg-8 '>
                    <div className='card'>
                        <div className='releases-header p-3 rounded-3'>
                            <div className='header-btn d-flex gap-2'>
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


                        {
                            activeTab === 'Release Information' && (
                                <div className='releases-form  p-3 rounded-3 mt-3'>
                                    <form>
                                        <div className="artwork-upload mb-4">
                                            <label htmlFor="artwork" className="label">Artwork <span className="text-danger">*</span></label>
                                            <div className="upload-box position-relative border border-dashed rounded d-flex align-items-center justify-content-center" style={{ width: "150px", height: "150px", backgroundColor: "#f9f9f9" }}>
                                                <input type="file" id="artwork" className="file-input position-absolute w-100 h-100 opacity-0" />
                                                <p className="upload-text z-1 text-muted">Upload</p>
                                            </div>
                                            <p className="upload-note text-secondary small mt-2">Please Upload 3000x3000 px</p>
                                        </div>

                                        <div className="form-group">
                                            <label>Release Title <span className="text-danger">*</span></label>
                                            <input type="text" className="form-control" placeholder="Release Title" />
                                        </div>

                                        <div className="form-group">
                                            <label>Primary Artist <span className="text-danger">*</span></label>
                                            <input type="text" className="form-control" placeholder="Primary Artist" />
                                        </div>

                                        <div className="form-group form-check mt-4">
                                            <input type="checkbox" className="form-check-input" id="artist1" />
                                            <label className="form-check-label" htmlFor="artist1">Artist Profile</label>
                                        </div>

                                        <div className="form-group form-check">
                                            <input type="checkbox" className="form-check-input" id="artist2" />
                                            <label className="form-check-label" htmlFor="artist2">Second Artist Profile</label>
                                        </div>

                                        <div className="form-group form-check">
                                            <input type="checkbox" className="form-check-input" id="artist3" />
                                            <label className="form-check-label" htmlFor="artist3">Third Artist Profile</label>
                                        </div>

                                        <div className="form-group">
                                            <label>Featuring Artist</label>
                                            <input type="text" className="form-control" placeholder="Featuring Artist" />
                                        </div>

                                        <div className="form-group">
                                            <label>Genre <span className="text-danger">*</span></label>
                                            <select className="form-control">
                                                <option>Select Genre</option>
                                                <option>Pop</option>
                                                <option>Rock</option>
                                                <option>Jazz</option>
                                            </select>
                                        </div>

                                        <div className="form-group">
                                            <label>Format <span className="text-danger">*</span></label>
                                            <select className="form-control">
                                                <option>Single</option>
                                                <option>EP</option>
                                                <option>Album</option>
                                            </select>
                                        </div>

                                        <div className="form-group">
                                            <label>Label Name <span className="text-danger">*</span></label>
                                            <select className="form-control">
                                                <option>Select</option>
                                                <option>Label A</option>
                                                <option>Label B</option>
                                            </select>
                                        </div>

                                        <div className="form-group">
                                            <label>(P) Line <span className="text-danger">*</span></label>
                                            <select className="form-control">
                                                <option>Select</option>
                                                <option>Line A</option>
                                                <option>Line B</option>
                                            </select>
                                        </div>

                                        <div className="form-group">
                                            <label>(C) Line <span className="text-danger">*</span></label>
                                            <select className="form-control">
                                                <option>Select</option>
                                                <option>Line A</option>
                                                <option>Line B</option>
                                            </select>
                                        </div>

                                        <div className="form-group">
                                            <label>Releasing Year <span className="text-danger">*</span></label>
                                            <select className="form-control">
                                                <option>2025</option>
                                                <option>2024</option>
                                                <option>2023</option>
                                            </select>
                                        </div>

                                        <div className="form-group">
                                            <label>UPC</label>
                                            <input type="text" className="form-control" placeholder="UPC" />
                                        </div>
                                    </form>
                                </div>
                            )
                        }


                        {
                            activeTab === "Upload" && (
                                <div className='releases-form  p-3 rounded-3 mt-3'>
                                    <form>
                                        <label>Upload <span className="text-danger">*</span></label>
                                        <div className="file-upload-wrapper form-group">
                                            <label htmlFor="fileInput" className="file-upload-label">Choose File</label>
                                            <span className="file-upload-text" id="fileName">No file chosen</span>
                                            <input type="file" id="fileInput" />
                                        </div>
                                    </form>
                                </div>

                            )
                        }

                        {
                            activeTab === "Track" && (
                                <div className='releases-form  p-3 rounded-3 mt-3'>
                                    <form>
                                        <label>Track Type<span className="text-danger">*</span></label>
                                        <div class="radio-group">
                                            <div class="radio-option">
                                                <input type="radio" id="original" name="trackType" />
                                                <label htmlFor="original">Original</label>
                                            </div>
                                            <div class="radio-option">
                                                <input type="radio" id="karaoke" name="trackType" />
                                                <label htmlFor="karaoke">Karaoke</label>
                                            </div>
                                            <div class="radio-option">
                                                <input type="radio" id="medley" name="trackType" />
                                                <label htmlFor="medley">Medley</label>
                                            </div>
                                            <div class="radio-option">
                                                <input type="radio" id="cover" name="trackType" />
                                                <label htmlFor="cover">Cover</label>
                                            </div>
                                            <div class="radio-option">
                                                <input type="radio" id="cover-band" name="trackType" />
                                                <label htmlFor="cover-band">Cover by cover band</label>
                                            </div>
                                        </div>

                                        <div>
                                            <label>Instrumental<span className="text-danger">*</span></label>
                                            <div>
                                                <input type="radio" id='yes' name='instrument'></input>
                                                <label htmlFor="yes">Yes</label>
                                            </div>

                                            <div>
                                                <input type="radio" id='No' name='instrument'></input>
                                                <label htmlFor="No">No</label>
                                            </div>
                                        </div>

                                        <div className="form-group">
                                            <label>Title <span className="text-danger">*</span></label>
                                            <input type="text" className="form-control" placeholder="title" />
                                        </div>

                                        <div className="form-group">
                                            <label>Artist <span className="text-danger">*</span></label>
                                            <input type="text" className="form-control" placeholder="Artist" />
                                        </div>

                                        <div className="form-group">
                                            <label>Lable <span className="text-danger">*</span></label>
                                            <select className="form-control">
                                                <option>Select label</option>
                                                <option>Pop</option>
                                                <option>Rock</option>
                                                <option>Jazz</option>
                                            </select>
                                        </div>

                                        <div className="form-group">
                                            <label>Author <span className="text-danger">*</span></label>
                                            <input type="text" className="form-control" placeholder="Author" />
                                        </div>

                                        <div className="form-group">
                                            <label>Composer <span className="text-danger">*</span></label>
                                            <input type="text" className="form-control" placeholder="Composer" />
                                        </div>

                                        <div className="form-group">
                                            <label>Arranger</label>
                                            <input type="text" className="form-control" placeholder="Arranger" />
                                        </div>

                                        <div className="form-group">
                                            <label>Producer</label>
                                            <input type="text" className="form-control" placeholder="Producer" />
                                        </div>

                                        <div className="form-group">
                                            <label>(P) Line <span className="text-danger">*</span></label>
                                            <select className="form-control">
                                                <option>Select</option>
                                                <option>Line A</option>
                                                <option>Line B</option>
                                            </select>
                                        </div>

                                        <div className="form-group">
                                            <label>Releasing Year <span className="text-danger">*</span></label>
                                            <select className="form-control">
                                                <option>2025</option>
                                                <option>2024</option>
                                                <option>2023</option>
                                            </select>
                                        </div>

                                        <div className="form-group">
                                            <label>Publisher</label>
                                            <input type="text" className="form-control" placeholder="Publisher" />
                                        </div>

                                        <div>
                                            <label>Ask to generate an ISRC<span className="text-danger">*</span></label>
                                            <div>
                                                <input type="radio" id='yes' name='instrument'></input>
                                                <label htmlFor="yes">Yes</label>
                                            </div>

                                            <div>
                                                <input type="radio" id='No' name='instrument'></input>
                                                <label htmlFor="No">No</label>
                                            </div>
                                        </div>

                                        <div className="form-group">
                                            <label>Genre <span className="text-danger">*</span></label>
                                            <select className="form-control">
                                                <option>Select Genre</option>
                                                <option>Pop</option>
                                                <option>Rock</option>
                                                <option>Jazz</option>
                                            </select>
                                        </div>

                                        <div className="form-group">
                                            <label>Price <span className="text-danger">*</span></label>
                                            <select className="form-control">
                                                <option>Free</option>
                                                <option>Low</option>
                                                <option>Medium</option>
                                                <option>High</option>
                                            </select>
                                        </div>

                                        <div>
                                            <label>Parental advisory <span className="text-danger">*</span></label>
                                            <div>
                                                <input type="radio" id='yes' name='instrument'></input>
                                                <label htmlFor="yes">Yes</label>
                                            </div>

                                            <div>
                                                <input type="radio" id='No' name='instrument'></input>
                                                <label htmlFor="No">No</label>
                                            </div>

                                            <div>
                                                <input type="radio" id='clean' name='instrument'></input>
                                                <label htmlFor="clean">Cleaned</label>
                                            </div>
                                        </div>

                                        <div className="form-group">
                                            <label>Track tittle language <span className="text-danger">*</span></label>
                                            <select className="form-control">
                                                <option>Free</option>
                                                <option>Low</option>
                                                <option>Medium</option>
                                                <option>High</option>
                                            </select>
                                        </div>

                                        <div className="form-group">
                                            <label>Lyrics Language<span className="text-danger">*</span></label>
                                            <select className="form-control">
                                                <option>Free</option>
                                                <option>Low</option>
                                                <option>Medium</option>
                                                <option>High</option>
                                            </select>
                                        </div>

                                        <div className="form-group">
                                            <label>Lyrics</label>
                                            <input type="text" className="form-control" placeholder="Lyrics" />
                                        </div>
                                    </form>
                                </div>
                            )
                        }


                        {
                            activeTab === "Price" && (
                                <div className='releases-form  p-3 rounded-3 mt-3'>
                                    <form>
                                        <div className="form-group">
                                            <label>Price <span className="text-danger">*</span></label>
                                            <select className="form-control">
                                                <option>Premium</option>
                                                <option>Low</option>
                                                <option>Medium</option>
                                                <option>High</option>
                                            </select>
                                        </div>
                                    </form>
                                </div>

                            )
                        }

                        {
                            activeTab === "Releasing Date" && (
                                <div className='releases-form  p-3 rounded-3 mt-3'>
                                    <form>
                                        <div className="form-group">
                                            <label>Date <span className="text-danger">*</span></label>
                                            <input type="date" className="form-control" />
                                        </div>
                                    </form>
                                </div>

                            )
                        }

                        {
                            activeTab === "Submisson" && (
                                <div className='releases-form  p-3 rounded-3 mt-3'>
                                    <form>
                                        <div class="radio-group">
                                            <div class="radio-option">
                                                <input type="radio" id="original" name="trackType" />
                                                <label htmlFor="original">Continue</label>
                                            </div>

                                            <button className='sbmit-btn'>Submit</button>
                                        </div>
                                    </form>
                                </div>

                            )
                        }
                    </div>
                </div>

                <div className='col-12 col-md-4 col-lg-4 card p-3 rounded-3' >
                    <div className='side-headingn p-3 px-4'>
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
    );
};

export default Page;
