"use client"

import Link from 'next/link'
import React from 'react'


const page = () => {
    return (
        <>

            <div className='contaniner'>
                <div className='card'>
                    <div className='card-header'>Payment Information</div>
                    <hr className="horizontal dark mt-0 mb-2" />

                    <div className='card-content p-3'>
                        <p className='text-sm'>Your corent Payment method is <strong>Payoneer</strong> because your bank country is <strong>India</strong> the status of your payoneer account ID <strong>45872634</strong> is <span className='text-success'>Active</span> </p>

                        <button className='btn btn-primary'>Go to Payoneer</button>

                        <p className='text-sm'>Your Payoneer account is currenty link to the following bank details</p>

                        <p className='mb-0'>Bank Name: <span className='ms-5'>Sbi Bank</span></p>
                        <p>Account Number: <span className='ms-5'>*****8713</span></p>

                        <p className='text-sm'>If you need to update the bank details linked to your payoneer account, Please first request a verification code below</p>

                        <button className='btn btn-outline-primary'>Request code</button>

                        <p className='text-sm'>If your bank country has changed or is not correct <Link href="#">Click Here</Link>
                        </p>

                        <p className='text-sm'>For any help, you can check our Faq Related to Payoneer</p>
                    </div>
                </div>
            </div>

        </>
    )
}

export default page