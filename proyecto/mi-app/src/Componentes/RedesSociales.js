import React from 'react';
import './RedesSociales.css';

const RedesSociales = () => {
  return (
    <div className="redes-sociales-container">
      <h2>Síguenos en Redes Sociales</h2>
      <div className="iconos-redes-sociales">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtbyaqiCaN7SF9xGwtqXp4Dft90vQ8cWInV_8rvKJZlw&s" alt="Facebook" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Logo_of_Twitter.svg/512px-Logo_of_Twitter.svg.png" alt="Twitter" />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <img src="https://cdn.pixabay.com/photo/2016/08/09/17/52/instagram-1581266_640.jpg" alt="Instagram" />
        </a>
      </div>
    </div>
  );
};

export default RedesSociales;
