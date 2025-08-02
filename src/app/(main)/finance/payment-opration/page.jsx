import React from 'react'

const page = () => {
    return (
        <div className="container">
            <h5 className="mb-2">My available balance</h5>
            <p className="text-muted text-sm mb-4">
                Your Available balance is calculated according to your royalties and your advance, if you have an active advance.
                <a href="#">Find out more on the FAQ</a>
            </p>

            <div className="balance-card card">
                <div className="d-flex justify-content-between">
                    <div>
                        <strong className='text-sm'>Empire Media</strong><br />
                        <span className="text-muted text-sm">Payment method : Payoneer</span>
                    </div>
                    <div className="text-end">
                        <div className="text-muted text-xs">Available balance on 31 July 2025</div>
                        <div className="balance-amount">0.00 €</div>
                        <div className="text-muted-small text-xs">Upcoming operations : 0.00 €</div>
                    </div>
                </div>

                <div>
                    <button className="btn btn-secondary text-sm">Payment not available</button>
                </div>

                <p className="text-sm mt-3 mb-3">
                    Payment not available: your balance must exceed the contractual threshold of <strong>100.00 €</strong>.
                </p>

                <hr className="horizontal dark mt-0 mb-2" />

                <a href="#" className="text-decoration-none text-sm">Transaction history & invoices</a>
            </div>
        </div>
    )
}

export default page