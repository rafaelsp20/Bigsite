import React from 'react';
import './Banner.css';
import logo from '../../img/banner_principal.jpg';



function Banner() {
  return (
    <div className="banner">
      <img src={logo} alt="Banner" className="banner-image" />      
    </div>
  );
}

export default Banner;
