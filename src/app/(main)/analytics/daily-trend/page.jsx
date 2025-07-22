"use client"

import React from 'react';
import { Pie, PieChart, AreaChart, Area, BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useState } from 'react';
import Link from 'next/link';



const data1 = [
    {
        name: 'M',
        uv: 1000,
        pv: 2400,
        amt: 100,
    },
    {
        name: 'T',
        uv: 3000,
        pv: 1398,
        amt: 2210,
    },
    {
        name: 'W',
        uv: 2000,
        pv: 9800,
        amt: 2290,
    },
    {
        name: 'T',
        uv: 2780,
        pv: 3908,
        amt: 2000,
    },
    {
        name: 'F',
        uv: 1890,
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
        uv: 3490,
        pv: 4300,
        amt: 2100,
    },
];

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


const data01 = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
    { name: 'Group D', value: 200 },
    { name: 'Group E', value: 278 },
    { name: 'Group F', value: 189 },
];


const page = () => {
    const [activeTab, setActiveTab] = useState("1");

    return (
        <>


            <div className='container-fluid py-2'>
                <h5>CATALOG PERFORMANCE</h5>
                <div className='row'>
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

                    <div className="col-lg-6 col-md-6 mt-4 mb-4">
                        <div className="card">
                            <div className="card-body">
                                <h6 className="mb-0 ">Stores</h6>
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
                    </div>

                    <div className="col-lg-6 mt-4 mb-3">
                        <div className="card">
                            <div className="card-body">
                                <h6 className="mb-0 ">Product Type</h6>
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
                    </div>

                </div>

                <div className='form-card p-3 d-flex justify-content-center'>
                    <div className='header-btn d-flex gap-2'>
                        <div
                            className={`each-release-btn px-2 text-xs py-1 rounded-2 ${activeTab === "1" ? "bg-dark text-white" : "bg-gray-200 text-dark"}`}
                            onClick={() => setActiveTab("1")}
                            style={{ cursor: "pointer" }}
                        >
                            Top Track
                        </div>

                        <div
                            className={`each-release-btn px-2 text-xs py-2 rounded-2 ${activeTab === "2" ? "bg-dark text-white" : "bg-gray-200 text-dark"}`}
                            onClick={() => setActiveTab("2")}
                            style={{ cursor: "pointer" }}
                        >
                            Top Releases
                        </div>

                        <div
                            className={`each-release-btn px-2 text-xs py-2 rounded-2 ${activeTab === "3" ? "bg-dark text-white" : "bg-gray-200 text-dark"}`}
                            onClick={() => setActiveTab("3")}
                            style={{ cursor: "pointer" }}
                        >
                            Top Artists
                        </div>

                        <div
                            className={`each-release-btn px-2 text-xs py-2 rounded-2 ${activeTab === "4" ? "bg-dark text-white" : "bg-gray-200 text-dark"}`}
                            onClick={() => setActiveTab("4")}
                            style={{ cursor: "pointer" }}
                        >
                            Top Label
                        </div>

                        <div
                            className={`each-release-btn px-2 text-xs py-2 rounded-2 ${activeTab === "5" ? "bg-dark text-white" : "bg-gray-200 text-dark"}`}
                            onClick={() => setActiveTab("5")}
                            style={{ cursor: "pointer" }}
                        >
                            Top Videos
                        </div>

                        <div
                            className={`each-release-btn px-2 text-xs py-2 rounded-2 ${activeTab === "6" ? "bg-dark text-white" : "bg-gray-200 text-dark"}`}
                            onClick={() => setActiveTab("6")}
                            style={{ cursor: "pointer" }}
                        >
                            Top Ringtone
                        </div>

                        <div
                            className={`each-release-btn px-2 text-xs py-2 rounded-2 ${activeTab === "7" ? "bg-dark text-white" : "bg-gray-200 text-dark"}`}
                            onClick={() => setActiveTab("7")}
                            style={{ cursor: "pointer" }}
                        >
                            Top Stores
                        </div>

                        <div
                            className={`each-release-btn px-2 text-xs py-2 rounded-2 ${activeTab === "8" ? "bg-dark text-white" : "bg-gray-200 text-dark"}`}
                            onClick={() => setActiveTab("8")}
                            style={{ cursor: "pointer" }}
                        >
                            Top Territories
                        </div>

                    </div>
                </div>

                {activeTab === '1' && (
                    <div className="row">
                        <div className="col-12">
                            <div className="card my-4">
                                <div className="card-body px-0 pb-2">
                                    <div className="table-responsive p-0">
                                        <table className="table align-items-center mb-0">
                                            <thead>
                                                <tr>
                                                    <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">S No.</th>
                                                    <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2"></th>
                                                    <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Title </th>
                                                    <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Release</th>
                                                    <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Release <br />date</th>
                                                    <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Audio <br />Streams</th>
                                                    <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">% Stream</th>
                                                    <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Unique <br />Listeners</th>
                                                    <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Streambr <br /> per user</th>
                                                    <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Track <br />Downloads</th>
                                                    <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Shazam</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>1</td>
                                                    <td>
                                                        <img src="/assets/img/team-2.jpg" className="avatar avatar-sm border-radius-lg" alt="album" />
                                                    </td>
                                                    <td>
                                                        <div className="d-flex flex-column">
                                                            <Link href="#">
                                                                <p className="mb-0 text-xxs text-danger">Sankatmochan  Hanumanstaka</p>
                                                            </Link>
                                                            <p className="text-xxs text-secondary mb-0">By Kapil Koli</p>
                                                        </div>
                                                    </td>
                                                    <td><p className="text-xxs mb-0">Sanatan  Records</p></td>
                                                    <td><p className="text-xxs mb-0">05/29/2024</p></td>
                                                    <td><p className="text-xxs mb-0">513</p></td>
                                                    <td><p className="text-xxs mb-0">34%</p></td>
                                                    <td><p className="text-xxs mb-0">137</p></td>
                                                    <td><p className="text-xxs mb-0">3.94</p></td>
                                                    <td><p className="text-xxs mb-0">0</p></td>
                                                    <td><p className="text-xxs mb-0">0</p></td>
                                                </tr>

                                                <tr>
                                                    <td>2</td>
                                                    <td>
                                                        <img src="/assets/img/team-2.jpg" className="avatar avatar-sm border-radius-lg" alt="album" />
                                                    </td>
                                                    <td>

                                                        <div className="d-flex flex-column">
                                                            <Link href="#">
                                                                <p className="mb-0 text-xxs text-danger">Sankatmochan  Hanumanstaka</p>
                                                            </Link>
                                                            <p className="text-xxs text-secondary mb-0">By Kapil Koli</p>
                                                        </div>

                                                    </td>
                                                    <td><p className="text-xxs mb-0">Sanatan  Records</p></td>
                                                    <td><p className="text-xxs mb-0">05/29/2024</p></td>
                                                    <td><p className="text-xxs mb-0">513</p></td>
                                                    <td><p className="text-xxs mb-0">34%</p></td>
                                                    <td><p className="text-xxs mb-0">137</p></td>
                                                    <td><p className="text-xxs mb-0">3.94</p></td>
                                                    <td><p className="text-xxs mb-0">0</p></td>
                                                    <td><p className="text-xxs mb-0">0</p></td>
                                                </tr>

                                                <tr>
                                                    <td>3</td>
                                                    <td>
                                                        <img src="/assets/img/team-2.jpg" className="avatar avatar-sm border-radius-lg" alt="album" />
                                                    </td>
                                                    <td>

                                                        <div className="d-flex flex-column">
                                                            <Link href="#">
                                                                <p className="mb-0 text-xxs text-danger">Sankatmochan  Hanumanstaka</p>
                                                            </Link>
                                                            <p className="text-xxs text-secondary mb-0">By Kapil Koli</p>
                                                        </div>

                                                    </td>
                                                    <td><p className="text-xxs mb-0">Sanatan  Records</p></td>
                                                    <td><p className="text-xxs mb-0">05/29/2024</p></td>
                                                    <td><p className="text-xxs mb-0">513</p></td>
                                                    <td><p className="text-xxs mb-0">34%</p></td>
                                                    <td><p className="text-xxs mb-0">137</p></td>
                                                    <td><p className="text-xxs mb-0">3.94</p></td>
                                                    <td><p className="text-xxs mb-0">0</p></td>
                                                    <td><p className="text-xxs mb-0">0</p></td>
                                                </tr>

                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )

                }

                {
                    activeTab === "2" && (
                        <div className="row">
                            <div className="col-12">
                                <div className="card my-4">
                                    <div className="card-body px-0 pb-2">
                                        <div className="table-responsive p-0">
                                            <table className="table align-items-center mb-0">
                                                <thead>
                                                    <tr>
                                                        <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">S No.</th>
                                                        <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2"></th>
                                                        <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Title </th>
                                                        <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Release</th>
                                                        <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Release <br />date</th>
                                                        <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Audio <br />Streams</th>
                                                        <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">% Stream</th>
                                                        <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Unique <br />Listeners</th>
                                                        <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Streambr <br /> per user</th>
                                                        <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Track <br />Downloads</th>
                                                        <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Shazam</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>1</td>
                                                        <td>
                                                            <img src="/assets/img/team-2.jpg" className="avatar avatar-sm border-radius-lg" alt="album" />
                                                        </td>
                                                        <td>
                                                            <div className="d-flex flex-column">
                                                                <Link href="#">
                                                                    <p className="mb-0 text-xxs text-danger">Sankatmochan  Hanumanstaka</p>
                                                                </Link>
                                                                <p className="text-xxs text-secondary mb-0">By Kapil Koli</p>
                                                            </div>
                                                        </td>
                                                        <td><p className="text-xxs mb-0">Sanatan  Records</p></td>
                                                        <td><p className="text-xxs mb-0">05/29/2024</p></td>
                                                        <td><p className="text-xxs mb-0">513</p></td>
                                                        <td><p className="text-xxs mb-0">34%</p></td>
                                                        <td><p className="text-xxs mb-0">137</p></td>
                                                        <td><p className="text-xxs mb-0">3.94</p></td>
                                                        <td><p className="text-xxs mb-0">0</p></td>
                                                        <td><p className="text-xxs mb-0">0</p></td>
                                                    </tr>

                                                    <tr>
                                                        <td>2</td>
                                                        <td>
                                                            <img src="/assets/img/team-2.jpg" className="avatar avatar-sm border-radius-lg" alt="album" />
                                                        </td>
                                                        <td>

                                                            <div className="d-flex flex-column">
                                                                <Link href="#">
                                                                    <p className="mb-0 text-xxs text-danger">Sankatmochan  Hanumanstaka</p>
                                                                </Link>
                                                                <p className="text-xxs text-secondary mb-0">By Kapil Koli</p>
                                                            </div>

                                                        </td>
                                                        <td><p className="text-xxs mb-0">Sanatan  Records</p></td>
                                                        <td><p className="text-xxs mb-0">05/29/2024</p></td>
                                                        <td><p className="text-xxs mb-0">513</p></td>
                                                        <td><p className="text-xxs mb-0">34%</p></td>
                                                        <td><p className="text-xxs mb-0">137</p></td>
                                                        <td><p className="text-xxs mb-0">3.94</p></td>
                                                        <td><p className="text-xxs mb-0">0</p></td>
                                                        <td><p className="text-xxs mb-0">0</p></td>
                                                    </tr>

                                                    <tr>
                                                        <td>3</td>
                                                        <td>
                                                            <img src="/assets/img/team-2.jpg" className="avatar avatar-sm border-radius-lg" alt="album" />
                                                        </td>
                                                        <td>

                                                            <div className="d-flex flex-column">
                                                                <Link href="#">
                                                                    <p className="mb-0 text-xxs text-danger">Sankatmochan  Hanumanstaka</p>
                                                                </Link>
                                                                <p className="text-xxs text-secondary mb-0">By Kapil Koli</p>
                                                            </div>

                                                        </td>
                                                        <td><p className="text-xxs mb-0">Sanatan  Records</p></td>
                                                        <td><p className="text-xxs mb-0">05/29/2024</p></td>
                                                        <td><p className="text-xxs mb-0">513</p></td>
                                                        <td><p className="text-xxs mb-0">34%</p></td>
                                                        <td><p className="text-xxs mb-0">137</p></td>
                                                        <td><p className="text-xxs mb-0">3.94</p></td>
                                                        <td><p className="text-xxs mb-0">0</p></td>
                                                        <td><p className="text-xxs mb-0">0</p></td>
                                                    </tr>

                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    )
                }

                {
                    activeTab === "3" && (
                        <div className="row">
                            <div className="col-12">
                                <div className="card my-4">
                                    <div className="card-body px-0 pb-2">
                                        <div className="table-responsive p-0">
                                            <table className="table align-items-center mb-0">
                                                <thead>
                                                    <tr>
                                                        <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">S No.</th>
                                                        <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2"></th>
                                                        <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Artists </th>
                                                        <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Audio <br />Streams</th>
                                                        <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">% Stream</th>
                                                        <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Unique <br />Listeners</th>
                                                        <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Streambr <br /> per user</th>
                                                        <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Track <br />Downloads</th>
                                                        <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Release <br />Downloads</th>
                                                        <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Ringtones</th>
                                                        <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Video <br />Streams</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>1</td>
                                                        <td>
                                                            <img src="/assets/img/team-2.jpg" className="avatar avatar-sm border-radius-lg" alt="album" />
                                                        </td>
                                                        <td>
                                                            <p className="text-xxs text-secondary mb-0">Kapil Koli</p>
                                                        </td>
                                                        <td><p className="text-xxs mb-0">1143</p></td>
                                                        <td><p className="text-xxs mb-0">05/29/2024</p></td>
                                                        <td><p className="text-xxs mb-0">513</p></td>
                                                        <td><p className="text-xxs mb-0">34%</p></td>
                                                        <td><p className="text-xxs mb-0">137</p></td>
                                                        <td><p className="text-xxs mb-0">3.94</p></td>
                                                        <td><p className="text-xxs mb-0">0</p></td>
                                                        <td><p className="text-xxs mb-0">0</p></td>
                                                    </tr>

                                                    <tr>
                                                        <td>2</td>
                                                        <td>
                                                            <img src="/assets/img/team-2.jpg" className="avatar avatar-sm border-radius-lg" alt="album" />
                                                        </td>
                                                        <td>
                                                            <p className="text-xxs text-secondary mb-0">Kapil Koli</p>
                                                        </td>
                                                        <td><p className="text-xxs mb-0">1143</p></td>
                                                        <td><p className="text-xxs mb-0">05/29/2024</p></td>
                                                        <td><p className="text-xxs mb-0">513</p></td>
                                                        <td><p className="text-xxs mb-0">34%</p></td>
                                                        <td><p className="text-xxs mb-0">137</p></td>
                                                        <td><p className="text-xxs mb-0">3.94</p></td>
                                                        <td><p className="text-xxs mb-0">0</p></td>
                                                        <td><p className="text-xxs mb-0">0</p></td>
                                                    </tr>

                                                    <tr>
                                                        <td>3</td>
                                                        <td>
                                                            <img src="/assets/img/team-2.jpg" className="avatar avatar-sm border-radius-lg" alt="album" />
                                                        </td>
                                                        <td>
                                                            <p className="text-xxs text-secondary mb-0">Kapil Koli</p>
                                                        </td>
                                                        <td><p className="text-xxs mb-0">1143</p></td>
                                                        <td><p className="text-xxs mb-0">05/29/2024</p></td>
                                                        <td><p className="text-xxs mb-0">513</p></td>
                                                        <td><p className="text-xxs mb-0">34%</p></td>
                                                        <td><p className="text-xxs mb-0">137</p></td>
                                                        <td><p className="text-xxs mb-0">3.94</p></td>
                                                        <td><p className="text-xxs mb-0">0</p></td>
                                                        <td><p className="text-xxs mb-0">0</p></td>
                                                    </tr>

                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    )
                }

                {
                    activeTab === "4" && (
                        <div className="row">
                            <div className="col-12">
                                <div className="card my-4">
                                    <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                                        <div className="bg-gradient-dark shadow-dark border-radius-lg pt-4 pb-3">
                                            <h6 className="text-white text-capitalize ps-3">All Releases</h6>
                                        </div>
                                    </div>
                                    <div className="card-body px-0 pb-2">
                                        <div className="table-responsive p-0">
                                            <table className="table align-items-center mb-0">
                                                <thead>
                                                    <tr>
                                                        <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Type</th>
                                                        <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Status</th>
                                                        <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Title / Artist</th>
                                                        <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Label</th>
                                                        <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Release date/<br /> Hour / Time zone</th>
                                                        <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">No. of track</th>
                                                        <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">UPC / Catalog Number</th>
                                                        <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Promotion</th>
                                                        <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Delivered  <br />Territories<br /> & Stores</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td><i className="material-symbols-rounded">album</i></td>
                                                        <td><i className="material-symbols-rounded opacity-5">block</i></td>
                                                        <td>
                                                            <div className="d-flex align-items-center gap-2">
                                                                <img src="/assets/img/team-2.jpg" className="avatar avatar-sm border-radius-lg" alt="album" />
                                                                <div className="d-flex flex-column">
                                                                    <Link href="#">
                                                                        <p className="mb-0 text-xxs text-danger">Sankatmochan <br /> Hanumanstaka</p>
                                                                    </Link>
                                                                    <p className="text-xxs text-secondary mb-0">By Kapil Koli</p>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td><p className="text-xxs mb-0">Sanatan <br /> Records</p></td>
                                                        <td><p className="text-xxs mb-0">05/29/2024</p></td>
                                                        <td><p className="text-xxs mb-0">1 Track</p></td>
                                                        <td><p className="text-xxs mb-0">UPC: 3617388727688<br /><span className="text-secondary text-xxs">Cat#: empty</span></p></td>
                                                        <td><Link href="#" className="text-info text-xxs">Promote</Link></td>
                                                        <td>
                                                            <p className="text-xxs mb-0 border p-1 align-items-center d-flex justify-content-center">
                                                                <i className="material-symbols-rounded text-xxs me-4">globe</i>
                                                                240 terrs.
                                                            </p>
                                                            <p className="text-xxs mb-0 border p-1 mt-1 align-items-center d-flex justify-content-center">
                                                                <i className="material-symbols-rounded text-xxs me-4">apps</i>
                                                                0 stores
                                                            </p>
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <td><i className="material-symbols-rounded">album</i></td>
                                                        <td><i className="material-symbols-rounded opacity-5">block</i></td>
                                                        <td>
                                                            <div className="d-flex align-items-center gap-2">
                                                                <img src="/assets/img/team-2.jpg" className="avatar avatar-sm border-radius-lg" alt="album" />
                                                                <div className="d-flex flex-column">
                                                                    <Link href="#">
                                                                        <p className="mb-0 text-xxs">Sankatmochan <br /> Hanumanstaka</p>
                                                                    </Link>
                                                                    <p className="text-xxs text-secondary mb-0">By Sparshika Kapoor</p>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td><p className="text-xxs mb-0">Sanatan <br /> Records</p></td>
                                                        <td><p className="text-xxs mb-0">05/21/2024</p></td>
                                                        <td><p className="text-xxs mb-0">1 Track</p></td>
                                                        <td><p className="text-xxs mb-0">UPC: 3617388437358<br /><span className="text-secondary text-xxs">Cat#: empty</span></p></td>
                                                        <td><Link href="#" className="text-info text-xxs">Promote</Link></td>
                                                        <td>
                                                            <p className="text-xxs mb-0 border p-1 align-items-center d-flex justify-content-center">
                                                                <i className="material-symbols-rounded text-xxs me-4">globe</i>
                                                                240 terrs.
                                                            </p>
                                                            <p className="text-xxs mb-0 border p-1 mt-1 align-items-center d-flex justify-content-center">
                                                                <i className="material-symbols-rounded text-xxs me-4">apps</i>
                                                                0 stores
                                                            </p>
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <td><i className="material-symbols-rounded">album</i></td>
                                                        <td><i className="material-symbols-rounded opacity-5">block</i></td>
                                                        <td>
                                                            <div className="d-flex align-items-center gap-2">
                                                                <img src="/assets/img/team-2.jpg" className="avatar avatar-sm border-radius-lg" alt="album" />
                                                                <div className="d-flex flex-column">
                                                                    <Link href="#">
                                                                        <p className="mb-0 text-xxs">Sankatmochan <br /> Hanumanstaka</p>
                                                                    </Link>
                                                                    <p className="text-xxs text-secondary mb-0">By Sparshika Kapoor</p>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td><p className="text-xxs mb-0">Sanatan <br /> Records</p></td>
                                                        <td><p className="text-xxs mb-0">05/21/2024</p></td>
                                                        <td><p className="text-xxs mb-0">1 Track</p></td>
                                                        <td><p className="text-xxs mb-0">UPC: 3617388437303<br /><span className="text-secondary text-xxs">Cat#: empty</span></p></td>
                                                        <td><Link href="#" className="text-info text-xxs">Promote</Link></td>
                                                        <td>
                                                            <p className="text-xxs mb-0 border p-1 align-items-center d-flex justify-content-center">
                                                                <i className="material-symbols-rounded text-xxs me-4">globe</i>
                                                                240 terrs.
                                                            </p>
                                                            <p className="text-xxs mb-0 border p-1 mt-1 align-items-center d-flex justify-content-center">
                                                                <i className="material-symbols-rounded text-xxs me-4">apps</i>
                                                                0 stores
                                                            </p>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    )
                }

                {
                    activeTab === "5" && (
                        <div className="row">
                            <div className="col-12">
                                <div className="card my-4">
                                    <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                                        <div className="bg-gradient-dark shadow-dark border-radius-lg pt-4 pb-3">
                                            <h6 className="text-white text-capitalize ps-3">All Releases</h6>
                                        </div>
                                    </div>
                                    <div className="card-body px-0 pb-2">
                                        <div className="table-responsive p-0">
                                            <table className="table align-items-center mb-0">
                                                <thead>
                                                    <tr>
                                                        <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Type</th>
                                                        <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Status</th>
                                                        <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Title / Artist</th>
                                                        <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Label</th>
                                                        <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Release date/<br /> Hour / Time zone</th>
                                                        <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">No. of track</th>
                                                        <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">UPC / Catalog Number</th>
                                                        <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Promotion</th>
                                                        <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Delivered  <br />Territories<br /> & Stores</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td><i className="material-symbols-rounded">album</i></td>
                                                        <td><i className="material-symbols-rounded opacity-5">block</i></td>
                                                        <td>
                                                            <div className="d-flex align-items-center gap-2">
                                                                <img src="/assets/img/team-2.jpg" className="avatar avatar-sm border-radius-lg" alt="album" />
                                                                <div className="d-flex flex-column">
                                                                    <Link href="#">
                                                                        <p className="mb-0 text-xxs text-danger">Sankatmochan <br /> Hanumanstaka</p>
                                                                    </Link>
                                                                    <p className="text-xxs text-secondary mb-0">By Kapil Koli</p>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td><p className="text-xxs mb-0">Sanatan <br /> Records</p></td>
                                                        <td><p className="text-xxs mb-0">05/29/2024</p></td>
                                                        <td><p className="text-xxs mb-0">1 Track</p></td>
                                                        <td><p className="text-xxs mb-0">UPC: 3617388727688<br /><span className="text-secondary text-xxs">Cat#: empty</span></p></td>
                                                        <td><Link href="#" className="text-info text-xxs">Promote</Link></td>
                                                        <td>
                                                            <p className="text-xxs mb-0 border p-1 align-items-center d-flex justify-content-center">
                                                                <i className="material-symbols-rounded text-xxs me-4">globe</i>
                                                                240 terrs.
                                                            </p>
                                                            <p className="text-xxs mb-0 border p-1 mt-1 align-items-center d-flex justify-content-center">
                                                                <i className="material-symbols-rounded text-xxs me-4">apps</i>
                                                                0 stores
                                                            </p>
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <td><i className="material-symbols-rounded">album</i></td>
                                                        <td><i className="material-symbols-rounded opacity-5">block</i></td>
                                                        <td>
                                                            <div className="d-flex align-items-center gap-2">
                                                                <img src="/assets/img/team-2.jpg" className="avatar avatar-sm border-radius-lg" alt="album" />
                                                                <div className="d-flex flex-column">
                                                                    <Link href="#">
                                                                        <p className="mb-0 text-xxs">Sankatmochan <br /> Hanumanstaka</p>
                                                                    </Link>
                                                                    <p className="text-xxs text-secondary mb-0">By Sparshika Kapoor</p>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td><p className="text-xxs mb-0">Sanatan <br /> Records</p></td>
                                                        <td><p className="text-xxs mb-0">05/21/2024</p></td>
                                                        <td><p className="text-xxs mb-0">1 Track</p></td>
                                                        <td><p className="text-xxs mb-0">UPC: 3617388437358<br /><span className="text-secondary text-xxs">Cat#: empty</span></p></td>
                                                        <td><Link href="#" className="text-info text-xxs">Promote</Link></td>
                                                        <td>
                                                            <p className="text-xxs mb-0 border p-1 align-items-center d-flex justify-content-center">
                                                                <i className="material-symbols-rounded text-xxs me-4">globe</i>
                                                                240 terrs.
                                                            </p>
                                                            <p className="text-xxs mb-0 border p-1 mt-1 align-items-center d-flex justify-content-center">
                                                                <i className="material-symbols-rounded text-xxs me-4">apps</i>
                                                                0 stores
                                                            </p>
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <td><i className="material-symbols-rounded">album</i></td>
                                                        <td><i className="material-symbols-rounded opacity-5">block</i></td>
                                                        <td>
                                                            <div className="d-flex align-items-center gap-2">
                                                                <img src="/assets/img/team-2.jpg" className="avatar avatar-sm border-radius-lg" alt="album" />
                                                                <div className="d-flex flex-column">
                                                                    <Link href="#">
                                                                        <p className="mb-0 text-xxs">Sankatmochan <br /> Hanumanstaka</p>
                                                                    </Link>
                                                                    <p className="text-xxs text-secondary mb-0">By Sparshika Kapoor</p>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td><p className="text-xxs mb-0">Sanatan <br /> Records</p></td>
                                                        <td><p className="text-xxs mb-0">05/21/2024</p></td>
                                                        <td><p className="text-xxs mb-0">1 Track</p></td>
                                                        <td><p className="text-xxs mb-0">UPC: 3617388437303<br /><span className="text-secondary text-xxs">Cat#: empty</span></p></td>
                                                        <td><Link href="#" className="text-info text-xxs">Promote</Link></td>
                                                        <td>
                                                            <p className="text-xxs mb-0 border p-1 align-items-center d-flex justify-content-center">
                                                                <i className="material-symbols-rounded text-xxs me-4">globe</i>
                                                                240 terrs.
                                                            </p>
                                                            <p className="text-xxs mb-0 border p-1 mt-1 align-items-center d-flex justify-content-center">
                                                                <i className="material-symbols-rounded text-xxs me-4">apps</i>
                                                                0 stores
                                                            </p>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                    )
                }

                {
                    activeTab === "6" && (
                        <div className="row">
                            <div className="col-12">
                                <div className="card my-4">
                                    <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                                        <div className="bg-gradient-dark shadow-dark border-radius-lg pt-4 pb-3">
                                            <h6 className="text-white text-capitalize ps-3">All Releases</h6>
                                        </div>
                                    </div>
                                    <div className="card-body px-0 pb-2">
                                        <div className="table-responsive p-0">
                                            <table className="table align-items-center mb-0">
                                                <thead>
                                                    <tr>
                                                        <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Type</th>
                                                        <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Status</th>
                                                        <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Title / Artist</th>
                                                        <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Label</th>
                                                        <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Release date/<br /> Hour / Time zone</th>
                                                        <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">No. of track</th>
                                                        <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">UPC / Catalog Number</th>
                                                        <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Promotion</th>
                                                        <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Delivered  <br />Territories<br /> & Stores</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td><i className="material-symbols-rounded">album</i></td>
                                                        <td><i className="material-symbols-rounded opacity-5">block</i></td>
                                                        <td>
                                                            <div className="d-flex align-items-center gap-2">
                                                                <img src="/assets/img/team-2.jpg" className="avatar avatar-sm border-radius-lg" alt="album" />
                                                                <div className="d-flex flex-column">
                                                                    <Link href="#">
                                                                        <p className="mb-0 text-xxs text-danger">Sankatmochan <br /> Hanumanstaka</p>
                                                                    </Link>
                                                                    <p className="text-xxs text-secondary mb-0">By Kapil Koli</p>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td><p className="text-xxs mb-0">Sanatan <br /> Records</p></td>
                                                        <td><p className="text-xxs mb-0">05/29/2024</p></td>
                                                        <td><p className="text-xxs mb-0">1 Track</p></td>
                                                        <td><p className="text-xxs mb-0">UPC: 3617388727688<br /><span className="text-secondary text-xxs">Cat#: empty</span></p></td>
                                                        <td><Link href="#" className="text-info text-xxs">Promote</Link></td>
                                                        <td>
                                                            <p className="text-xxs mb-0 border p-1 align-items-center d-flex justify-content-center">
                                                                <i className="material-symbols-rounded text-xxs me-4">globe</i>
                                                                240 terrs.
                                                            </p>
                                                            <p className="text-xxs mb-0 border p-1 mt-1 align-items-center d-flex justify-content-center">
                                                                <i className="material-symbols-rounded text-xxs me-4">apps</i>
                                                                0 stores
                                                            </p>
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <td><i className="material-symbols-rounded">album</i></td>
                                                        <td><i className="material-symbols-rounded opacity-5">block</i></td>
                                                        <td>
                                                            <div className="d-flex align-items-center gap-2">
                                                                <img src="/assets/img/team-2.jpg" className="avatar avatar-sm border-radius-lg" alt="album" />
                                                                <div className="d-flex flex-column">
                                                                    <Link href="#">
                                                                        <p className="mb-0 text-xxs">Sankatmochan <br /> Hanumanstaka</p>
                                                                    </Link>
                                                                    <p className="text-xxs text-secondary mb-0">By Sparshika Kapoor</p>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td><p className="text-xxs mb-0">Sanatan <br /> Records</p></td>
                                                        <td><p className="text-xxs mb-0">05/21/2024</p></td>
                                                        <td><p className="text-xxs mb-0">1 Track</p></td>
                                                        <td><p className="text-xxs mb-0">UPC: 3617388437358<br /><span className="text-secondary text-xxs">Cat#: empty</span></p></td>
                                                        <td><Link href="#" className="text-info text-xxs">Promote</Link></td>
                                                        <td>
                                                            <p className="text-xxs mb-0 border p-1 align-items-center d-flex justify-content-center">
                                                                <i className="material-symbols-rounded text-xxs me-4">globe</i>
                                                                240 terrs.
                                                            </p>
                                                            <p className="text-xxs mb-0 border p-1 mt-1 align-items-center d-flex justify-content-center">
                                                                <i className="material-symbols-rounded text-xxs me-4">apps</i>
                                                                0 stores
                                                            </p>
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <td><i className="material-symbols-rounded">album</i></td>
                                                        <td><i className="material-symbols-rounded opacity-5">block</i></td>
                                                        <td>
                                                            <div className="d-flex align-items-center gap-2">
                                                                <img src="/assets/img/team-2.jpg" className="avatar avatar-sm border-radius-lg" alt="album" />
                                                                <div className="d-flex flex-column">
                                                                    <Link href="#">
                                                                        <p className="mb-0 text-xxs">Sankatmochan <br /> Hanumanstaka</p>
                                                                    </Link>
                                                                    <p className="text-xxs text-secondary mb-0">By Sparshika Kapoor</p>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td><p className="text-xxs mb-0">Sanatan <br /> Records</p></td>
                                                        <td><p className="text-xxs mb-0">05/21/2024</p></td>
                                                        <td><p className="text-xxs mb-0">1 Track</p></td>
                                                        <td><p className="text-xxs mb-0">UPC: 3617388437303<br /><span className="text-secondary text-xxs">Cat#: empty</span></p></td>
                                                        <td><Link href="#" className="text-info text-xxs">Promote</Link></td>
                                                        <td>
                                                            <p className="text-xxs mb-0 border p-1 align-items-center d-flex justify-content-center">
                                                                <i className="material-symbols-rounded text-xxs me-4">globe</i>
                                                                240 terrs.
                                                            </p>
                                                            <p className="text-xxs mb-0 border p-1 mt-1 align-items-center d-flex justify-content-center">
                                                                <i className="material-symbols-rounded text-xxs me-4">apps</i>
                                                                0 stores
                                                            </p>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    )
                }

                {
                    activeTab === "7" && (
                        <div className="row">
                            <div className="col-12">
                                <div className="card my-4">
                                    <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                                        <div className="bg-gradient-dark shadow-dark border-radius-lg pt-4 pb-3">
                                            <h6 className="text-white text-capitalize ps-3">All Releases</h6>
                                        </div>
                                    </div>
                                    <div className="card-body px-0 pb-2">
                                        <div className="table-responsive p-0">
                                            <table className="table align-items-center mb-0">
                                                <thead>
                                                    <tr>
                                                        <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Type</th>
                                                        <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Status</th>
                                                        <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Title / Artist</th>
                                                        <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Label</th>
                                                        <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Release date/<br /> Hour / Time zone</th>
                                                        <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">No. of track</th>
                                                        <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">UPC / Catalog Number</th>
                                                        <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Promotion</th>
                                                        <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Delivered  <br />Territories<br /> & Stores</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td><i className="material-symbols-rounded">album</i></td>
                                                        <td><i className="material-symbols-rounded opacity-5">block</i></td>
                                                        <td>
                                                            <div className="d-flex align-items-center gap-2">
                                                                <img src="/assets/img/team-2.jpg" className="avatar avatar-sm border-radius-lg" alt="album" />
                                                                <div className="d-flex flex-column">
                                                                    <Link href="#">
                                                                        <p className="mb-0 text-xxs text-danger">Sankatmochan <br /> Hanumanstaka</p>
                                                                    </Link>
                                                                    <p className="text-xxs text-secondary mb-0">By Kapil Koli</p>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td><p className="text-xxs mb-0">Sanatan <br /> Records</p></td>
                                                        <td><p className="text-xxs mb-0">05/29/2024</p></td>
                                                        <td><p className="text-xxs mb-0">1 Track</p></td>
                                                        <td><p className="text-xxs mb-0">UPC: 3617388727688<br /><span className="text-secondary text-xxs">Cat#: empty</span></p></td>
                                                        <td><Link href="#" className="text-info text-xxs">Promote</Link></td>
                                                        <td>
                                                            <p className="text-xxs mb-0 border p-1 align-items-center d-flex justify-content-center">
                                                                <i className="material-symbols-rounded text-xxs me-4">globe</i>
                                                                240 terrs.
                                                            </p>
                                                            <p className="text-xxs mb-0 border p-1 mt-1 align-items-center d-flex justify-content-center">
                                                                <i className="material-symbols-rounded text-xxs me-4">apps</i>
                                                                0 stores
                                                            </p>
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <td><i className="material-symbols-rounded">album</i></td>
                                                        <td><i className="material-symbols-rounded opacity-5">block</i></td>
                                                        <td>
                                                            <div className="d-flex align-items-center gap-2">
                                                                <img src="/assets/img/team-2.jpg" className="avatar avatar-sm border-radius-lg" alt="album" />
                                                                <div className="d-flex flex-column">
                                                                    <Link href="#">
                                                                        <p className="mb-0 text-xxs">Sankatmochan <br /> Hanumanstaka</p>
                                                                    </Link>
                                                                    <p className="text-xxs text-secondary mb-0">By Sparshika Kapoor</p>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td><p className="text-xxs mb-0">Sanatan <br /> Records</p></td>
                                                        <td><p className="text-xxs mb-0">05/21/2024</p></td>
                                                        <td><p className="text-xxs mb-0">1 Track</p></td>
                                                        <td><p className="text-xxs mb-0">UPC: 3617388437358<br /><span className="text-secondary text-xxs">Cat#: empty</span></p></td>
                                                        <td><Link href="#" className="text-info text-xxs">Promote</Link></td>
                                                        <td>
                                                            <p className="text-xxs mb-0 border p-1 align-items-center d-flex justify-content-center">
                                                                <i className="material-symbols-rounded text-xxs me-4">globe</i>
                                                                240 terrs.
                                                            </p>
                                                            <p className="text-xxs mb-0 border p-1 mt-1 align-items-center d-flex justify-content-center">
                                                                <i className="material-symbols-rounded text-xxs me-4">apps</i>
                                                                0 stores
                                                            </p>
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <td><i className="material-symbols-rounded">album</i></td>
                                                        <td><i className="material-symbols-rounded opacity-5">block</i></td>
                                                        <td>
                                                            <div className="d-flex align-items-center gap-2">
                                                                <img src="/assets/img/team-2.jpg" className="avatar avatar-sm border-radius-lg" alt="album" />
                                                                <div className="d-flex flex-column">
                                                                    <Link href="#">
                                                                        <p className="mb-0 text-xxs">Sankatmochan <br /> Hanumanstaka</p>
                                                                    </Link>
                                                                    <p className="text-xxs text-secondary mb-0">By Sparshika Kapoor</p>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td><p className="text-xxs mb-0">Sanatan <br /> Records</p></td>
                                                        <td><p className="text-xxs mb-0">05/21/2024</p></td>
                                                        <td><p className="text-xxs mb-0">1 Track</p></td>
                                                        <td><p className="text-xxs mb-0">UPC: 3617388437303<br /><span className="text-secondary text-xxs">Cat#: empty</span></p></td>
                                                        <td><Link href="#" className="text-info text-xxs">Promote</Link></td>
                                                        <td>
                                                            <p className="text-xxs mb-0 border p-1 align-items-center d-flex justify-content-center">
                                                                <i className="material-symbols-rounded text-xxs me-4">globe</i>
                                                                240 terrs.
                                                            </p>
                                                            <p className="text-xxs mb-0 border p-1 mt-1 align-items-center d-flex justify-content-center">
                                                                <i className="material-symbols-rounded text-xxs me-4">apps</i>
                                                                0 stores
                                                            </p>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    )
                }

                {
                    activeTab === "8" && (
                        <div className="row">
                            <div className="col-12">
                                <div className="card my-4">
                                    <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                                        <div className="bg-gradient-dark shadow-dark border-radius-lg pt-4 pb-3">
                                            <h6 className="text-white text-capitalize ps-3">All Releases</h6>
                                        </div>
                                    </div>
                                    <div className="card-body px-0 pb-2">
                                        <div className="table-responsive p-0">
                                            <table className="table align-items-center mb-0">
                                                <thead>
                                                    <tr>
                                                        <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Type</th>
                                                        <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Status</th>
                                                        <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Title / Artist</th>
                                                        <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Label</th>
                                                        <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Release date/<br /> Hour / Time zone</th>
                                                        <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">No. of track</th>
                                                        <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">UPC / Catalog Number</th>
                                                        <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Promotion</th>
                                                        <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Delivered  <br />Territories<br /> & Stores</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td><i className="material-symbols-rounded">album</i></td>
                                                        <td><i className="material-symbols-rounded opacity-5">block</i></td>
                                                        <td>
                                                            <div className="d-flex align-items-center gap-2">
                                                                <img src="/assets/img/team-2.jpg" className="avatar avatar-sm border-radius-lg" alt="album" />
                                                                <div className="d-flex flex-column">
                                                                    <Link href="#">
                                                                        <p className="mb-0 text-xxs text-danger">Sankatmochan <br /> Hanumanstaka</p>
                                                                    </Link>
                                                                    <p className="text-xxs text-secondary mb-0">By Kapil Koli</p>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td><p className="text-xxs mb-0">Sanatan <br /> Records</p></td>
                                                        <td><p className="text-xxs mb-0">05/29/2024</p></td>
                                                        <td><p className="text-xxs mb-0">1 Track</p></td>
                                                        <td><p className="text-xxs mb-0">UPC: 3617388727688<br /><span className="text-secondary text-xxs">Cat#: empty</span></p></td>
                                                        <td><Link href="#" className="text-info text-xxs">Promote</Link></td>
                                                        <td>
                                                            <p className="text-xxs mb-0 border p-1 align-items-center d-flex justify-content-center">
                                                                <i className="material-symbols-rounded text-xxs me-4">globe</i>
                                                                240 terrs.
                                                            </p>
                                                            <p className="text-xxs mb-0 border p-1 mt-1 align-items-center d-flex justify-content-center">
                                                                <i className="material-symbols-rounded text-xxs me-4">apps</i>
                                                                0 stores
                                                            </p>
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <td><i className="material-symbols-rounded">album</i></td>
                                                        <td><i className="material-symbols-rounded opacity-5">block</i></td>
                                                        <td>
                                                            <div className="d-flex align-items-center gap-2">
                                                                <img src="/assets/img/team-2.jpg" className="avatar avatar-sm border-radius-lg" alt="album" />
                                                                <div className="d-flex flex-column">
                                                                    <Link href="#">
                                                                        <p className="mb-0 text-xxs">Sankatmochan <br /> Hanumanstaka</p>
                                                                    </Link>
                                                                    <p className="text-xxs text-secondary mb-0">By Sparshika Kapoor</p>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td><p className="text-xxs mb-0">Sanatan <br /> Records</p></td>
                                                        <td><p className="text-xxs mb-0">05/21/2024</p></td>
                                                        <td><p className="text-xxs mb-0">1 Track</p></td>
                                                        <td><p className="text-xxs mb-0">UPC: 3617388437358<br /><span className="text-secondary text-xxs">Cat#: empty</span></p></td>
                                                        <td><Link href="#" className="text-info text-xxs">Promote</Link></td>
                                                        <td>
                                                            <p className="text-xxs mb-0 border p-1 align-items-center d-flex justify-content-center">
                                                                <i className="material-symbols-rounded text-xxs me-4">globe</i>
                                                                240 terrs.
                                                            </p>
                                                            <p className="text-xxs mb-0 border p-1 mt-1 align-items-center d-flex justify-content-center">
                                                                <i className="material-symbols-rounded text-xxs me-4">apps</i>
                                                                0 stores
                                                            </p>
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <td><i className="material-symbols-rounded">album</i></td>
                                                        <td><i className="material-symbols-rounded opacity-5">block</i></td>
                                                        <td>
                                                            <div className="d-flex align-items-center gap-2">
                                                                <img src="/assets/img/team-2.jpg" className="avatar avatar-sm border-radius-lg" alt="album" />
                                                                <div className="d-flex flex-column">
                                                                    <Link href="#">
                                                                        <p className="mb-0 text-xxs">Sankatmochan <br /> Hanumanstaka</p>
                                                                    </Link>
                                                                    <p className="text-xxs text-secondary mb-0">By Sparshika Kapoor</p>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td><p className="text-xxs mb-0">Sanatan <br /> Records</p></td>
                                                        <td><p className="text-xxs mb-0">05/21/2024</p></td>
                                                        <td><p className="text-xxs mb-0">1 Track</p></td>
                                                        <td><p className="text-xxs mb-0">UPC: 3617388437303<br /><span className="text-secondary text-xxs">Cat#: empty</span></p></td>
                                                        <td><Link href="#" className="text-info text-xxs">Promote</Link></td>
                                                        <td>
                                                            <p className="text-xxs mb-0 border p-1 align-items-center d-flex justify-content-center">
                                                                <i className="material-symbols-rounded text-xxs me-4">globe</i>
                                                                240 terrs.
                                                            </p>
                                                            <p className="text-xxs mb-0 border p-1 mt-1 align-items-center d-flex justify-content-center">
                                                                <i className="material-symbols-rounded text-xxs me-4">apps</i>
                                                                0 stores
                                                            </p>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    )
                }

                <div className='w-20'>
                    <Link className="btn bg-gradient-green text-black w-100" href="#" type="button">
                        Save</Link>
                </div>
            </div>

        </>
    )
}

export default page