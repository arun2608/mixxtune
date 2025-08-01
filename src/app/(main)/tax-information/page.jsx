import React from 'react'

const page = () => {
    return (
        <>
            <div className="main-content">
                <div className="info-box card p-4">
                    <h4 className="mb-4">Tax information</h4>
                    <p><span className="text-danger">*</span> <span className="text-label">Tax Residence Country / Region</span> : <span className="nav-link-text">India</span></p>
                    <p><span className="text-danger">*</span> <span className="text-label">You are ?</span> : <span className="nav-link-text"><em>An individual</em></span></p>
                    <p><span className="text-danger">*</span> <span className="text-label">Tax Number</span> :</p>
                    <ul>
                        <li><span className="text-danger">*</span> <span className="text-label">VAT</span> : <strong>07GLXPM8096J1ZU</strong></li>
                    </ul>
                    <p><span className="text-label">VAT on digital distribution ?</span> : <strong>NO</strong></p>
                    <p><span className="text-danger">*</span> <span className="text-label">Company Registration Number</span> : <strong>UDYAM-DL-06-0051032</strong></p>
                    <p className="help-text">Please contact your Label manager for any update on your tax and legal information</p>
                </div>
            </div>
        </>
    )
}

export default page