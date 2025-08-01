import React from 'react'

const page = () => {
    return (
        <>

            <form className="upload-method-container card">
                <div className='release-speech'>
                    <p className='border-bottom text-sm'>Contact Information</p>
                    <div className='row'>
                        <div className='col-12 col-md-6 col-lg-6 d-flex flex-column'>
                            <label className='text-start text-nowrap'>Login :</label>
                            <input type="text" className='custom-form-control w-100 dark-input' />
                        </div>

                        <div className='col-12 col-md-6 col-lg-6 d-flex flex-column'>
                            <label className='text-start text-nowrap'>Email :</label>
                            <input type="text" className='custom-form-control w-100 dark-input' />
                        </div>
                    </div>
                </div>

                <div className='promotion-information mt-5'>
                    <p className='border-bottom text-sm'>User Access</p>
                    <div className="row mt-3">
                        <div className="col-12 col-md-6 col-lg-6">
                            <div className="custom-form-group d-flex flex-column justify-content-start">
                                <label>Permission Level</label>
                                <select className="custom-form-control dark-input mx-3">
                                    <option>All</option>
                                    <option>Standard User</option>
                                    <option>Advanced User</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className='row'>

                        <div className='col-12 col-md-4 col-lg-4'>
                            <div className="region" id="New Release">
                                <h6>New Release</h6>

                                <label className="modern-checkbox">
                                    <input type="checkbox" />
                                    <span className="custom-box"></span>
                                    <span className="label-text">New release</span>
                                </label>

                                <label className="modern-checkbox">
                                    <input type="checkbox" />
                                    <span className="custom-box"></span>
                                    <span className="label-text">One release</span>
                                </label>

                                <label className="modern-checkbox">
                                    <input type="checkbox" />
                                    <span className="custom-box"></span>
                                    <span className="label-text">Multiple release</span>
                                </label>

                                <label className="modern-checkbox">
                                    <input type="checkbox" />
                                    <span className="custom-box"></span>
                                    <span className="label-text">New release creation tool (access)</span>
                                </label>

                                <label className="modern-checkbox">
                                    <input type="checkbox" />
                                    <span className="custom-box"></span>
                                    <span className="label-text">New release creation tool (Submission)</span>
                                </label>
                            </div>
                        </div>

                        <div className='col-12 col-md-4 col-lg-4'>
                            <div className="region" id="Catalog">
                                <h6>Catalog</h6>

                                <label className="modern-checkbox">
                                    <input type="checkbox" />
                                    <span className="custom-box"></span>
                                    <span className="label-text">All release</span>
                                </label>

                                <label className="modern-checkbox">
                                    <input type="checkbox" />
                                    <span className="custom-box"></span>
                                    <span className="label-text">Draft</span>
                                </label>

                                <label className="modern-checkbox">
                                    <input type="checkbox" />
                                    <span className="custom-box"></span>
                                    <span className="label-text">Correction request</span>
                                </label>
                            </div>
                        </div>

                        <div className='col-12 col-md-4 col-lg-4'>
                            <div className="region" id="Analytics">
                                <h6>Analytics</h6>

                                <label className="modern-checkbox">
                                    <input type="checkbox" />
                                    <span className="custom-box"></span>
                                    <span className="label-text">Daily trend</span>
                                </label>

                                <label className="modern-checkbox">
                                    <input type="checkbox" />
                                    <span className="custom-box"></span>
                                    <span className="label-text">Playlist & Charts</span>
                                </label>

                                <label className="modern-checkbox">
                                    <input type="checkbox" />
                                    <span className="custom-box"></span>
                                    <span className="label-text">Views</span>
                                </label>

                                <label className="modern-checkbox">
                                    <input type="checkbox" />
                                    <span className="custom-box"></span>
                                    <span className="label-text">Short form videos</span>
                                </label>

                                <label className="modern-checkbox">
                                    <input type="checkbox" />
                                    <span className="custom-box"></span>
                                    <span className="label-text">Catalog optimization</span>
                                </label>

                            </div>
                        </div>

                        <div className='col-12 col-md-4 col-lg-4'>
                            <div className="region" id="Promotion">
                                <h6>Promotion</h6>

                                <label className="modern-checkbox">
                                    <input type="checkbox" />
                                    <span className="custom-box"></span>
                                    <span className="label-text">All Products (for all artist, lables, channels)</span>
                                </label>

                            </div>
                        </div>

                        <div className='col-12 col-md-4 col-lg-4'>
                            <div className="region" id="Finance">
                                <h6>Finance</h6>

                                <label className="modern-checkbox">
                                    <input type="checkbox" />
                                    <span className="custom-box"></span>
                                    <span className="label-text">Payment & Opration</span>
                                </label>

                                <label className="modern-checkbox">
                                    <input type="checkbox" />
                                    <span className="custom-box"></span>
                                    <span className="label-text">Financial reports</span>
                                </label>

                            </div>
                        </div>

                        <div className='col-12 col-md-4 col-lg-4'>
                            <div className="region" id="Settings">
                                <h6>Settings</h6>

                                <label className="modern-checkbox">
                                    <input type="checkbox" />
                                    <span className="custom-box"></span>
                                    <span className="label-text">Additional services</span>
                                </label>
                            </div>
                        </div>

                        <div className='col-12 col-md-4 col-lg-4'>
                            <div className="region" id="Settings">
                                <h6>Legal</h6>

                                <label className="modern-checkbox">
                                    <input type="checkbox" />
                                    <span className="custom-box"></span>
                                    <span className="label-text">Rights Manager</span>
                                </label>
                            </div>
                        </div>

                    </div>
                </div>

                <div className='marketing-information mt-5'>
                    <p className='border-bottom text-sm'>Catalog Scope</p>
                    <div className="row mt-3">
                        <div className='col-12 col-md-6 col-lg-6 d-flex flex-column'>
                            <label className='text-start text-nowrap'>Artist :</label>
                            <input type="text" className='custom-form-control w-100 dark-input' placeholder='select artist' />
                        </div>

                        <div className='col-12 col-md-6 col-lg-6 d-flex flex-column'>
                            <label className='text-start text-nowrap'>labels :</label>
                            <input type="text" className='custom-form-control w-100 dark-input' placeholder='select lable'  />
                        </div>

                        <div className='col-12 col-md-6 col-lg-6 d-flex flex-column mt-4'>
                            <label className='text-start text-nowrap'>Channels :</label>
                            <input type="text" className='custom-form-control w-100 dark-input' placeholder='select Channel'  />
                        </div>
                    </div>
                </div>

                <div className='w-100 d-flex justify-content-end mt-3'>
                    <button type="button" className="btn btn-primary">save</button>
                </div>
            </form>

        </>
    )
}

export default page