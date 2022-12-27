import React from 'react';
import logo from '../../../assets/logo.png'
const Footer = () => {
    return (
        <div>
           <footer className="footer footer-center p-10 bg-gradient-to-r from-cyan-500 to-blue-300 text-white rounded mt-96 ">
           <div >
     <img style={{height:'100px'}} src={logo} alt="logo" />
     <div className="grid grid-flow-col gap-4">
    <a className="link link-hover">About us</a> 
    <a className="link link-hover">Contact</a> 

   
  </div>
  <div>
    <p>Copyright © 2022 - All right reserved by Talkline</p>
  </div> 
    </div>
  
  <div>
  
  </div> 
  
</footer> 
        </div>
    );
};

export default Footer;