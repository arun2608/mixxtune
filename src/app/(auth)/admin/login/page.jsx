import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <>

      <main className="main-content  mt-0">
        <div className="page-header align-items-start min-vh-100" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1497294815431-9365093b7331?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1950&amp;q=80');" }}>
          <span className="mask bg-gradient-dark opacity-6"></span>
          <div className="container my-auto">
            <div className="row">
              <div className="col-lg-4 col-md-8 col-12 mx-auto">
                <div className="card z-index-0 fadeIn3 fadeInBottom">
                  <div className="card-body">
                    <div className='w-100 d-flex justify-content-center'>
                      <div className='login-logo'>
                        <img src="/assets/img/logos/mixtune-img.webp" alt="" />
                      </div>
                    </div>
                    <form role="form" className="text-start">
                      <div className="input-group input-group-outline my-3">
                        <label className="form-label">Email</label>
                        <input type="email" className="form-control" />
                      </div>
                      <div className="input-group input-group-outline mb-3">
                        <label className="form-label">Password</label>
                        <input type="password" className="form-control" />
                      </div>
                      <div className="form-check form-switch d-flex align-items-center mb-3">
                        <input className="form-check-input" type="checkbox" id="rememberMe" />
                        <label className="form-check-label mb-0 ms-3" htmlFor="rememberMe">Remember me</label>
                      </div>
                      <div className="text-center">
                        <Link href="/">
                          <button type="button" className="btn bg-gradient-dark w-100 my-4 mb-2">Sign in</button>
                        </Link>
                      </div>
                      <p className="mt-4 text-sm text-center">
                        Don't have an account?
                        <Link href="" className="text-primary text-gradient font-weight-bold">Sign up</Link>
                      </p>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default page