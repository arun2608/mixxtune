"use client"


import React from 'react';
import { Pie, PieChart, AreaChart, Area, BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// const data1 = [
//   {
//     name: 'M',
//     uv: 1000,
//     pv: 2400,
//     amt: 100,
//   },
//   {
//     name: 'T',
//     uv: 3000,
//     pv: 1398,
//     amt: 2210,
//   },
//   {
//     name: 'W',
//     uv: 2000,
//     pv: 9800,
//     amt: 2290,
//   },
//   {
//     name: 'T',
//     uv: 2780,
//     pv: 3908,
//     amt: 2000,
//   },
//   {
//     name: 'F',
//     uv: 1890,
//     pv: 4800,
//     amt: 2181,
//   },
//   {
//     name: 'S',
//     uv: 2390,
//     pv: 3800,
//     amt: 2500,
//   },
//   {
//     name: 'S',
//     uv: 3490,
//     pv: 4300,
//     amt: 2100,
//   },
// ];

const data2 = [
  {
    name: 'M',
    uv: 1000,
    pv: 1400,
    amt: 2400,
  },
  {
    name: 'T',
    uv: 2790,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'W',
    uv: 1700,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'T',
    uv: 3000,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'F',
    uv: 1590,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'S',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'S',
    uv: 2000,
    pv: 4300,
    amt: 2100,
  },
];

// const data01 = [
//   { name: 'Group A', value: 400 },
//   { name: 'Group B', value: 300 },
//   { name: 'Group C', value: 300 },
//   { name: 'Group D', value: 200 },
//   { name: 'Group E', value: 278 },
//   { name: 'Group F', value: 189 },
// ];

// const data02 = [
//   { name: 'Group A', value: 2400 },
//   { name: 'Group B', value: 4567 },
//   { name: 'Group C', value: 1398 },
//   { name: 'Group D', value: 9800 },
//   { name: 'Group E', value: 3908 },
//   { name: 'Group F', value: 4800 },
// ];

export default function Home() {
  return (
    <>

      <div className="container-fluid py-2">

        {/* <div className="row">
          <div className="ms-3">
            <h3 className="mb-0 h4 font-weight-bolder">Dashboard</h3>
            <p className="mb-4">
              Check the sales, value and bounce rate by country.
            </p>
          </div>
          <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4">
            <div className="card">
              <div className="card-header p-2 ps-3">
                <div className="d-flex justify-content-between">
                  <div>
                    <p className="text-sm mb-0 text-capitalize">Today`s Money</p>
                    <h4 className="mb-0">₹53k</h4>
                  </div>
                  <div className="icon icon-md icon-shape bg-gradient-dark shadow-dark shadow text-center border-radius-lg">
                    <i className="material-symbols-rounded opacity-10">weekend</i>
                  </div>
                </div>
              </div>
              <hr className="dark horizontal my-0" />
              <div className="card-footer p-2 ps-3">
                <p className="mb-0 text-sm"><span className="text-success font-weight-bolder">+55% </span>than last week</p>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4">
            <div className="card">
              <div className="card-header p-2 ps-3">
                <div className="d-flex justify-content-between">
                  <div>
                    <p className="text-sm mb-0 text-capitalize">Today`s Users</p>
                    <h4 className="mb-0">2300</h4>
                  </div>
                  <div className="icon icon-md icon-shape bg-gradient-dark shadow-dark shadow text-center border-radius-lg">
                    <i className="material-symbols-rounded opacity-10">person</i>
                  </div>
                </div>
              </div>
              <hr className="dark horizontal my-0" />
              <div className="card-footer p-2 ps-3">
                <p className="mb-0 text-sm"><span className="text-success font-weight-bolder">+3% </span>than last month</p>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4">
            <div className="card">
              <div className="card-header p-2 ps-3">
                <div className="d-flex justify-content-between">
                  <div>
                    <p className="text-sm mb-0 text-capitalize">Ads Views</p>
                    <h4 className="mb-0">3,462</h4>
                  </div>
                  <div className="icon icon-md icon-shape bg-gradient-dark shadow-dark shadow text-center border-radius-lg">
                    <i className="material-symbols-rounded opacity-10">leaderboard</i>
                  </div>
                </div>
              </div>
              <hr className="dark horizontal my-0" />
              <div className="card-footer p-2 ps-3">
                <p className="mb-0 text-sm"><span className="text-danger font-weight-bolder">-2% </span>than yesterday</p>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-sm-6">
            <div className="card">
              <div className="card-header p-2 ps-3">
                <div className="d-flex justify-content-between">
                  <div>
                    <p className="text-sm mb-0 text-capitalize">Sales</p>
                    <h4 className="mb-0">₹103,430</h4>
                  </div>
                  <div className="icon icon-md icon-shape bg-gradient-dark shadow-dark shadow text-center border-radius-lg">
                    <i className="material-symbols-rounded opacity-10">weekend</i>
                  </div>
                </div>
              </div>
              <hr className="dark horizontal my-0" />
              <div className="card-footer p-2 ps-3">
                <p className="mb-0 text-sm"><span className="text-success font-weight-bolder">+5% </span>than yesterday</p>
              </div>
            </div>
          </div>
        </div> */}
        <div className="row">
          {/* <div className="col-lg-4 col-md-6 mt-4 mb-4">
            <div className="card">
              <div className="card-body">
                <h6 className="mb-0 ">Website Views</h6>
                <p className="text-sm ">Last Campaign Performance</p>
                <div className="pe-2">
                  <div className="chart">
                    <div style={{ width: "100%", height: 200 }}>
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart
                          width={500}
                          height={100}
                          data={data1}
                          margin={{
                            top: 5,
                            right: 10,
                            left: 5,
                            bottom: 0,
                          }}
                        >
                          <XAxis dataKey="name" />
                          <YAxis />
                          <Tooltip />
                          <Legend />
                          <Bar dataKey="uv" fill="#43a047" activeBar={<Rectangle fill="gold" stroke="#43a047" />} />
                        </BarChart>
                      </ResponsiveContainer>
                    </div>

                  </div>
                </div>
                <hr className="dark horizontal" />
                <div className="d-flex ">
                  <i className="material-symbols-rounded text-sm my-auto me-1">schedule</i>
                  <p className="mb-0 text-sm"> campaign sent 2 days ago </p>
                </div>
              </div>
            </div>
          </div> */}
          <div className="col-12 mt-4 mb-4">
            <div className="card ">
              <div className="card-body">
                <h6 className="mb-0 "> Your streaming performance </h6>
                <p className="text-sm ">Audio streaming (<span className="font-weight-bolder">Last 28 days</span>)</p>
                <div className="pe-2">
                  <div className="chart">
                    <div style={{ width: '100%', height: 200 }}>
                      <ResponsiveContainer>
                        <AreaChart
                          data={data2}
                          margin={{
                            top: 10,
                            right: 30,
                            left: 0,
                            bottom: 0,
                          }}
                        >
                          <XAxis dataKey="name" />
                          <YAxis />
                          <Tooltip />
                          <Area type="monotone" dataKey="uv" stroke="#43a047" fill="#66bb6a" />
                        </AreaChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                </div>
                <hr className="dark horizontal" />
                <div className="d-flex ">
                  <i className="material-symbols-rounded text-sm my-auto me-1">schedule</i>
                  <p className="mb-0 text-sm"> updated 4 min ago </p>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="col-lg-4 mt-4 mb-3">
            <div className="card">
              <div className="card-body">
                <h6 className="mb-0 ">Completed Tasks</h6>
                <p className="text-sm ">Last Campaign Performance</p>
                <div className="pe-2">
                  <div className="chart">
                    <div style={{ width: '100%', height: 200 }}>
                      <ResponsiveContainer width="100%" height="100%">
                        <PieChart width={400} height={400}>
                          <Pie
                            dataKey="value"
                            isAnimationActive={false}
                            data={data01}
                            cx="50%"
                            cy="50%"
                            outerRadius={80}
                            fill="#43a047"
                            label
                          />
                          <Pie dataKey="value" data={data02} cx={500} cy={200} innerRadius={40} outerRadius={80} fill="#82ca9d" />
                          <Tooltip />
                        </PieChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                </div>
                <hr className="dark horizontal" />
                <div className="d-flex ">
                  <i className="material-symbols-rounded text-sm my-auto me-1">schedule</i>
                  <p className="mb-0 text-sm">just updated</p>
                </div>
              </div>
            </div>
          </div> */}
        </div>

        <div className='row mb-4'>
          <div className='col-12'>
            <div className='card'>
              <div className='card-header pb-4'>
                <h6>Latest Releases</h6>
                <div className='row'>
                  <div className="col-12 col-lg-2 col-md-2">
                    <div className="border border-dashed rounded d-flex flex-column justify-content-center align-items-center p-3 create-new-release">
                      <div className=" fs-1">+</div>
                      <a href="#" className="text-primary  text-xs text-nowrap mt-2">Create a new release</a>
                    </div>
                  </div>
                  <div className="col-12 col-lg-2 col-md-2">
                    <div className="card create-new-release">
                      <img src="/assets/img/illustrations/illustration-signup.jpg" className="card-img-top" alt="Release 1" />
                      <div className="card-body p-1 text-center overlay-releases">
                        <h6 className="mb-0 fw-bold">4</h6>
                        <small className="text-xs text-muted">streams</small>
                      </div>
                    </div>
                  </div>

                  <div className="col-12 col-lg-2 col-md-2">
                    <div className="card create-new-release">
                      <img src="/assets/img/illustrations/pexels-entero-32930806.jpg" className="card-img-top" alt="Release 2" />
                      <div className="card-body p-1 text-center overlay-releases">
                        <h6 className="mb-0 fw-bold">3</h6>
                        <small className="text-xs text-muted">streams</small>
                      </div>
                    </div>
                  </div>

                  <div className="col-12 col-lg-2 col-md-2">
                    <div className="card create-new-release">
                      <img src="/assets/img/illustrations/illustration-signup.jpg" className="card-img-top" alt="Release 3" />
                      <div className="card-body p-1 text-center overlay-releases">
                        <h6 className="mb-0 fw-bold">2</h6>
                        <small className="text-xs text-muted">streams</small>
                      </div>
                    </div>
                  </div>

                  <div className="col-12 col-lg-2 col-md-2">
                    <div className="card create-new-release">
                      <img src="/assets/img/illustrations/pexels-entero-32930806.jpg" className="card-img-top" alt="Release 3" />
                      <div className="card-body p-1 text-center overlay-releases">
                        <h6 className="mb-0 fw-bold">2</h6>
                        <small className="text-xs text-muted">streams</small>
                      </div>
                    </div>
                  </div>

                  <div className="col-12 col-lg-2 col-md-2">
                    <div className="card create-new-release">
                      <img src="/assets/img/illustrations/illustration-signup.jpg" className="card-img-top" alt="Release 3" />
                      <div className="card-body p-1 text-center overlay-releases">
                        <h6 className="mb-0 fw-bold">2</h6>
                        <small className="text-xs text-muted">streams</small>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row mb-4">
          <div className="col-lg-8 col-md-6 mb-md-0 mb-4">
            <div className="card">
              <div className="card-header pb-0">
                <div className="row">
                  <div className="col-lg-6 col-7">
                    <h6>Latest Songs</h6>
                    <p className="text-sm mb-0">
                      <i className="fa fa-check text-info" aria-hidden="true"></i>
                      <span className="font-weight-bold ms-1">30 done</span> this month
                    </p>
                  </div>
                  <div className="col-lg-6 col-5 my-auto text-end">
                    <div className="dropdown float-lg-end pe-4">
                      <a className="cursor-pointer" id="dropdownTable" data-bs-toggle="dropdown" aria-expanded="false">
                        <i className="fa fa-ellipsis-v text-secondary"></i>
                      </a>
                      <ul className="dropdown-menu px-2 py-3 ms-sm-n4 ms-n5" aria-labelledby="dropdownTable">
                        <li><a className="dropdown-item border-radius-md" href="javascript:;">Action</a></li>
                        <li><a className="dropdown-item border-radius-md" href="javascript:;">Another action</a></li>
                        <li><a className="dropdown-item border-radius-md" href="javascript:;">Something else here</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-body px-0 pb-2">
                <div className="table-responsive">
                  <table className="table align-items-center mb-0">
                    <thead>
                      <tr>
                        <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Companies</th>
                        <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Members</th>
                        <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Budget</th>
                        <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Completion</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <div className="d-flex px-2 py-1">
                            <div>
                              <img src="https://demos.creative-tim.com/material-dashboard/assets/img/small-logos/logo-xd.svg" className="avatar avatar-sm me-3" alt="xd" />
                            </div>
                            <div className="d-flex flex-column justify-content-center">
                              <h6 className="mb-0 text-sm">Material XD Version</h6>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="avatar-group mt-2">
                            <a href="javascript:;" className="avatar avatar-xs rounded-circle" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Ryan Tompson">
                              <img src="/assets/img/team-1.jpg" alt="team1" />
                            </a>
                            <a href="javascript:;" className="avatar avatar-xs rounded-circle" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Romina Hadid">
                              <img src="/assets/img/team-2.jpg" alt="team2" />
                            </a>
                            <a href="javascript:;" className="avatar avatar-xs rounded-circle" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Alexander Smith">
                              <img src="/assets/img/team-3.jpg" alt="team3" />
                            </a>
                            <a href="javascript:;" className="avatar avatar-xs rounded-circle" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Jessica Doe">
                              <img src="/assets/img/team-4.jpg" alt="team4" />
                            </a>
                          </div>
                        </td>
                        <td className="align-middle text-center text-sm">
                          <span className="text-xs font-weight-bold"> $14,000 </span>
                        </td>
                        <td className="align-middle">
                          <div className="progress-wrapper w-75 mx-auto">
                            <div className="progress-info">
                              <div className="progress-percentage">
                                <span className="text-xs font-weight-bold">60%</span>
                              </div>
                            </div>
                            <div className="progress">
                              <div className="progress-bar bg-gradient-info w-60" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="d-flex px-2 py-1">
                            <div>
                              <img src="https://demos.creative-tim.com/material-dashboard/assets/img/small-logos/logo-atlassian.svg" className="avatar avatar-sm me-3" alt="atlassian" />
                            </div>
                            <div className="d-flex flex-column justify-content-center">
                              <h6 className="mb-0 text-sm">Add Progress Track</h6>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="avatar-group mt-2">
                            <a href="javascript:;" className="avatar avatar-xs rounded-circle" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Romina Hadid">
                              <img src="/assets/img/team-2.jpg" alt="team5" />
                            </a>
                            <a href="javascript:;" className="avatar avatar-xs rounded-circle" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Jessica Doe">
                              <img src="/assets/img/team-4.jpg" alt="team6" />
                            </a>
                          </div>
                        </td>
                        <td className="align-middle text-center text-sm">
                          <span className="text-xs font-weight-bold"> $3,000 </span>
                        </td>
                        <td className="align-middle">
                          <div className="progress-wrapper w-75 mx-auto">
                            <div className="progress-info">
                              <div className="progress-percentage">
                                <span className="text-xs font-weight-bold">10%</span>
                              </div>
                            </div>
                            <div className="progress">
                              <div className="progress-bar bg-gradient-info w-10" role="progressbar" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="d-flex px-2 py-1">
                            <div>
                              <img src="https://demos.creative-tim.com/material-dashboard/assets/img/small-logos/logo-slack.svg" className="avatar avatar-sm me-3" alt="team7" />
                            </div>
                            <div className="d-flex flex-column justify-content-center">
                              <h6 className="mb-0 text-sm">Fix Platform Errors</h6>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="avatar-group mt-2">
                            <a href="javascript:;" className="avatar avatar-xs rounded-circle" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Romina Hadid">
                              <img src="/assets/img/team-3.jpg" alt="team8" />
                            </a>
                            <a href="javascript:;" className="avatar avatar-xs rounded-circle" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Jessica Doe">
                              <img src="/assets/img/team-1.jpg" alt="team9" />
                            </a>
                          </div>
                        </td>
                        <td className="align-middle text-center text-sm">
                          <span className="text-xs font-weight-bold"> Not set </span>
                        </td>
                        <td className="align-middle">
                          <div className="progress-wrapper w-75 mx-auto">
                            <div className="progress-info">
                              <div className="progress-percentage">
                                <span className="text-xs font-weight-bold">100%</span>
                              </div>
                            </div>
                            <div className="progress">
                              <div className="progress-bar bg-gradient-success w-100" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="d-flex px-2 py-1">
                            <div>
                              <img src="https://demos.creative-tim.com/material-dashboard/assets/img/small-logos/logo-spotify.svg" className="avatar avatar-sm me-3" alt="spotify" />
                            </div>
                            <div className="d-flex flex-column justify-content-center">
                              <h6 className="mb-0 text-sm">Launch our Mobile App</h6>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="avatar-group mt-2">
                            <a href="javascript:;" className="avatar avatar-xs rounded-circle" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Ryan Tompson">
                              <img src="/assets/img/team-4.jpg" alt="user1" />
                            </a>
                            <a href="javascript:;" className="avatar avatar-xs rounded-circle" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Romina Hadid">
                              <img src="/assets/img/team-3.jpg" alt="user2" />
                            </a>
                            <a href="javascript:;" className="avatar avatar-xs rounded-circle" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Alexander Smith">
                              <img src="/assets/img/team-4.jpg" alt="user3" />
                            </a>
                            <a href="javascript:;" className="avatar avatar-xs rounded-circle" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Jessica Doe">
                              <img src="/assets/img/team-1.jpg" alt="user4" />
                            </a>
                          </div>
                        </td>
                        <td className="align-middle text-center text-sm">
                          <span className="text-xs font-weight-bold"> $20,500 </span>
                        </td>
                        <td className="align-middle">
                          <div className="progress-wrapper w-75 mx-auto">
                            <div className="progress-info">
                              <div className="progress-percentage">
                                <span className="text-xs font-weight-bold">100%</span>
                              </div>
                            </div>
                            <div className="progress">
                              <div className="progress-bar bg-gradient-success w-100" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="d-flex px-2 py-1">
                            <div>
                              <img src="https://demos.creative-tim.com/material-dashboard/assets/img/small-logos/logo-jira.svg" className="avatar avatar-sm me-3" alt="jira" />
                            </div>
                            <div className="d-flex flex-column justify-content-center">
                              <h6 className="mb-0 text-sm">Add the New Pricing Page</h6>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="avatar-group mt-2">
                            <a href="javascript:;" className="avatar avatar-xs rounded-circle" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Ryan Tompson">
                              <img src="/assets/img/team-4.jpg" alt="user5" />
                            </a>
                          </div>
                        </td>
                        <td className="align-middle text-center text-sm">
                          <span className="text-xs font-weight-bold"> $500 </span>
                        </td>
                        <td className="align-middle">
                          <div className="progress-wrapper w-75 mx-auto">
                            <div className="progress-info">
                              <div className="progress-percentage">
                                <span className="text-xs font-weight-bold">25%</span>
                              </div>
                            </div>
                            <div className="progress">
                              <div className="progress-bar bg-gradient-info w-25" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="25"></div>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="d-flex px-2 py-1">
                            <div>
                              <img src="https://demos.creative-tim.com/material-dashboard/assets/img/small-logos/logo-invision.svg" className="avatar avatar-sm me-3" alt="invision" />
                            </div>
                            <div className="d-flex flex-column justify-content-center">
                              <h6 className="mb-0 text-sm">Redesign New Online Shop</h6>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="avatar-group mt-2">
                            <a href="javascript:;" className="avatar avatar-xs rounded-circle" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Ryan Tompson">
                              <img src="/assets/img/team-1.jpg" alt="user6" />
                            </a>
                            <a href="javascript:;" className="avatar avatar-xs rounded-circle" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Jessica Doe">
                              <img src="/assets/img/team-4.jpg" alt="user7" />
                            </a>
                          </div>
                        </td>
                        <td className="align-middle text-center text-sm">
                          <span className="text-xs font-weight-bold"> $2,000 </span>
                        </td>
                        <td className="align-middle">
                          <div className="progress-wrapper w-75 mx-auto">
                            <div className="progress-info">
                              <div className="progress-percentage">
                                <span className="text-xs font-weight-bold">40%</span>
                              </div>
                            </div>
                            <div className="progress">
                              <div className="progress-bar bg-gradient-info w-40" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="40"></div>
                            </div>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="card h-100">
              <div className="card-header pb-0">
                <h6>Orders overview</h6>
                <p className="text-sm">
                  <i className="fa fa-arrow-up text-success" aria-hidden="true"></i>
                  <span className="font-weight-bold">24%</span> this month
                </p>
              </div>
              <div className="card-body p-3">
                <div className="timeline timeline-one-side">
                  <div className="timeline-block mb-3">
                    <span className="timeline-step">
                      <i className="material-symbols-rounded text-success text-gradient">notifications</i>
                    </span>
                    <div className="timeline-content">
                      <h6 className="text-dark text-sm font-weight-bold mb-0">$2400, Design changes</h6>
                      <p className="text-secondary font-weight-bold text-xs mt-1 mb-0">22 DEC 7:20 PM</p>
                    </div>
                  </div>
                  <div className="timeline-block mb-3">
                    <span className="timeline-step">
                      <i className="material-symbols-rounded text-danger text-gradient">code</i>
                    </span>
                    <div className="timeline-content">
                      <h6 className="text-dark text-sm font-weight-bold mb-0">New order #1832412</h6>
                      <p className="text-secondary font-weight-bold text-xs mt-1 mb-0">21 DEC 11 PM</p>
                    </div>
                  </div>
                  <div className="timeline-block mb-3">
                    <span className="timeline-step">
                      <i className="material-symbols-rounded text-info text-gradient">shopping_cart</i>
                    </span>
                    <div className="timeline-content">
                      <h6 className="text-dark text-sm font-weight-bold mb-0">Server payments for April</h6>
                      <p className="text-secondary font-weight-bold text-xs mt-1 mb-0">21 DEC 9:34 PM</p>
                    </div>
                  </div>
                  <div className="timeline-block mb-3">
                    <span className="timeline-step">
                      <i className="material-symbols-rounded text-warning text-gradient">credit_card</i>
                    </span>
                    <div className="timeline-content">
                      <h6 className="text-dark text-sm font-weight-bold mb-0">New card added for order #4395133</h6>
                      <p className="text-secondary font-weight-bold text-xs mt-1 mb-0">20 DEC 2:20 AM</p>
                    </div>
                  </div>
                  <div className="timeline-block mb-3">
                    <span className="timeline-step">
                      <i className="material-symbols-rounded text-primary text-gradient">key</i>
                    </span>
                    <div className="timeline-content">
                      <h6 className="text-dark text-sm font-weight-bold mb-0">Unlock packages for development</h6>
                      <p className="text-secondary font-weight-bold text-xs mt-1 mb-0">18 DEC 4:54 AM</p>
                    </div>
                  </div>
                  <div className="timeline-block">
                    <span className="timeline-step">
                      <i className="material-symbols-rounded text-dark text-gradient">payments</i>
                    </span>
                    <div className="timeline-content">
                      <h6 className="text-dark text-sm font-weight-bold mb-0">New order #9583120</h6>
                      <p className="text-secondary font-weight-bold text-xs mt-1 mb-0">17 DEC</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  );
}
