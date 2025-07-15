"use client";

import React, { useState } from "react";

const FileUplode = () => {
    const [file, setFile] = useState(null);
    const [filePreview, setFilePreview] = useState(null);
    const [isUploading, setIsUploading] = useState(false);

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        if (!selectedFile) return;

        setIsUploading(true);
        setFile(selectedFile);

        const reader = new FileReader();
        reader.onloadend = () => {
            setFilePreview(reader.result);
            setTimeout(() => {
                setIsUploading(false);
            }, 2000);
        };
        reader.readAsDataURL(selectedFile);
    };

   

    const formatSize = (size) => {
        return `${Math.round(size / 1024)} KB`;
    };

    return (
        <div className="custom-upload position-relative">
            <input type="file" id="aadharFront" hidden onChange={handleFileChange} />
            <label htmlFor="aadharFront" className="upload-label">
                {filePreview ? (
                    <div className="preview-box">
                        <img src={filePreview} alt="Preview" className="img-fluid rounded" />

                        {!isUploading && file && (
                            <div className="upload-complete-box">
                                <div className="upload-top-bar d-flex justify-content-between w-100">
                                    <div className="text-sm-start">
                                        <strong className="text-xsm">{file.name}</strong>
                                        <div className="text-xsm text-mine fw-bold">
                                            {formatSize(file.size)}
                                        </div>
                                    </div>

                                    <div className="align-items-center d-flex">
                                        <div className="d-flex flex-column text-sm-end">
                                            <span className="text-xsm me-2 fw-bold">Upload complete</span>
                                            <span className="text-xsm me-2 text-mine fw-bold">tap to undo</span>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        )}

                        {isUploading && (
                            <div className="uploading-overlay">
                                <span>Uploading...</span>
                            </div>
                        )}
                    </div>
                ) : (
                    <span>
                        Drag & Drop your files or <strong>Browse</strong>
                    </span>
                )}
            </label>
        </div>
    );
};

export default FileUplode;
