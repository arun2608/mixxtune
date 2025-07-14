"use client"

import React from 'react'
import Link from 'next/link'

const page = () => {
    return (
        <>
            <div className='container'>
                <div className='row py-3'>
                    <div className='col-12 col-md-8 col-lg-8'>
                        <div className='releases-header bg-white p-3 rounded-3'>
                            <form>
                                <div className="form-group">
                                    <label>Subject <span className="text-danger">*</span></label>
                                    <input type="text" className="form-control" placeholder="subject" />
                                </div>

                                <div className="form-group">
                                    <label>Need help with? <span className="text-danger">*</span></label>
                                    <select className="form-control">
                                        <option>Release</option>
                                        <option>Payment</option>
                                        <option>Bug</option>
                                        <option>Subscription</option>
                                        <option>Feature</option>
                                        <option>Other</option>
                                    </select>
                                </div>

                                <div className="form-group">
                                    <label>Massage <span className="text-danger">*</span></label>
                                    <textarea className="form-control" placeholder="Type your massege here" />
                                </div>

                                <div className='w-30 '>
                                    <Link className=" btn bg-gradient-green text-black w-100" href="#" type="button">
                                        Send
                                    </Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default page