import React from 'react';
import { FaGithub } from 'react-icons/fa';
import {  Link } from 'react-router'; 
import logoImg  from '../../assets/logo.png'

const Navbar = () => { 
    const links =(
      <>
        <Link lassName='px-4 ' to={'/'}>Home</Link>
        <Link className='px-4 '  to={'/apps'}>Apps</Link>
        <Link className='px-4 '  to={"/installation"}>Installation</Link>
      </>
    )
    return (
        <div className="navbar bg-base-100  px-4 py-4">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
       
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow ">
        
        {links}
     
     
      </ul>
    </div>
<div className='flex'>
    <img src={logoImg} className='w-10 ' alt="" />
        <Link to="/" className="btn btn-ghost text-xl text-indigo-600">HERO.IO</Link>
</div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 [&_a]:hover:underline">
      {links}
    </ul>
  </div>
  <div className="navbar-end ">
    <Link to={"https://github.com/Suborna589"} className="btn text-white text-base bg-gradient-to-r from-violet-500 to-indigo-600"> <FaGithub className='text-white ' />Contribute</Link>
  </div>
</div>
    );
};

export default Navbar;