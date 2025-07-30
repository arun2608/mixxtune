"use client";
import React, { useState } from 'react';
// import FileUplode from '@/_component/FileUplode';
// import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const Page = () => {
    const [activeTab, setActiveTab] = useState(1);

    const [preview, setPreview] = useState(null);

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setPreview(imageUrl);
        }
    };

    const [promotions, setPromotions] = useState([
        { media: '', title: '', description: '', startDate: '' },
        { media: '', title: '', description: '', startDate: '' },
    ]);

    const [marketingRows, setMarketingRows] = useState([
        { media: '', title: '', description: '', startDate: '' },
        { media: '', title: '', description: '', startDate: '' },

    ]);

    const [concertsRows, setConcertsRows] = useState([
        { startDate: '', media: '', title: '', place: '', },
        { startDate: '', media: '', title: '', place: '', },

    ]);

    const handleAddMore = () => {
        setPromotions([...promotions, { media: '', title: '', description: '', startDate: '' }]);

    };

    const handleAddMore2 = () => {
        setMarketingRows([
            ...marketingRows,
            { media: '', title: '', description: '', startDate: '' },
        ]);
    }

    const handleAddMore3 = () => {
        setConcertsRows([
            ...concertsRows,
            { startDate: '', media: '', title: '', place: '', },
        ]);
    }

    const handleRemove = (indexToRemove) => {
        const updated = promotions.filter((_, i) => i !== indexToRemove);
        setPromotions(updated);
    };

    const handleRemove2 = (index) => {
        const updatedRows = marketingRows.filter((_, i) => i !== index);
        setMarketingRows(updatedRows);
    };

    const handleRemove3 = (index) => {
        const updatedRows = concertsRows.filter((_, i) => i !== index);
        setConcertsRows(updatedRows);
    };




    return (
        <>
            {/* <div className="container">
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
                            className={`each-release-btn px-3 py-2 rounded ${activeTab === "Territories" ? "bg-dark text-white" : "bg-gray-200 text-dark"}`}
                            onClick={() => setActiveTab("Territories")}
                            style={{ cursor: "pointer" }}
                        >
                            Territories
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

                            <div className="col-md-4">
                                <label className="form-label">Profile<span className="text-danger">*</span></label>
                                <FileUplode />
                            </div>
                            <div className='col-md-4'></div>
                            <div className='col-md-4'></div>

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
                    activeTab === "Territories" && (

                        <div className='form-card p-4'>
                            <div className="terr-container">
                                <div className="region" id="asia">
                                    <h6>Asia</h6>

                                    <label className="modern-checkbox">
                                        <input type="checkbox" />
                                        <span className="custom-box"></span>
                                        <span className="label-text">Afghanistan</span>
                                    </label>

                                    <label className="modern-checkbox">
                                        <input type="checkbox" />
                                        <span className="custom-box"></span>
                                        <span className="label-text">Bangladesh</span>
                                    </label>

                                    <label className="modern-checkbox">
                                        <input type="checkbox" />
                                        <span className="custom-box"></span>
                                        <span className="label-text">India</span>
                                    </label>

                                    <label className="modern-checkbox">
                                        <input type="checkbox" />
                                        <span className="custom-box"></span>
                                        <span className="label-text">Indonesia</span>
                                    </label>

                                    <label className="modern-checkbox">
                                        <input type="checkbox" />
                                        <span className="custom-box"></span>
                                        <span className="label-text">China Mainland</span>
                                    </label>
                                </div>


                                <div className="region" id="europe">
                                    <h6>Europe</h6>

                                    <label className="modern-checkbox">
                                        <input type="checkbox" />
                                        <span className="custom-box"></span>
                                        <span className="label-text">Aland Islands</span>
                                    </label>

                                    <label className="modern-checkbox">
                                        <input type="checkbox" />
                                        <span className="custom-box"></span>
                                        <span className="label-text">Albania</span>
                                    </label>

                                    <label className="modern-checkbox">
                                        <input type="checkbox" />
                                        <span className="custom-box"></span>
                                        <span className="label-text">Austria</span>
                                    </label>

                                    <label className="modern-checkbox">
                                        <input type="checkbox" />
                                        <span className="custom-box"></span>
                                        <span className="label-text">Belarus</span>
                                    </label>

                                    <label className="modern-checkbox">
                                        <input type="checkbox" />
                                        <span className="custom-box"></span>
                                        <span className="label-text">Italy</span>
                                    </label>
                                </div>

                                <div className="region" id="africa">
                                    <h6>Africa</h6>

                                    <label className="modern-checkbox">
                                        <input type="checkbox" />
                                        <span className="custom-box"></span>
                                        <span className="label-text">Algeria</span>
                                    </label>

                                    <label className="modern-checkbox">
                                        <input type="checkbox" />
                                        <span className="custom-box"></span>
                                        <span className="label-text">Botswana</span>
                                    </label>

                                    <label className="modern-checkbox">
                                        <input type="checkbox" />
                                        <span className="custom-box"></span>
                                        <span className="label-text">Zimbabwe</span>
                                    </label>

                                    <label className="modern-checkbox">
                                        <input type="checkbox" />
                                        <span className="custom-box"></span>
                                        <span className="label-text">Senegal</span>
                                    </label>

                                    <label className="modern-checkbox">
                                        <input type="checkbox" />
                                        <span className="custom-box"></span>
                                        <span className="label-text">China Mainland</span>
                                    </label>
                                </div>

                                <div className="region" id="asia">
                                    <h6>Asia</h6>

                                    <label className="modern-checkbox">
                                        <input type="checkbox" />
                                        <span className="custom-box"></span>
                                        <span className="label-text">Afghanistan</span>
                                    </label>

                                    <label className="modern-checkbox">
                                        <input type="checkbox" />
                                        <span className="custom-box"></span>
                                        <span className="label-text">Bangladesh</span>
                                    </label>

                                    <label className="modern-checkbox">
                                        <input type="checkbox" />
                                        <span className="custom-box"></span>
                                        <span className="label-text">India</span>
                                    </label>

                                    <label className="modern-checkbox">
                                        <input type="checkbox" />
                                        <span className="custom-box"></span>
                                        <span className="label-text">Indonesia</span>
                                    </label>

                                    <label className="modern-checkbox">
                                        <input type="checkbox" />
                                        <span className="custom-box"></span>
                                        <span className="label-text">China Mainland</span>
                                    </label>
                                </div>

                                <div className="region" id="asia">
                                    <h6>Asia</h6>

                                    <label className="modern-checkbox">
                                        <input type="checkbox" />
                                        <span className="custom-box"></span>
                                        <span className="label-text">Afghanistan</span>
                                    </label>

                                    <label className="modern-checkbox">
                                        <input type="checkbox" />
                                        <span className="custom-box"></span>
                                        <span className="label-text">Bangladesh</span>
                                    </label>

                                    <label className="modern-checkbox">
                                        <input type="checkbox" />
                                        <span className="custom-box"></span>
                                        <span className="label-text">India</span>
                                    </label>

                                    <label className="modern-checkbox">
                                        <input type="checkbox" />
                                        <span className="custom-box"></span>
                                        <span className="label-text">Indonesia</span>
                                    </label>

                                    <label className="modern-checkbox">
                                        <input type="checkbox" />
                                        <span className="custom-box"></span>
                                        <span className="label-text">China Mainland</span>
                                    </label>
                                </div>

                                <div className="region" id="asia">
                                    <h6>Asia</h6>

                                    <label className="modern-checkbox">
                                        <input type="checkbox" />
                                        <span className="custom-box"></span>
                                        <span className="label-text">Afghanistan</span>
                                    </label>

                                    <label className="modern-checkbox">
                                        <input type="checkbox" />
                                        <span className="custom-box"></span>
                                        <span className="label-text">Bangladesh</span>
                                    </label>

                                    <label className="modern-checkbox">
                                        <input type="checkbox" />
                                        <span className="custom-box"></span>
                                        <span className="label-text">India</span>
                                    </label>

                                    <label className="modern-checkbox">
                                        <input type="checkbox" />
                                        <span className="custom-box"></span>
                                        <span className="label-text">Indonesia</span>
                                    </label>

                                    <label className="modern-checkbox">
                                        <input type="checkbox" />
                                        <span className="custom-box"></span>
                                        <span className="label-text">China Mainland</span>
                                    </label>
                                </div>

                                <div className="region" id="asia">
                                    <h6>Asia</h6>

                                    <label className="modern-checkbox">
                                        <input type="checkbox" />
                                        <span className="custom-box"></span>
                                        <span className="label-text">Afghanistan</span>
                                    </label>

                                    <label className="modern-checkbox">
                                        <input type="checkbox" />
                                        <span className="custom-box"></span>
                                        <span className="label-text">Bangladesh</span>
                                    </label>

                                    <label className="modern-checkbox">
                                        <input type="checkbox" />
                                        <span className="custom-box"></span>
                                        <span className="label-text">India</span>
                                    </label>

                                    <label className="modern-checkbox">
                                        <input type="checkbox" />
                                        <span className="custom-box"></span>
                                        <span className="label-text">Indonesia</span>
                                    </label>

                                    <label className="modern-checkbox">
                                        <input type="checkbox" />
                                        <span className="custom-box"></span>
                                        <span className="label-text">China Mainland</span>
                                    </label>
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
            </div> */}


            <div className="container card py-4">
                <div className="custom-tabs d-flex flex-wrap">
                    <a className={`cursor-pointer ${activeTab == "1" ? "tab-link active" : "tab-link "}`}
                        onClick={() => setActiveTab("1")}
                    >Releases Information
                    </a>

                    <a className={`cursor-pointer ${activeTab == "2" ? "tab-link active" : "tab-link"}`}
                        onClick={() => setActiveTab("2")}>
                        Upload
                    </a>

                    <a className={`cursor-pointer ${activeTab == "3" ? "tab-link active" : "tab-link"}`}
                        onClick={() => setActiveTab("3")}>
                        Tracks
                    </a>

                    <a className={`cursor-pointer ${activeTab == "4" ? "tab-link active" : "tab-link"}`}
                        onClick={() => setActiveTab("4")}
                    >Price
                    </a>

                    <a className={`cursor-pointer ${activeTab == "5" ? "tab-link active" : "tab-link"}`}
                        onClick={() => setActiveTab("5")}
                    >Territories
                    </a>

                    <a className={`cursor-pointer ${activeTab == "6" ? "tab-link active" : "tab-link"}`}
                        onClick={() => setActiveTab("6")}>
                        Release date
                    </a>

                    <a className={`cursor-pointer ${activeTab == "7" ? "tab-link active" : "tab-link"}`}
                        onClick={() => setActiveTab("7")}>
                        Promotion
                    </a>


                    <a className={`cursor-pointer ${activeTab == "8" ? "tab-link active" : "tab-link"}`}
                        onClick={() => setActiveTab("8")}>
                        Submission
                    </a>
                </div>


                {
                    activeTab == '1' && (
                        <form className="custom-form-wrapper">
                            <div className="row gy-3">
                                <div className="col-12 col-md-2 col-lg-2">
                                    <div className="custom-upload-box-nryn position-relative">
                                        {preview ? (
                                            <img src={preview} alt="Preview" className="img-fluid w-100 h-100 object-fit-cover" />
                                        ) : (
                                            <div className="d-flex flex-column align-items-center justify-content-center h-100 text-muted">
                                                <i className="material-symbols-rounded cloud_upload mb-2">cloud_upload</i>
                                            </div>
                                        )}
                                        <input
                                            type="file"
                                            accept="image/*"
                                            className="custom-file-input"
                                            onChange={handleFileChange}
                                        />
                                    </div>
                                    <span className="text-center d-block py-4">Upload cover</span>
                                </div>

                                <div className='col-12 col-md-5 col-lg-5'>
                                    <div className="custom-form-group">
                                        <label>Release title <span className="text-danger">*</span></label>
                                        <input type="text" className="custom-form-control dark-input" />
                                    </div>

                                    <div className="custom-form-group">
                                        <label>Version/Subtitle</label>
                                        <input type="text" className="custom-form-control dark-input" />
                                    </div>

                                    <div className="custom-form-group">
                                        <label>Primary artist <span className="text-danger">*</span></label>
                                        <input type="text" className="custom-form-control dark-input" />
                                    </div>

                                    <div className="custom-form-group">
                                        <label>Featuring</label>
                                        <input type="text" className="custom-form-control dark-input" />
                                    </div>

                                    <div className="custom-form-group">
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" id="compilationCheck" />
                                            <label className="form-check-label" htmlFor="compilationCheck">Various Artists / Compilation</label>
                                        </div>
                                    </div>

                                    <div className="custom-form-group">
                                        <label>Genre <span className="text-danger">*</span></label>
                                        <select className="custom-form-control dark-input">
                                            <option>- Select a genre -</option>
                                            <option>Indian</option>
                                            <option>Folk</option>
                                            <option>Hip Hop</option>
                                            <option>Classical</option>
                                        </select>
                                    </div>

                                    <div className="custom-form-group">
                                        <label>Subgenre <span className="text-danger">*</span></label>
                                        <select className="custom-form-control dark-input">
                                            <option>- Select a sub-genre -</option>
                                            <option>Indian-Dj</option>
                                            <option>Folk-Folk Pop</option>
                                            <option>Hip Hop-Old School Hip Hop </option>
                                            <option>Classical-Relious</option>
                                        </select>
                                    </div>

                                    <div className="custom-form-group">
                                        <label>Label name</label>
                                        <select className="custom-form-control dark-input">
                                            <option>- Select a label -</option>
                                            <option>Sanatan Record</option>
                                        </select>
                                    </div>

                                    <div className="custom-form-group">
                                        <label>Format <span className="text-danger">*</span></label>
                                        <select className="custom-form-control dark-input">
                                            <option>- Select a format -</option>
                                            <option>Single</option>
                                            <option>Ep</option>
                                            <option>Album</option>
                                        </select>
                                    </div>

                                    <div className="custom-form-group">
                                        <label>Physical/Original <br />release date</label>
                                        <input type="date" className="custom-form-control dark-input" />
                                    </div>
                                </div>


                                <div className="col-12 col-md-5 col-lg-5">
                                    <div className="custom-form-group-2">
                                        <label>℗ line <span className="text-danger">*</span></label>
                                        <input type="text" className="custom-form-control dark-input" />
                                    </div>

                                    <div className="custom-form-group-2">
                                        <label>© line <span className="text-danger">*</span></label>
                                        <input type="text" className="custom-form-control dark-input" />
                                    </div>

                                    <div className="custom-form-group-2">
                                        <label>Production <br /> Year <span className="text-danger">*</span></label>
                                        <select className="custom-form-control dark-input">
                                            <option>- Select a year -</option>
                                            <option>2021</option>
                                            <option>2022</option>
                                            <option>2023</option>
                                            <option>2024</option>
                                            <option>2025</option>
                                            <option>2026</option>
                                        </select>
                                    </div>

                                    <div className="custom-form-group-2">
                                        <label>UPC/EAN</label>
                                        <input type="text" className="custom-form-control dark-input" />
                                    </div>

                                    <div className="custom-form-group-2">
                                        <label>Producer <br />catalogue <br />number</label>
                                        <input type="text" className="custom-form-control dark-input" />
                                    </div>
                                </div>
                            </div>
                            <div className='w-100 d-flex justify-content-end mt-3'>
                                <button type="button" className="btn btn-success">save</button>
                            </div>
                        </form>
                    )
                }

                {
                    activeTab == '2' && (
                        <div className="upload-method-container">
                            <div className='row'>
                                <div className='col-12 col-md-3 col-lg-3'>
                                    <div className="card upload-method-sidebar">
                                        <h6 className="sidebar-title">
                                            <i className='material-symbols-rounded mx-2'>upload</i>
                                            Import method
                                        </h6>
                                        <button type="button" className="btn btn-success">Uploader</button>
                                    </div>
                                </div>
                                <div className='col-12 col-md-9 col-lg-9'>
                                    <div className="card uploader-box shadow-sm">
                                        <div className="d-flex gap-3 mb-4">
                                            <button className="btn btn-success px-4">
                                                + Add files
                                            </button>
                                            <button className="btn btn-danger px-4">Cancel all uploads</button>
                                        </div>

                                        <table className="table table-bordered align-middle">
                                            <thead className="table-dark">
                                                <tr>
                                                    <th>File</th>
                                                    <th>Upload</th>
                                                    <th>Check</th>
                                                    <th>Encoding</th>
                                                    <th>Actions</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <div className="file-name"></div>
                                                        <div className="error-text"></div>
                                                        <div className="text-muted small">video</div>
                                                    </td>
                                                    <td className="text-center text-success fw-bold">
                                                        <i className="material-symbols-rounded mb-0 text-success fw-bold text-xxl">check</i>
                                                    </td>
                                                    <td className="text-center text-danger ">
                                                        <i className="material-symbols-rounded mb-0 fw-bold text-danger text-xxl">close</i>
                                                        {/* <br /><span className="text-danger">Wrong format</span> */}
                                                    </td>
                                                    <td className="text-center text-danger">
                                                        <i className='material-symbols-rounded mb-0 fw-bold text-danger text-xxl'>close</i>
                                                    </td>
                                                    <td className="text-center">
                                                        <button className="btn btn-outline-secondary">
                                                            <i className="material-symbols-rounded text-xxl">delete</i>
                                                        </button>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>

                                        <div className="mt-3">
                                            <p className="mb-1">For more information about accepted files:</p>
                                            <a href="#" className="me-2">Audio format</a>
                                            <a href="#" className="me-2">Video format</a>
                                            <a href="#">iTunes video format</a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='w-100 d-flex justify-content-end mt-3'>
                                <button type="button" className="btn btn-success">save</button>
                            </div>
                        </div>
                    )
                }


                {activeTab === '3' && (
                    <div className="row mt-3">
                        <div className="col-12 col-md-2 col-lg-2">
                            <p>Volume 1</p>
                            <div
                                className="border rounded-2 p-1 px-2 text-white d-flex justify-content-center align-items-center cursor-pointer"
                                data-bs-toggle="modal"
                                data-bs-target="#addTrackModal"
                            >
                                <i className="material-symbols-rounded">add</i>
                                <span className="ms-1">Add Track</span>
                            </div>
                        </div>

                        <div className='w-100 d-flex justify-content-end mt-3'>
                            <button type="button" className="btn btn-success">save</button>
                        </div>
                    </div>
                )}

                {/* First Modal - Choose Track */}
                <div className="modal fade" id="addTrackModal" tabIndex="-1" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className=" card modal-content rounded-2">
                            <div className="modal-header">
                                <h5 className="modal-title fw-semibold">Choose the kind of track you want to add</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <div className="form-check mb-2">
                                    <input className="form-check-input" type="radio" name="trackOption" id="emptyTrack" />
                                    <label className="form-check-label" htmlFor="emptyTrack">New empty track</label>
                                </div>
                                <div className="form-check mb-2">
                                    <input className="form-check-input" type="radio" name="trackOption" id="myCatalogue" />
                                    <label className="form-check-label" htmlFor="myCatalogue">Track from my catalogue</label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="trackOption" id="fromISRC" />
                                    <label className="form-check-label" htmlFor="fromISRC">Track from ISRC</label>
                                </div>
                            </div>
                            <div className="modal-footer border-top-0">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-success"
                                    data-bs-toggle="modal"
                                    data-bs-target="#metadataModal">Validate</button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Second Modal - Asset Metadata */}
                <div className="modal fade" id="metadataModal" tabIndex="-1" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered rounded-2 modal-lg secound-popup">
                        <div className="card modal-content rounded-2">
                            <div className="modal-header">
                                <h5 className="modal-title fw-semibold">Assets metadata</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">
                                    <i className="material-symbols-rounded">
                                        close
                                    </i>
                                </button>
                            </div>
                            <div className="modal-body">
                                <form className="custom-form-wrapper">
                                    <div className="row gy-3">
                                        <div className='col-12'>

                                            <div className='custom-form-group justify-content-center'>
                                                <label>Content type<span className="text-danger">*</span></label>
                                                <div className="form-check-2 d-flex justify-contnet-center mb-2">
                                                    <input className="form-check-input" type="radio" name="trackOption" id="emptyTrack" />
                                                    <label className="form-check-label" htmlFor="emptyTrack">Audio</label>

                                                    <input className="form-check-input" type="radio" name="trackOption" id="emptyTrack" />
                                                    <label className="form-check-label" htmlFor="emptyTrack">Video</label>
                                                </div>
                                            </div>

                                            <div className='custom-form-group justify-content-center'>
                                                <label>Primary track type<span className="text-danger">*</span></label>
                                                <div className="form-check-2 d-flex justify-contnet-center mb-2">
                                                    <input className="form-check-input" type="radio" name="trackOption" id="emptyTrack" />
                                                    <label className="form-check-label" htmlFor="emptyTrack">Music</label>
                                                </div>
                                            </div>

                                            <div className='custom-form-group justify-content-center'>
                                                <label>Secondary Track Type<span className="text-danger">*</span></label>
                                                <div className="form-check-2 d-flex justify-contnet-center mb-2">
                                                    <input className="form-check-input" type="radio" name="trackOption" id="emptyTrack" />
                                                    <label className="form-check-label" htmlFor="emptyTrack">Original</label>

                                                    <input className="form-check-input" type="radio" name="trackOption" id="emptyTrack" />
                                                    <label className="form-check-label" htmlFor="emptyTrack">Karaoke</label>

                                                    <input className="form-check-input" type="radio" name="trackOption" id="emptyTrack" />
                                                    <label className="form-check-label" htmlFor="emptyTrack">Medley</label>

                                                    <input className="form-check-input" type="radio" name="trackOption" id="emptyTrack" />
                                                    <label className="form-check-label" htmlFor="emptyTrack">Cover</label>

                                                    <input className="form-check-input" type="radio" name="trackOption" id="emptyTrack" />
                                                    <label className="form-check-label text-nowrap" htmlFor="emptyTrack">Cover by cover band</label>
                                                </div>
                                            </div>

                                            <div className='custom-form-group justify-content-center'>
                                                <label>Instrumental<span className="text-danger">*</span></label>
                                                <div className="form-check-2 d-flex justify-contnet-center mb-2">
                                                    <input className="form-check-input" type="radio" name="trackOption" id="emptyTrack" />
                                                    <label className="form-check-label" htmlFor="emptyTrack">Yes</label>

                                                    <input className="form-check-input" type="radio" name="trackOption" id="emptyTrack" />
                                                    <label className="form-check-label" htmlFor="emptyTrack">No</label>
                                                </div>
                                            </div>

                                            <div className="custom-form-group justify-content-center">
                                                <label>Title <span className="text-danger">*</span></label>
                                                <input type="text" className="custom-form-control dark-input" />
                                            </div>

                                            <div className="custom-form-group justify-content-center">
                                                <label>Version/Subtitle</label>
                                                <input type="text" className="custom-form-control dark-input" />
                                            </div>

                                            <div className="custom-form-group justify-content-center">
                                                <label>Primary artist <span className="text-danger">*</span></label>
                                                <input type="text" className="custom-form-control dark-input" />
                                            </div>

                                            <div className="custom-form-group justify-content-center">
                                                <label>Featuring</label>
                                                <input type="text" className="custom-form-control dark-input" />
                                            </div>

                                            <div className="custom-form-group justify-content-center">
                                                <label>Remixer <span className="text-danger">*</span></label>
                                                <select className="custom-form-control dark-input">
                                                    <option>- Select a genre -</option>
                                                    <option>Sahil</option>
                                                    <option>Sanchit</option>
                                                    <option>Arun</option>
                                                </select>
                                            </div>

                                            <div className="custom-form-group justify-content-center">
                                                <label>Author</label>
                                                <input type="text" className="custom-form-control dark-input" />
                                            </div>

                                            <div className="custom-form-group justify-content-center">
                                                <label>Composer</label>
                                                <input type="text" className="custom-form-control dark-input" />
                                            </div>

                                            <div className="custom-form-group justify-content-center">
                                                <label>Arrenger</label>
                                                <input type="text" className="custom-form-control dark-input" />
                                            </div>

                                            <div className="custom-form-group justify-content-center">
                                                <label>Producer</label>
                                                <input type="text" className="custom-form-control dark-input" />
                                            </div>

                                            <div className="custom-form-group-2 justify-content-center">
                                                <label>℗ line <span className="text-danger">*</span></label>
                                                <input type="text" className="custom-form-control dark-input" />
                                            </div>

                                            <div className="custom-form-group-2 justify-content-center">
                                                <label>Production <br /> Year <span className="text-danger">*</span></label>
                                                <select className="custom-form-control dark-input">
                                                    <option>- Select a year -</option>
                                                    <option>2023</option>
                                                    <option>2024</option>
                                                    <option>2025</option>
                                                    <option>2026</option>
                                                </select>
                                            </div>

                                            <div className="custom-form-group-2 justify-content-center">
                                                <label>Publisher <span className="text-danger">*</span></label>
                                                <input type="text" className="custom-form-control dark-input" />
                                            </div>

                                            <div className="custom-form-group-2 justify-content-center">
                                                <label>ISRC <span className="text-danger">*</span></label>
                                                <input type="text" className="custom-form-control dark-input" placeholder='XX-0X0-00-000' />
                                            </div>

                                            <div className='custom-form-group justify-content-center'>
                                                <label>Ask to generate an ISRC<span className="text-danger">*</span></label>
                                                <div className="form-check-2 d-flex justify-contnet-center mb-2">
                                                    <input className="form-check-input" type="radio" name="trackOption" id="emptyTrack" />
                                                    <label className="form-check-label" htmlFor="emptyTrack">Yes</label>

                                                    <input className="form-check-input" type="radio" name="trackOption" id="emptyTrack" />
                                                    <label className="form-check-label" htmlFor="emptyTrack">No</label>
                                                </div>
                                            </div>


                                            <div className="custom-form-group justify-content-center">
                                                <label>Genre <span className="text-danger">*</span></label>
                                                <select className="custom-form-control dark-input">
                                                    <option>- Select a genre -</option>
                                                    <option>Indian</option>
                                                    <option>Folk</option>
                                                    <option>Hip Hop</option>
                                                    <option>Classical</option>
                                                </select>
                                            </div>

                                            <div className="custom-form-group justify-content-center">
                                                <label>Subgenre <span className="text-danger">*</span></label>
                                                <select className="custom-form-control dark-input">
                                                    <option>- Select a sub-genre -</option>
                                                    <option>Indian-Dj</option>
                                                    <option>Folk-Folk Pop</option>
                                                    <option>Hip Hop-Old School Hip Hop </option>
                                                    <option>Classical-Relious</option>
                                                </select>
                                            </div>

                                            <div className="custom-form-group justify-content-center">
                                                <label>Secondary Genre</label>
                                                <select className="custom-form-control dark-input">
                                                    <option>- Select a label -</option>
                                                    <option>Indian</option>
                                                    <option>Folk</option>
                                                    <option>Hip Hop</option>
                                                    <option>Classical</option>
                                                </select>
                                            </div>

                                            <div className="custom-form-group justify-content-center">
                                                <label>Sub Secondary Genre <span className="text-danger">*</span></label>
                                                <select className="custom-form-control dark-input">
                                                    <option>- Select a format -</option>
                                                    <option>Indian-Dj</option>
                                                    <option>Folk-Folk Pop</option>
                                                    <option>Hip Hop-Old School Hip Hop </option>
                                                    <option>Classical-Relious</option>
                                                </select>
                                            </div>

                                            <div className="custom-form-group justify-content-center">
                                                <label>Price <span className="text-danger">*</span></label>
                                                <select className="custom-form-control dark-input">
                                                    <option>- Select a format -</option>
                                                    <option></option>
                                                    <option></option>
                                                    <option></option>
                                                </select>
                                            </div>

                                            <div className="custom-form-group-2 justify-content-center">
                                                <label>Producer <br />catalogue <br />number</label>
                                                <input type="text" className="custom-form-control dark-input" />
                                            </div>

                                            <div className='custom-form-group justify-content-center'>
                                                <label>Parental advisory<span className="text-danger">*</span></label>
                                                <div className="form-check-2 d-flex justify-contnet-center mb-2">
                                                    <input className="form-check-input" type="radio" name="trackOption" id="emptyTrack" />
                                                    <label className="form-check-label" htmlFor="emptyTrack">Yes</label>

                                                    <input className="form-check-input" type="radio" name="trackOption" id="emptyTrack" />
                                                    <label className="form-check-label" htmlFor="emptyTrack">No</label>

                                                    <input className="form-check-input" type="radio" name="trackOption" id="emptyTrack" />
                                                    <label className="form-check-label" htmlFor="emptyTrack">Cleaned</label>
                                                </div>
                                            </div>

                                            <div className="custom-form-group-2 justify-content-center">
                                                <label>Preview start</label>
                                                <input type="text" className="custom-form-control dark-input" />
                                            </div>

                                            <div className="custom-form-group justify-content-center">
                                                <label>Track title language <span className="text-danger">*</span></label>
                                                <select className="custom-form-control dark-input">
                                                    <option>- Select a format -</option>
                                                </select>
                                            </div>

                                            <div className="custom-form-group justify-content-center">
                                                <label>Lyrics language <span className="text-danger">*</span></label>
                                                <select className="custom-form-control dark-input">
                                                    <option>- Select a format -</option>
                                                </select>
                                            </div>

                                            <div className="custom-form-group justify-content-center">
                                                <label>Lyrics<span className="text-danger">*</span></label>
                                                <textarea className="custom-form-control dark-input"></textarea>
                                            </div>

                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className="modal-footer border-top-0">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary">Save</button>
                            </div>
                        </div>
                    </div>
                </div>


                {
                    activeTab == '4' && (
                        <form className="custom-form-wrapper">
                            <div className='row'>
                                <div className='col-12 '>
                                    <div className="custom-form-group-nyrn">
                                        <label>Choose a main price tier <span className="text-danger">*</span></label>
                                        <select className="custom-form-control dark-input">
                                            <option>- select-</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className='w-100 d-flex justify-content-end mt-3'>
                                <button type="button" className="btn btn-success">save</button>
                            </div>
                        </form>

                    )
                }

                {
                    activeTab == '5' && (
                        <form action="custom-form-wrapper">
                            <div className="terr-container">
                                <div className="region" id="asia">
                                    <h6>Asia</h6>

                                    <label className="modern-checkbox">
                                        <input type="checkbox" />
                                        <span className="custom-box"></span>
                                        <span className="label-text">Afghanistan</span>
                                    </label>

                                    <label className="modern-checkbox">
                                        <input type="checkbox" />
                                        <span className="custom-box"></span>
                                        <span className="label-text">Bangladesh</span>
                                    </label>

                                    <label className="modern-checkbox">
                                        <input type="checkbox" />
                                        <span className="custom-box"></span>
                                        <span className="label-text">India</span>
                                    </label>

                                    <label className="modern-checkbox">
                                        <input type="checkbox" />
                                        <span className="custom-box"></span>
                                        <span className="label-text">Indonesia</span>
                                    </label>

                                    <label className="modern-checkbox">
                                        <input type="checkbox" />
                                        <span className="custom-box"></span>
                                        <span className="label-text">China Mainland</span>
                                    </label>
                                </div>


                                <div className="region" id="europe">
                                    <h6>Europe</h6>

                                    <label className="modern-checkbox">
                                        <input type="checkbox" />
                                        <span className="custom-box"></span>
                                        <span className="label-text">Aland Islands</span>
                                    </label>

                                    <label className="modern-checkbox">
                                        <input type="checkbox" />
                                        <span className="custom-box"></span>
                                        <span className="label-text">Albania</span>
                                    </label>

                                    <label className="modern-checkbox">
                                        <input type="checkbox" />
                                        <span className="custom-box"></span>
                                        <span className="label-text">Austria</span>
                                    </label>

                                    <label className="modern-checkbox">
                                        <input type="checkbox" />
                                        <span className="custom-box"></span>
                                        <span className="label-text">Belarus</span>
                                    </label>

                                    <label className="modern-checkbox">
                                        <input type="checkbox" />
                                        <span className="custom-box"></span>
                                        <span className="label-text">Italy</span>
                                    </label>
                                </div>

                                <div className="region" id="africa">
                                    <h6>Africa</h6>

                                    <label className="modern-checkbox">
                                        <input type="checkbox" />
                                        <span className="custom-box"></span>
                                        <span className="label-text">Algeria</span>
                                    </label>

                                    <label className="modern-checkbox">
                                        <input type="checkbox" />
                                        <span className="custom-box"></span>
                                        <span className="label-text">Botswana</span>
                                    </label>

                                    <label className="modern-checkbox">
                                        <input type="checkbox" />
                                        <span className="custom-box"></span>
                                        <span className="label-text">Zimbabwe</span>
                                    </label>

                                    <label className="modern-checkbox">
                                        <input type="checkbox" />
                                        <span className="custom-box"></span>
                                        <span className="label-text">Senegal</span>
                                    </label>

                                    <label className="modern-checkbox">
                                        <input type="checkbox" />
                                        <span className="custom-box"></span>
                                        <span className="label-text">China Mainland</span>
                                    </label>
                                </div>

                                <div className="region" id="australia">
                                    <h6>Australia</h6>

                                    <label className="modern-checkbox">
                                        <input type="checkbox" />
                                        <span className="custom-box"></span>
                                        <span className="label-text">American Samoa</span>
                                    </label>

                                    <label className="modern-checkbox">
                                        <input type="checkbox" />
                                        <span className="custom-box"></span>
                                        <span className="label-text"> Australia</span>
                                    </label>

                                    <label className="modern-checkbox">
                                        <input type="checkbox" />
                                        <span className="custom-box"></span>
                                        <span className="label-text">Christmas Island</span>
                                    </label>

                                    <label className="modern-checkbox">
                                        <input type="checkbox" />
                                        <span className="custom-box"></span>
                                        <span className="label-text">Cocos (keeling) Islands</span>
                                    </label>

                                    <label className="modern-checkbox">
                                        <input type="checkbox" />
                                        <span className="custom-box"></span>
                                        <span className="label-text">Fiji</span>
                                    </label>
                                </div>

                                <div className="region" id="northamerica">
                                    <h6>North America</h6>

                                    <label className="modern-checkbox">
                                        <input type="checkbox" />
                                        <span className="custom-box"></span>
                                        <span className="label-text">Anguilla</span>
                                    </label>

                                    <label className="modern-checkbox">
                                        <input type="checkbox" />
                                        <span className="custom-box"></span>
                                        <span className="label-text">Antigua And Barbuda</span>
                                    </label>

                                    <label className="modern-checkbox">
                                        <input type="checkbox" />
                                        <span className="custom-box"></span>
                                        <span className="label-text">Bahamas</span>
                                    </label>

                                    <label className="modern-checkbox">
                                        <input type="checkbox" />
                                        <span className="custom-box"></span>
                                        <span className="label-text">Barbados</span>
                                    </label>

                                    <label className="modern-checkbox">
                                        <input type="checkbox" />
                                        <span className="custom-box"></span>
                                        <span className="label-text"> Belize</span>
                                    </label>
                                </div>

                                <div className="region" id="antartica">
                                    <h6>Antartica</h6>

                                    <label className="modern-checkbox">
                                        <input type="checkbox" />
                                        <span className="custom-box"></span>
                                        <span className="label-text"> Antarctica</span>
                                    </label>

                                    <label className="modern-checkbox">
                                        <input type="checkbox" />
                                        <span className="custom-box"></span>
                                        <span className="label-text">Bouvet Island</span>
                                    </label>

                                    <label className="modern-checkbox">
                                        <input type="checkbox" />
                                        <span className="custom-box"></span>
                                        <span className="label-text"> French Southern Territories</span>
                                    </label>
                                </div>

                                <div className="region" id="southamerica">
                                    <h6>South America</h6>

                                    <label className="modern-checkbox">
                                        <input type="checkbox" />
                                        <span className="custom-box"></span>
                                        <span className="label-text">Argentina</span>
                                    </label>

                                    <label className="modern-checkbox">
                                        <input type="checkbox" />
                                        <span className="custom-box"></span>
                                        <span className="label-text">Aruba</span>
                                    </label>

                                    <label className="modern-checkbox">
                                        <input type="checkbox" />
                                        <span className="custom-box"></span>
                                        <span className="label-text">Bolivia</span>
                                    </label>

                                    <label className="modern-checkbox">
                                        <input type="checkbox" />
                                        <span className="custom-box"></span>
                                        <span className="label-text">Brazil</span>
                                    </label>

                                    <label className="modern-checkbox">
                                        <input type="checkbox" />
                                        <span className="custom-box"></span>
                                        <span className="label-text">Chile</span>
                                    </label>
                                </div>
                            </div>
                            <div className='w-100 d-flex justify-content-end mt-3'>
                                <button type="button" className="btn btn-success">save</button>
                            </div>
                        </form>
                    )
                }

                {
                    activeTab == '6' && (
                        <form className="custom-form-wrapper">
                            <div className='row g-4'>

                                <div className="custom-form-group-nyrn">
                                    <label>Choose a main release date<span className='text-danger'>*</span></label>
                                    <input type="date" className="custom-form-control dark-input" />
                                </div>


                                <div className="col-md-4"></div>
                                <div className="col-md-4"></div>

                                <div className="col-md-6">
                                    <label>Add a pre-order date<span className='text-danger'>*</span></label>
                                    <select name="pre-order date" className="custom-form-control dark-input">
                                        <option>-select -</option>
                                        <option value="Low">Low</option>
                                        <option value="medium">Medium</option>
                                        <option value="High">High</option>
                                    </select>
                                </div>

                                <div className="col-md-6">
                                    <label>Add an exclusive release date<span className='text-danger'>*</span></label>
                                    <select name="exclusive release date" className="custom-form-control dark-input">
                                        <option>-select -</option>
                                        <option value="Low">Low</option>
                                        <option value="medium">Medium</option>
                                        <option value="High">High</option>
                                    </select>
                                </div>
                            </div>
                            <div className='w-100 d-flex justify-content-end mt-3'>
                                <button type="button" className="btn btn-success">save</button>
                            </div>
                        </form>
                    )
                }

                {
                    activeTab == '7' && (

                        <form className="custom-form-wrapper">

                            <div className='release-speech'>
                                <p className='border-bottom text-sm'>RELEASE SPEECH</p>
                                <div className='row'>
                                    <div className='col-12 col-md-6 col-lg-6 d-flex flex-column'>
                                        <label className='text-start text-nowrap'>Description in English</label>
                                        <textarea name="description" className='custom-form-control-nyrn dark-input'></textarea>
                                    </div>

                                    <div className='col-12 col-md-6 col-lg-6 d-flex flex-column'>
                                        <label className='text-start text-nowrap'>Other language description</label>
                                        <textarea name="description2" className='custom-form-control-nyrn dark-input'></textarea>
                                    </div>
                                </div>
                            </div>

                            <div className='promotion-information mt-5'>
                                <p className='border-bottom text-sm'>PROMOTION INFORMATION</p>

                                {promotions.map((promo, index) => (
                                    <div className='row mt-3 align-items-start' key={index}>
                                        <div className='col-12 col-md-2 col-lg-2 d-flex flex-column'>
                                            {index === 0 && <label className='text-start text-nowrap'>Type</label>}
                                            <select name="promotion" className="custom-form-control dark-input w-100">
                                                <option>Please select a media</option>
                                                <option value="tv">tv</option>
                                                <option value="press">press</option>
                                                <option value="radio">radio</option>
                                                <option value="web">web</option>
                                                <option value="social">social</option>
                                                <option value="other">other</option>
                                            </select>
                                        </div>

                                        <div className='col-12 col-md-2 col-lg-2 d-flex flex-column'>
                                            {index === 0 && <label className='text-start text-nowrap'>Media title</label>}
                                            <input type="text" className='custom-form-control dark-input w-100' />
                                        </div>

                                        <div className='col-12 col-md-4 col-lg-4 d-flex flex-column'>
                                            {index === 0 && <label className='text-start text-nowrap'>Description</label>}
                                            <input type="text" className='custom-form-control dark-input w-100' />
                                        </div>

                                        <div className='col-12 col-md-3 col-lg-3 d-flex flex-column'>
                                            {index === 0 && <label className='text-nowrap'>Campaign starting date</label>}
                                            <input type="date" className='custom-form-control dark-input w-100' />
                                        </div>

                                        <div className='col-1'>
                                            <button
                                                type="button"
                                                className='btn btn-sm text-white close-button mb-0'
                                                onClick={() => handleRemove(index)}
                                                title="Remove this row"
                                            >
                                                <i className='material-symbols-rounded me-1 text-lg'>close</i>
                                            </button>
                                        </div>
                                    </div>
                                ))}

                                <div className="row mt-3">
                                    <div className="col-12 col-md-2 col-lg-2">
                                        <div
                                            className='border rounded-2 p-1 px-2 text-white d-flex justify-content-center align-items-center cursor-pointer'
                                            onClick={handleAddMore}

                                        >
                                            <i className='material-symbols-rounded me-1'>add</i>
                                            add more
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='marketing-information mt-5'>
                                <p className='border-bottom text-sm'>MARKETING INFORMATION</p>

                                {marketingRows.map((row, index) => (
                                    <div className='row mt-3 align-items-start' key={index}>
                                        <div className='col-12 col-md-2 col-lg-2 d-flex flex-column'>
                                            {index === 0 && <label className='text-start text-nowrap'>Type</label>}
                                            <select className="custom-form-control dark-input w-100">
                                                <option>Please select a media</option>
                                                <option value="tv">tv</option>
                                                <option value="press">press</option>
                                                <option value="radio">radio</option>
                                                <option value="web">web</option>
                                                <option value="social">social</option>
                                                <option value="other">other</option>
                                            </select>
                                        </div>

                                        <div className='col-12 col-md-2 col-lg-2 d-flex flex-column'>
                                            {index === 0 && <label className='text-start text-nowrap'>Media title</label>}
                                            <input type="text" className='custom-form-control dark-input w-100' />
                                        </div>

                                        <div className='col-12 col-md-4 col-lg-4 d-flex flex-column'>
                                            {index === 0 && <label className='text-start text-nowrap'>Description</label>}
                                            <input type="text" className='custom-form-control dark-input w-100' />
                                        </div>

                                        <div className='col-12 col-md-3 col-lg-3 d-flex flex-column'>
                                            {index === 0 && (
                                                <label className='text-nowrap'>Campaign starting date</label>
                                            )}
                                            <input type="date" className='custom-form-control dark-input w-100' />
                                        </div>

                                        <div className='col-1'>
                                            <button
                                                type="button"
                                                className='btn btn-sm text-white close-button mb-0'
                                                onClick={() => handleRemove2(index)}
                                                title="Remove this row"
                                            >
                                                <i className='material-symbols-rounded me-1 text-lg'>close</i>
                                            </button>
                                        </div>
                                    </div>

                                ))}

                                <div className="row mt-3">
                                    <div className="col-12 col-md-2 col-lg-2">
                                        <div
                                            className='border rounded-2 p-1 px-2 text-white d-flex justify-content-center align-items-center cursor-pointer'
                                            onClick={handleAddMore2}
                                        >
                                            <i className='material-symbols-rounded'>add</i>
                                            <span className='ms-1'>add more</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='artist-web-presence mt-5'>
                                <p className='border-bottom text-sm'>ARTIST WEB PRESENCE</p>
                                <div className='row'>
                                    <div className='col-12 col-md-6 col-lg-6'>
                                        <div className='row gy-2'>
                                            <div className='col-12 col-md-3 col-lg-3'>
                                                <div className='social-platform d-flex justify-content-start align-items-center'>
                                                    <i className="fa-brands fa-facebook-f"></i>
                                                    <p className='mb-0'>Facebook</p>
                                                </div>
                                            </div>

                                            <div className='col-12 col-md-6 col-lg-6'>
                                                <input type="text" className='custom-form-control dark-input w-100' />
                                            </div>

                                            <div className='col-12 col-md-3 col-lg-3'>
                                                <input type="text" className='custom-form-control dark-input w-100' placeholder='Followers' />
                                            </div>


                                            <div className='col-12 col-md-3 col-lg-3'>
                                                <div className='social-platform d-flex justify-content-start align-items-center'>
                                                    <i className="fa-brands fa-twitter"></i>
                                                    <p className='mb-0'>Twitter</p>
                                                </div>
                                            </div>

                                            <div className='col-12 col-md-6 col-lg-6'>
                                                <input type="text" className='custom-form-control dark-input w-100' />
                                            </div>

                                            <div className='col-12 col-md-3 col-lg-3'>
                                                <input type="text" className='custom-form-control dark-input w-100' placeholder='Followers' />
                                            </div>

                                            <div className='col-12 col-md-3 col-lg-3'>
                                                <div className='social-platform d-flex justify-content-start align-items-center'>
                                                    <i className="fa-brands fa-tiktok"></i>
                                                    <p className='mb-0'>Tiktok</p>
                                                </div>
                                            </div>

                                            <div className='col-12 col-md-6 col-lg-6'>
                                                <input type="text" className='custom-form-control dark-input w-100' />
                                            </div>

                                            <div className='col-12 col-md-3 col-lg-3'>
                                                <input type="text" className='custom-form-control dark-input w-100' placeholder='Followers' />
                                            </div>

                                            <div className='col-12 col-md-3 col-lg-3'>
                                                <div className='social-platform d-flex justify-content-start align-items-center'>
                                                    <i className="fa-brands fa-instagram"></i>
                                                    <p className='mb-0'>Instagram</p>
                                                </div>
                                            </div>

                                            <div className='col-12 col-md-6 col-lg-6'>
                                                <input type="text" className='custom-form-control dark-input w-100' />
                                            </div>

                                            <div className='col-12 col-md-3 col-lg-3'>
                                                <input type="text" className='custom-form-control dark-input w-100' placeholder='Followers' />
                                            </div>

                                            <div className='col-12 col-md-3 col-lg-3'>
                                                <div className='social-platform d-flex justify-content-start align-items-center'>
                                                    <i className="fa-brands fa-snapchat"></i>
                                                    <p className='mb-0'>Snapchat</p>
                                                </div>
                                            </div>

                                            <div className='col-12 col-md-6 col-lg-6'>
                                                <input type="text" className='custom-form-control dark-input w-100' />
                                            </div>

                                            <div className='col-12 col-md-3 col-lg-3'>
                                                <input type="text" className='custom-form-control dark-input w-100' placeholder='Followers' />
                                            </div>

                                        </div>
                                    </div>

                                    <div className='col-12 col-md-6 col-lg-6'>
                                        <div className='row gy-2'>

                                            <div className='col-12 col-md-3 col-lg-3'>
                                                <div className='social-platform d-flex justify-content-start align-items-center'>
                                                    <i className="fa-brands fa-youtube"></i>
                                                    <p className='mb-0'>Youtube</p>
                                                </div>
                                            </div>

                                            <div className='col-12 col-md-6 col-lg-6'>
                                                <input type="text" className='custom-form-control dark-input w-100' />
                                            </div>

                                            <div className='col-12 col-md-3 col-lg-3'>
                                                <input type="text" className='custom-form-control dark-input w-100' placeholder='Followers' />
                                            </div>


                                            <div className='col-12 col-md-3 col-lg-3'>
                                                <div className='social-platform d-flex justify-content-start align-items-center'>
                                                    <i className="fa-brands fa-wikipedia-w"></i>
                                                    <p className='mb-0'>Wikipedia</p>
                                                </div>
                                            </div>

                                            <div className='col-12 col-md-6 col-lg-6'>
                                                <input type="text" className='custom-form-control dark-input w-100' />
                                            </div>

                                            <div className='col-12 col-md-3 col-lg-3'>
                                                <input type="text" className='custom-form-control dark-input w-100' placeholder='Followers' />
                                            </div>

                                            <div className='col-12 col-md-3 col-lg-3'>
                                                <div className='social-platform d-flex justify-content-start align-items-center'>
                                                    <i className="fa-brands fa-soundcloud"></i>
                                                    <p className='mb-0'>Soundcloud</p>
                                                </div>
                                            </div>

                                            <div className='col-12 col-md-6 col-lg-6'>
                                                <input type="text" className='custom-form-control dark-input w-100' />
                                            </div>

                                            <div className='col-12 col-md-3 col-lg-3'>
                                                <input type="text" className='custom-form-control dark-input w-100' placeholder='Followers' />
                                            </div>

                                            <div className='col-12 col-md-3 col-lg-3'>
                                                <div className='social-platform d-flex justify-content-start align-items-center'>
                                                    <i className="fa-brands fa-weibo"></i>
                                                    <p className='mb-0'>Weibo</p>
                                                </div>
                                            </div>

                                            <div className='col-12 col-md-6 col-lg-6'>
                                                <input type="text" className='custom-form-control dark-input w-100' />
                                            </div>

                                            <div className='col-12 col-md-3 col-lg-3'>
                                                <input type="text" className='custom-form-control dark-input w-100' placeholder='Followers' />
                                            </div>

                                            <div className='col-12 col-md-3 col-lg-3'>
                                                <div className='social-platform d-flex justify-content-start align-items-center'>
                                                    <i className="fa-solid fa-globe"></i>
                                                    <p className='mb-0'>Website</p>
                                                </div>
                                            </div>

                                            <div className='col-12 col-md-6 col-lg-6'>
                                                <input type="text" className='custom-form-control dark-input w-100' />
                                            </div>

                                            <div className='col-12 col-md-3 col-lg-3'>
                                                <input type="text" className='custom-form-control dark-input w-100' placeholder='Followers' />
                                            </div>

                                        </div>


                                    </div>
                                </div>
                            </div>

                            <div className='concerts mt-5'>
                                <p className='border-bottom text-sm'>CONCERTS</p>

                                {concertsRows.map((row, index) => (
                                    <div className='row mt-3 align-items-start' key={index}>
                                        <div className='col-12 col-md-2 col-lg-2 d-flex flex-column'>
                                            {index === 0 && (
                                                <label className='text-start text-nowrap'>Date</label>
                                            )}
                                            <input type="date" className='custom-form-control dark-input w-100' />
                                        </div>

                                        <div className='col-12 col-md-6 col-lg-6 d-flex flex-column'>
                                            {index === 0 && <label className='text-start text-nowrap'>place</label>}
                                            <input type="text" className='custom-form-control dark-input w-100' />
                                        </div>


                                        <div className='col-12 col-md-3 col-lg-3 d-flex flex-column'>
                                            {index === 0 && <label className='text-start text-nowrap'>Type</label>}
                                            <select className="custom-form-control dark-input w-100">
                                                <option>Please select a media</option>
                                                <option value="tv">tv</option>
                                                <option value="press">press</option>
                                                <option value="radio">radio</option>
                                                <option value="web">web</option>
                                                <option value="social">social</option>
                                                <option value="other">other</option>
                                            </select>
                                        </div>

                                        <div className='col-1'>
                                            <button
                                                type="button"
                                                className='btn btn-sm text-white close-button mb-0'
                                                onClick={() => handleRemove3(index)}
                                                title="Remove this row"
                                            >
                                                <i className='material-symbols-rounded me-1 text-lg'>close</i>
                                            </button>
                                        </div>
                                    </div>

                                ))}

                                <div className="row mt-3">
                                    <div className="col-12 col-md-2 col-lg-2">
                                        <div
                                            className='border rounded-2 p-1 px-2 text-white d-flex justify-content-center align-items-center cursor-pointer'
                                            onClick={handleAddMore3}
                                        >
                                            <i className='material-symbols-rounded'>add</i>
                                            <span className='ms-1'>add more</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='artist-sales-history mt-5'>
                                <p className='border-bottom text-sm'>ARTIST SALES HISTORY</p>
                                <div className='row'>
                                    <div className='col-12 col-md-6 col-lg-6'>
                                        <label className='text-start text-nowrap'>Digital releases</label>
                                        <input type="text" className='custom-form-control dark-input w-100' />
                                    </div>

                                    <div className='col-12 col-md-6 col-lg-6'>
                                        <label className='text-start text-nowrap'>Digital tracks</label>
                                        <input type="text" className='custom-form-control dark-input w-100' />
                                    </div>

                                    <div className='col-12 col-md-6 col-lg-6 mt-2'>
                                        <label className='text-start text-nowrap'>Physical releases</label>
                                        <input type="text" className='custom-form-control dark-input w-100' />
                                    </div>

                                    <div className='col-12 col-md-6 col-lg-6 mt-2'>
                                        <label className='text-start text-nowrap'> Physical tracks</label>
                                        <input type="text" className='custom-form-control dark-input w-100' />
                                    </div>
                                </div>
                            </div>

                            <div className='w-100 d-flex justify-content-end mt-3'>
                                <button type="button" className="btn btn-success">save</button>
                            </div>
                        </form>
                    )
                }

                {
                    activeTab == '8' && (
                        <form className="custom-form-wrapper">
                            <button type="button" className="btn btn-success">save</button>
                        </form>
                    )

                }



            </div>
        </>
    );
};

export default Page;
