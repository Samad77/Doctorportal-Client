import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import useAdmin from '../../Hooks/useAdmin';
import { AuthContext } from '../../Pages/Context/AuthProvider';
import Navbar from '../../Pages/Shared/Navbar/Navbar';

const DashboardLayouts = () => {
    const {user} = useContext(AuthContext)
    const [isAdmin] = useAdmin(user?.email);
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

                        <li><Link to='/dashboard'>My Appoinment</Link></li>
                        {
                            isAdmin && <li><Link to='/dashboard/allUser'>All User</Link></li>
                        }
                    </ul>

                </div>
            </div>

        </div>
    );
};

export default DashboardLayouts;