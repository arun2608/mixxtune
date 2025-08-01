"use client"

import Link from 'next/link';
import React, { PureComponent, useState } from 'react';
import { Pie, PieChart, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data1 = [
    {
        name: 'Dec 2025',
        uv: 4000,
        pv: 2400,
        amt: 2400,
    },
    {
        name: 'Jan 2026',
        uv: 3000,
        pv: 1398,
        amt: 2210,
    },
    {
        name: 'Feb 2026',
        uv: 2000,
        pv: 9800,
        amt: 2290,
    },
    {
        name: 'Mar 2027',
        uv: 2780,
        pv: 3908,
        amt: 2000,
    },
    {
        name: 'Apr 2026',
        uv: 1890,
        pv: 4800,
        amt: 2181,
    },
    {
        name: 'May 2026',
        uv: 2390,
        pv: 3800,
        amt: 2500,
    },
    {
        name: 'June 2026',
        uv: 3490,
        pv: 4300,
        amt: 2100,
    },
];


const data2 = [
    {
        name: 'Dec 2025',
        pv: 2400,
        amt: 2400,
    },
    {
        name: 'Jan 2026',
        pv: 1398,
        amt: 2210,
    },
    {
        name: 'Feb 2026',
        pv: 9800,
        amt: 2290,
    },
    {
        name: 'Mar 2027',
        pv: 3908,
        amt: 2000,
    },
    {
        name: 'Apr 2026',
        pv: 4800,
        amt: 2181,
    },
    {
        name: 'May 2026',
        pv: 3800,
        amt: 2500,
    },
    {
        name: 'June 2026',
        pv: 4300,
        amt: 2100,
    },
];

const data3 = [
    { name: 'A1', value: 100 },
    { name: 'A2', value: 300 },
    { name: 'B1', value: 100 },
    { name: 'B2', value: 80 },
    { name: 'B3', value: 40 },
    { name: 'B4', value: 30 },
    { name: 'B5', value: 50 },
    { name: 'C1', value: 100 },
    { name: 'C2', value: 200 },
    { name: 'D1', value: 150 },
    { name: 'D2', value: 50 },
];



const page = () => {
    const [activeTab, setActiveTab] = useState(1);
    return (
        <>

            <div className='container'>
                <div className='row mb-4'>
                    <div className="col-4">
                        <div className="card">
                            <div className="card-header p-2 ps-3">
                                <div className="d-flex justify-content-between">
                                    <div>
                                        <p className="text-sm mb-0 text-capitalize">Revenue of all time</p>
                                        <h4 className="mb-0">₹100k</h4>
                                    </div>
                                </div>
                                <p className='text-sm'>Earned since <strong>April,2003</strong> </p>
                            </div>
                            <hr className="dark horizontal my-0" />
                            <div className="card-footer p-2 ps-3">
                                <p className="mb-0 text-sm"><span className="text-success font-weight-bolder">+55% </span>than last week</p>
                            </div>
                        </div>
                    </div>
                </div>


                <div className='d-flex justify-content-between'>
                    <div className="custom-tabs mb-0 d-flex flex-wrap">
                        <a className={`cursor-pointer ${activeTab == "1" ? "tab-link active" : "tab-link "}`}
                            onClick={() => setActiveTab("1")}
                        >Overview
                        </a>

                        <a className={`cursor-pointer ${activeTab == "2" ? "tab-link active" : "tab-link"}`}
                            onClick={() => setActiveTab("2")}>
                            Top Chart
                        </a>

                        <a className={`cursor-pointer ${activeTab == "3" ? "tab-link active" : "tab-link"}`}
                            onClick={() => setActiveTab("3")}>
                            Store
                        </a>

                        <a className={`cursor-pointer ${activeTab == "5" ? "tab-link active" : "tab-link"}`}
                            onClick={() => setActiveTab("5")}
                        >Country
                        </a>
                    </div>

                    <div className='reporting-month d-flex justify-content-center align-items-center'>
                        <p className='text-sm me-5 mb-0'>Reporting month</p>
                        <p className='text-sm mb-0'>2025 Dec - 2026 May <i className='material-symbols-rounded'>calendar_today</i></p>
                    </div>
                </div>

                <div className='row'>
                    <div className="col-12 mt-4 mb-4">
                        <div className="card ">
                            <div className="card-body">
                                <h6 className="mb-0 "> Net revenue by month</h6>
                                <p className="text-sm ">25,473.6 (<span className="font-weight-bolder">Last 28 days</span>)</p>
                                <div className="pe-2">
                                    <div className="chart">
                                        <div style={{ width: '100%', height: 200 }}>
                                            <ResponsiveContainer width="100%" height="100%">
                                                <BarChart
                                                    width={500}
                                                    height={300}
                                                    data={data1}
                                                    margin={{
                                                        top: 20,
                                                        right: 30,
                                                        left: 20,
                                                        bottom: 5,
                                                    }}
                                                >
                                                    <XAxis dataKey="name" />
                                                    <YAxis />
                                                    <Tooltip />
                                                    <Legend />
                                                    <Bar dataKey="pv" stackId="a" fill="#8884d8" />
                                                    <Bar dataKey="amt" stackId="a" fill="#82ca9d" />
                                                    <Bar dataKey="uv" stackId="a" fill="#ffc658" />
                                                </BarChart>
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
                </div>

                <div className='row'>
                    <div className="col-12 mt-4 mb-4">
                        <div className="card ">
                            <div className="card-body">

                                <p>MixxTune Catalog optimazation on Spotify Discovry Mode</p>
                                <div className='row mb-3'>
                                    <div className='col-12 col-md-6 col-lg-6'>
                                        <div className='coustom-border p-3'>
                                            <h6 className='fw-bold'>How is your revenue impacted ?</h6>
                                            <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. At ad aperiam voluptatibus ut?</p>

                                            <Link href="#" className='text-blue align-items-center text-sm'>View Imapct on Stream
                                                <i className='material-symbols-rounded ms-2 text-md'>open_in_new</i>
                                            </Link>

                                        </div>
                                    </div>

                                    <div className='col-12 col-md-6 col-lg-6'>
                                        <div className='coustom-border p-3'>
                                            <h6 className='fw-bold'>How is your revenue impacted ?</h6>
                                            <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. At ad aperiam voluptatibus ut?</p>

                                            <Link href="#" className='text-blue align-items-center text-sm'>View Imapct on Stream
                                                <i className='material-symbols-rounded ms-2 text-md'>open_in_new</i>
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                                <div className="pe-2">
                                    <div className="chart">
                                        <div style={{ width: '100%', height: 200 }}>
                                            <ResponsiveContainer width="100%" height="100%">
                                                <BarChart
                                                    width={500}
                                                    height={300}
                                                    data={data2}
                                                    margin={{
                                                        top: 20,
                                                        right: 30,
                                                        left: 20,
                                                        bottom: 5,
                                                    }}
                                                >
                                                    <XAxis dataKey="name" />
                                                    <YAxis />
                                                    <Tooltip />
                                                    <Legend />
                                                    <Bar dataKey="pv" stackId="a" fill="#a09ceaff" />
                                                    <Bar dataKey="amt" stackId="a" fill="#9538ff" />

                                                </BarChart>
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
                </div>


                <div className='row'>
                    <div className="col-12 col-md-6 col-lg-6 mt-4 mb-4">
                        <div className="card ">
                            <div className="card-body">
                                <h6 className="mb-0 "> Net revenue by store</h6>
                                <p className="text-sm ">25,473.6 (<span className="font-weight-bolder">Last 28 days</span>)</p>
                                <div className="pe-2">
                                    <div className="chart">
                                        <div style={{ width: '100%', height: 200 }}>
                                            <ResponsiveContainer width="100%" height="100%">
                                                <PieChart width={400} height={400}>

                                                    <Pie data={data3} dataKey="value" cx="50%" cy="50%" innerRadius={70} outerRadius={90} fill="#82ca9d" label />
                                                </PieChart>
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
                    <div className="col-12 col-md-6 col-lg-6 mt-4 mb-4">
                        <div className="card ">
                            <div className="card-body">
                                <h6 className="mb-0 "> Net revenue by country/region</h6>
                                <p className="text-sm ">25,473.6 (<span className="font-weight-bolder">Last 28 days</span>)</p>
                                <div className="pe-2">
                                    <div className="chart">
                                        <div style={{ width: '100%', height: 200 }}>
                                            <ResponsiveContainer width="100%" height="100%">
                                                <PieChart width={400} height={400}>

                                                    <Pie data={data3} dataKey="value" cx="50%" cy="50%" innerRadius={70} outerRadius={90} fill="#82ca9d" label />
                                                </PieChart>
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
                </div>

                <div className='row'>
                    <div className="col-12 col-md-6 col-lg-6 mt-4 mb-4">
                        <div className="card ">
                            <div className="card-body">
                                <h6 className="mb-0 "> Net revenue by month</h6>
                                <p className="text-sm ">25,473.6 (<span className="font-weight-bolder">Last 28 days</span>)</p>
                                <div className="pe-2">
                                    <div className="chart">
                                        <div style={{ width: '100%', height: 200 }}>
                                            <ResponsiveContainer width="100%" height="100%">
                                                <PieChart width={400} height={400}>

                                                    <Pie data={data3} dataKey="value" cx="50%" cy="50%" innerRadius={70} outerRadius={90} fill="#82ca9d" label />
                                                </PieChart>
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

                    <div className="col-12 col-md-6 col-lg-6 mt-4 mb-4">
                        <div className="card p-3 shadow-sm">
                            <h6 className="mb-3">Trends <small className="text-muted">| Release | May 15 - Apr 2025</small></h6>
                            <ul className="list-unstyled mb-0">
                                <div className='row'>

                                    <div className='col-12 col-md-6 col-lg-6'>
                                        <li className="d-flex justify-content-between mb-2">
                                            <span >Haryanvi Hit Lofi Song</span>
                                            <span className="text-success">+225.97%</span>
                                        </li>
                                        <li className="d-flex justify-content-between mb-2">
                                            <span>Dhara 302</span>
                                            <span className="text-success">+66.61%</span>
                                        </li>
                                        <li className="d-flex justify-content-between mb-2">
                                            <span>Shooter</span>
                                            <span className="text-success">+42.24%</span>
                                        </li>
                                        <li className="d-flex justify-content-between mb-2">
                                            <span>Dear Maa</span>
                                            <span className="text-success">+2.70%</span>
                                        </li>
                                        <li className="d-flex justify-content-between mb-2">
                                            <span>Shooter #reels</span>
                                            <span className="text-success">+1.80%</span>
                                        </li>
                                    </div>
                                    <div className='col-12 col-md-6 col-lg-6'>
                                        <li className="d-flex justify-content-between mb-2">
                                            <span>Gangster Returns</span>
                                            <span className="text-danger">-99.95%</span>
                                        </li>
                                        <li className="d-flex justify-content-between mb-2">
                                            <span>Dunali (Official Video)</span>
                                            <span className="text-danger">-79.75%</span>
                                        </li>
                                        <li className="d-flex justify-content-between mb-2">
                                            <span>Raju Punjabi Hits</span>
                                            <span className="text-danger">-75.15%</span>
                                        </li>
                                        <li className="d-flex justify-content-between mb-2">
                                            <span>Massom Sharma – Ghodi</span>
                                            <span className="text-danger">-72.83%</span>
                                        </li>
                                        <li className="d-flex justify-content-between mb-2">
                                            <span>One Life Baby</span>
                                            <span className="text-danger">-60.52%</span>
                                        </li>
                                    </div>
                                </div>
                            </ul>
                             <hr className="dark horizontal" />
                                <div className="d-flex ">
                                    <i className="material-symbols-rounded text-sm my-auto me-1">schedule</i>
                                    <p className="mb-0 text-sm"> updated 4 min ago </p>
                                </div>
                        </div>
                    </div>
                </div>


            </div >


        </>
    )
}

export default page