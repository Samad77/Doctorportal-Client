import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Navbar from '../../Pages/Shared/Navbar/Navbar';

const DashboardLayouts = () => {
    return (
        <div>
            <Navbar></Navbar>

            <div className="drawer drawer-mobile w-full">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle flex-col" />
                <div className="drawer-content flex">
                    <Outlet></Outlet>
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side ">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100   bg-gray-800 text-white rounded-xl">

                        <li><Link>My Appoinment</Link></li>
                        <li><Link>All User</Link></li>
                    </ul>

                </div>
            </div>

        </div>
    );
};

export default DashboardLayouts;