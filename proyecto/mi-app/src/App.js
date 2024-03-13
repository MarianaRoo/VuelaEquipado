
import './App.css';
import Quienessomos from"./Componentes/archivo.js";
import Productos from './Componentes/producto.js';
import React from 'react';
import Comentarios from './Componentes/Comentarios'; 
import RedesSociales from './Componentes/RedesSociales';
import Navegacion from "./Componentes/navegacion.js";

function App() {
  return (
    
    <div className="App">
       <Navegacion/>
      <div className='contenedor principal'>
       <strong><p>Transformando tu vuelo</p></strong>
       <p> productos de calidad para la comodidad de tus viajes</p>
       
       
       <Quienessomos/>
       <Productos
          imagen="maleta"
          nombre="Maleta channel"
          descripcion="Maleta fabricada con materiales de alta calidad con un diseño elegante y distintivo."
          precio="Precio COP $3.000.000"
          CarritoBoton />
         <Productos
            imagen="organizador"
            nombre="Organizador"
            descripcion="Con el organizador de viajes manten todos tus elementos en un solo lugar, practico y liviano para todo tipo de viajes."
            precio="Precio COP $150.000."
            CarritoBoton />
       <Comentarios /> 
       <RedesSociales/>
           
      
      </div>
      
    </div>
  );
  
}


export default App;
