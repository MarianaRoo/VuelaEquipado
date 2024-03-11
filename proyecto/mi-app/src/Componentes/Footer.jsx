import React from 'react';

export const Footer = () => {
  return (
    <div className="container">
      <footer className="footer">
        <ul className="nav justify-content-center border-bottom pb-3 mb-3">
          <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Servicios</a></li>
          <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Tienda Online</a></li>
          <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Precios</a></li>
          <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Preguntas frecuentes</a></li>
          <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Contáctenos</a></li>
        </ul>
        <p className="text-center text-body-secondary">© 2024 Company, Inc</p>
      </footer>
    </div>
  );
};


