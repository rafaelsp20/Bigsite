import React from 'react';
import './Banner.css';
//import logo from '../../img/banner_principal.jpg';

/*function Banner() {
  return (
    <div className="banner">
      <img src={logo} alt="Banner" className="banner-image" />      
    </div>
  );
}

export default Banner;*/

// App.js ou Banner.js
//import React from "react";
import Slider from "react-slick";
//import "./App.css"; // Certifique-se de ter importado os estilos CSS

const Banner = () => {
  const settings = {
    dots: true, // Mostrar os indicadores de navegação
    infinite: true, // Permitir que o carrossel seja infinito
    speed: 500, // Velocidade de transição em milissegundos
    slidesToShow: 1, // Quantos slides mostrar por vez
    slidesToScroll: 1, // Quantos slides rolar por vez
    autoplay: true, // Ativar autoplay
    autoplaySpeed: 5000, // Intervalo entre os slides
  };

  // Lista de URLs das imagens para o banner
  const images = [
   
    "/img/banner_principal.jpg",  
    "/img/bus2.png",
    "/img/NR_7_.jpg",
  ];

  return (
      
    <div className="banner-container">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`Banner ${index + 1}`} className="banner-image" />
          </div>
        ))}
      </Slider>
    </div>  
  );
};

export default Banner;