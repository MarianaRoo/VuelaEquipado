import React from 'react'

import './navegacion.css';

const Navegacion = () => {
  return (
    
            <nav className='barra-navegacion'>
                <a href="barra-navegacion">
                    <img className="logo"
                    src="https://png.pngtree.com/background/20230517/original/pngtree-this-airplane-is-flying-through-the-clouds-at-sunset-picture-image_2637913.jpg" height="100" alt='No encontrada'/>
                </a>
                <h3 clasName="titulo">Vuela Equipado</h3>
                <ul className="lista-enlaces">
                <li><a href="/productos">Productos</a></li>
                <li><a href="/nosotros">Nosotros</a></li>
                <li><a href="/contacto">Contacto</a></li>
                </ul>
            </nav>
        
  );
};

export default Navegacion;