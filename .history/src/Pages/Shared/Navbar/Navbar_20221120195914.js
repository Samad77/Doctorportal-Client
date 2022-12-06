import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom'
import { AuthContext } from '../../Context/AuthProvider';
const Navbar = () => {

  const { user, logOutUser } = useContext(AuthContext)


  const handleLogOut = () => {
    logOutUser().then().catch(err => console.error(err))
  }
  const menuItems = <React.Fragment>
    <li><Link to="/home">Home</Link></li>
    <li><Link to="/about">About</Link></li>
    <li><Link to="/appointment">Appointment</Link></li>
    <li><Link to="/contact">Contact Us</Link></li>

    {
      user?.uid ?
        <div className='flex'>
          <li onClick={handleLogOut}><Link>SignOut</Link></li>
          <li><Link to='/dashboard'>Dashboard</Link></li>
        </div>
        : <li><Link to="/login">Login</Link></li>
    }

  </React.Fragment>



  return (
    <div className="navbar bg-base-100 flex justify-between">
      <div className="navbar-start">
        <div className="dropdown">
          <div className='flex justify-between'>
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>

            <label tabIndex={1} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
          </div>
          <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-52">
            {menuItems}
          </ul>


        </div>
        <Link to='/' className="btn btn-ghost normal-case text-xl">Doctors Portal</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
          {menuItems}
        </ul>
        <label tabIndex={1} className="btn btn-ghost lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        </label>
      </div>

    </div>
  );
};

export default Navbar;