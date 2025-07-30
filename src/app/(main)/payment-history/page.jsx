'use client';

import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Link from 'next/link';

const Page = () => {
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [step, setStep] = useState(1);
    const [reportType, setReportType] = useState(null);
    const handleNext = () => {
        if (step === 1 && startDate && endDate) {
            setStep(2);
        }
    };

    return (
        <div className='page-wrapper container'>
            <div className='row'>
                <div className='col-12'>
                    <div className='card p-3 rounded-3'>
                        <div className="card my-4">
                            <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                                <div className="bg-gradient-dark shadow-dark border-radius-lg pt-4 pb-3">
                                    <h6 className="text-white text-capitalize ps-3">Available Reports</h6>
                                </div>
                            </div>
                            <div className="card-body pb-2">
                                <div className="table-responsive my-coustome-table p-0">
                                    <table className="table align-items-center mb-0">
                                        <thead>
                                            <tr>
                                                <th className="text-uppercase text-secondary text-xs font-weight-bolder opacity-7 ps-2">Period</th>
                                                <th className="text-uppercase text-secondary text-xs font-weight-bolder opacity-7 ps-2">Report Type</th>
                                                <th className="text-uppercase text-secondary text-xs font-weight-bolder opacity-7 ps-2">Royalty Amount</th>
                                                <th className="text-uppercase text-secondary text-xs font-weight-bolder opacity-7 ps-2">Generation date</th>
                                                <th className="text-uppercase text-secondary text-xs font-weight-bolder opacity-7 ps-2">Status</th>
                                                <th className="text-uppercase text-secondary text-xs font-weight-bolder opacity-7 ps-2">Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td><p className="text-xs mb-0">July 2025</p></td>
                                                <td><p className="text-xs mb-0">Full catalog single report</p></td>
                                                <td><p className="text-xs mb-0 align-items-center"><i className="material-symbols-rounded text-xs">currency_rupee</i>250</p></td>
                                                <td><p className="text-xs mb-0">22/07/2025<br /><span className="text-secondary text-xs">10:40:24</span></p></td>
                                                <td><span className="badge badge-sm bg-gradient-success text-xs">Success</span></td>
                                                <td>
                                                    <Link href="#"><i className="material-symbols-rounded">download</i></Link>
                                                    <Link href="#"><i className="material-symbols-rounded">description</i></Link>
                                                    <Link href="#"><i className="material-symbols-rounded">delete</i></Link>
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


            <div className="report-container card mt-5 p-4">
                <h3 className="title">GENERATE YOUR REPORT</h3>

                <div className="steps d-flex gap-3 my-4">
                    <div className={`step ${step === 1 ? 'active fw-bold text-primary' : ''}`}><span>1</span> Period</div>
                    <div className={`step ${step === 2 ? 'active fw-bold text-primary' : ''}`}><span>2</span> Select the report type</div>
                    <div className={`step ${step === 3 ? 'active fw-bold text-primary' : ''}`}><span>3</span> Generate</div>
                </div>


                <div className="container">
                    {step === 1 && (
                        <div className="card shadow rounded-4 border-0">
                            <div className="card-body p-4">
                                <h5 className="card-title mb-4 fw-bold d-flex align-items-center gap-2">
                                    <i className="material-symbols-rounded">calendar_month</i> Select Period
                                </h5>
                                <div className="row g-4">
                                    <div className="col-md-6">

                                        <label className="form-label fw-semibold d-flex align-items-center gap-2">
                                            <i className="material-symbols-rounded text-md">date_range</i> Start Date
                                        </label>

                                        <DatePicker
                                            selected={startDate}
                                            onChange={(date) => setStartDate(date)}
                                            selectsStart
                                            startDate={startDate}
                                            endDate={endDate}
                                            placeholderText="Select start date"
                                            className="form-control rounded-3 tha-border"
                                        />

                                    </div>
                                    <div className="col-md-6">
                                        <label className="form-label fw-semibold d-flex align-items-center gap-2">
                                            <i className="material-symbols-rounded text-md">date_range</i> End Date
                                        </label>
                                        <DatePicker
                                            selected={endDate}
                                            onChange={(date) => setEndDate(date)}
                                            selectsEnd
                                            startDate={startDate}
                                            endDate={endDate}
                                            minDate={startDate}
                                            placeholderText="Select end date"
                                            className="form-control tha-border rounded-3"
                                        />
                                    </div>
                                </div>
                                <div className="next-button mt-4 text-end">
                                    <button
                                        className="btn bg-gradient-green text-black"
                                        onClick={handleNext}
                                        disabled={!startDate || !endDate}
                                    >
                                        » Next
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}

                    {step === 2 && (
                        <div className="card shadow rounded-4 border-0">
                            <div className="card-body p-4">
                                <h5 className="fw-bold mb-4">Select the report type</h5>

                                <div className="d-flex gap-4 flex-wrap">

                                    <div
                                        className={`report-card p-4 rounded-3 text-center flex-fill ${reportType === 'single' ? 'active' : ''
                                            }`}
                                        onClick={() => setReportType('single')}
                                    >
                                        <h6 className="fw-bold mb-2 cursor-pointer">Single Report</h6>
                                        <p className="text-muted small">Generate one summary report.</p>
                                    </div>


                                    <div
                                        className={`report-card p-4 rounded-3 text-center flex-fill ${reportType === 'multiple' ? 'active' : ''
                                            }`}
                                        onClick={() => setReportType('multiple')}
                                    >
                                        <h6 className="fw-bold mb-2 cursor-pointer">Multiple Reports</h6>
                                        <p className="text-muted small">Get reports split by categories.</p>
                                    </div>
                                </div>


                                <div className="mt-4 d-flex flex-wrap gap-3">
                                    {reportType === 'single' && (
                                        <>
                                            <div className="form-check">
                                                <input className="form-check-input" type="radio" name="singleOptions" id="single1" />
                                                <label className="form-check-label" htmlFor="single1">Full catalog</label>
                                            </div>
                                            <div className="form-check">
                                                <input className="form-check-input" type="radio" name="singleOptions" id="single2" />
                                                <label className="form-check-label" htmlFor="single2">Select artists</label>
                                            </div>
                                            <div className="form-check">
                                                <input className="form-check-input" type="radio" name="singleOptions" id="single3" />
                                                <label className="form-check-label" htmlFor="single3">Select labels</label>
                                            </div>
                                            <div className="form-check">
                                                <input className="form-check-input" type="radio" name="singleOptions" id="single4" />
                                                <label className="form-check-label" htmlFor="single4">Select release</label>
                                            </div>
                                        </>
                                    )}

                                    {reportType === 'multiple' && (
                                        <>
                                            <div className="form-check">
                                                <input className="form-check-input" type="radio" name="multipleOptions" id="multi1" />
                                                <label className="form-check-label" htmlFor="multi1">By labels</label>
                                            </div>
                                            <div className="form-check">
                                                <input className="form-check-input" type="radio" name="multipleOptions" id="multi2" />
                                                <label className="form-check-label" htmlFor="multi2">By platforms</label>
                                            </div>
                                        </>
                                    )}
                                </div>


                                <div className="text-end mt-4">
                                    <button className="btn btn-outline-secondary me-2" onClick={() => setStep(1)}>« Back</button>
                                    <button className="btn bg-gradient-green text-black" onClick={() => setStep(3)}>» Next</button>
                                </div>
                            </div>
                        </div>
                    )}


                    {step === 3 && (
                        <div className="card shadow rounded-4 border-0">
                            <div className="card-body p-4">
                                <h5 className="fw-bold mb-3">Generate</h5>
                                <p>(Final step content, e.g. summary or confirmation)</p>
                                <div className="text-end mt-3">
                                    <button className="btn btn-dark me-2" onClick={() => setStep(2)}>« Back</button>
                                    <button className="btn btn-success">Generate Report</button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Page;
