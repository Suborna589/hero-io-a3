import React from 'react'
import logoImg from '../../assets/logo.png'
import { Link } from 'react-router';
import { FaXTwitter } from 'react-icons/fa6';
import { FaFacebook, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
       <footer className='bg-neutral' >

   <div className="footer sm:footer-horizontal  text-neutral-content p-10">


         <nav>
        <div className='flex gap-0'>
              <Link to='/'>  <img src={logoImg} alt="" className='w-[40px]'/></Link>
             <a className="btn btn-ghost text-xl text-[#9f62f2] font-bold">HERO.IO</a>
        </div>  
        <p>HERO.IO – A modern app marketplace platform that lets users <br /> explore, download, and manage a variety of applications <br /> developed by HERO.IO, offering smooth navigation, <br /> app details, ratings, and installation tracking.</p>

        </nav>
  <nav>
    <h6 className="footer-title">Services</h6>
    <a className="link link-hover">Apps & Services</a>
    <a className="link link-hover"> Apps Design</a>
    <a className="link link-hover">Download Apps</a>
  
  </nav>
  <nav>
    <h6 className="footer-title">Company</h6>
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Our Mission</a>
    <a className="link link-hover">Contact Saled</a>
  

  </nav>
  <nav>
    <h6 className="footer-title">Infromation</h6>
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Join Us</a>
  </nav>
  <nav>
    <h6 className="footer-title">Social Links</h6>
    <a className="link link-hover flex items-center"> <FaXTwitter  className=''/>  <span className="btn btn-ghost text-sm text-[#9f62f2]">HERO.IO</span> </a>
    <a className="link link-hover flex items-center"><FaFacebook /> <span className="btn btn-ghost text-sm text-[#9f62f2] ">HERO.IO</span> </a>
    <a className="link link-hover flex items-center"> <FaLinkedin /> <span className="btn btn-ghost text-sm text-[#9f62f2]">HERO.IO</span> </a>
  </nav>

   </div>

    <p className='text-white text-center pb-5'>Copyright © {new Date().getFullYear()} -  <span className="btn btn-ghost text-lg text-[#9f62f2]">HERO.IO</span>All right reserved </p>

   
</footer>



  
    );
};

export default Footer;