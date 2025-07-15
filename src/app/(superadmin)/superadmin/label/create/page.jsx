import React from 'react'

const page = () => {
    return (
        <>

            <div className='container'>
                <div className='row py-3'>
                    <div className='col-12 col-md-8 col-lg-8'>
                        <div className='releases-form bg-white p-3 rounded-3'>
                            <form>
                                <div className="artwork-upload mb-4">
                                    <label htmlFor="artwork" className="label">Label Logo <span className="text-danger">*</span></label>
                                    <div className="upload-box position-relative border border-dashed rounded d-flex align-items-center justify-content-center" style={{ width: "150px", height: "150px", backgroundColor: "#f9f9f9" }}>
                                        <input type="file" id="artwork" className="file-input position-absolute w-100 h-100 opacity-0" />
                                        <p className="upload-text z-1 text-muted">Upload</p>
                                    </div>
                                    <p className="upload-note text-secondary small mt-2">Please Upload 3000x3000 px</p>
                                </div>

                                <div className="form-group">
                                    <label>Label Name<span className="text-danger">*</span></label>
                                    <input type="text" className="form-control" placeholder="Name" />
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className='col-12 col-md-4 col-lg-4 bg-white rounded-3 p-3'>
                        <div className='side-headingn p-3 rounded-3 px-4'>
                            <div className='d-flex justify-content-center align-items-center gap-2'>
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