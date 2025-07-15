import React from 'react'

const page = () => {
    return (
        <>

            <div className="container py-4">
                <div className="filter-bar mb-3">
                    <div className='d-flex justify-content-center align-items-center gap-2'>
                        <select className="form-select d-inline w-auto">
                            <option>All media items</option>
                        </select>
                        <select className="form-select d-inline w-auto">
                            <option>All dates</option>
                        </select>
                         <button className="btn btn-primary">Bulk select</button>
                    </div>

                    <div>
                        <input type="text" className="form-control" placeholder="Search media" />
                    </div>
                </div>

                <div className="row g-3">

                    <div className="col-6 col-md-4 col-lg-2">
                        <div className="card media-card">
                            <img src="/assets/img/illustrations/pexels-entero-32930806.jpg" className="card-img-top" alt="Album" />
                        </div>
                    </div>


                    <div className="col-6 col-md-4 col-lg-2">
                        <div className="card media-card">
                            <img src="/assets/img/illustrations/illustration-signup.jpg" className="card-img-top" alt="Album" />
                        </div>
                    </div>


                    <div className="col-6 col-md-4 col-lg-2">
                        <div className="card media-card">
                            <img src="/assets/img/illustrations/pexels-entero-32930806.jpg" className="card-img-top" alt="Album" />
                        </div>
                    </div>


                    <div className="col-6 col-md-4 col-lg-2">
                        <div className="card media-card">
                            <img src="/assets/img/illustrations/illustration-signup.jpg" className="card-img-top" alt="Album" />
                        </div>
                    </div>


                    <div className="col-6 col-md-4 col-lg-2">
                        <div className="card media-card">
                            <img src="/assets/img/illustrations/pexels-entero-32930806.jpg" className="card-img-top" alt="Album" />
                        </div>
                    </div>

                    <div className="col-6 col-md-4 col-lg-2">
                        <div className="card media-card">
                            <img src="/assets/img/illustrations/illustration-signup.jpg" className="card-img-top" alt="Album" />
                        </div>
                    </div>

                    <div className="col-6 col-md-4 col-lg-2">
                        <div className="card media-card">
                            <img src="/assets/img/illustrations/pexels-entero-32930806.jpg" className="card-img-top" alt="Album" />
                        </div>
                    </div>

                    <div className="col-6 col-md-4 col-lg-2">
                        <div className="card media-card">
                            <img src="/assets/img/illustrations/pexels-entero-32930806.jpg" className="card-img-top" alt="Album" />
                        </div>
                    </div>


                </div>
            </div>


        </>
    )
}

export default page