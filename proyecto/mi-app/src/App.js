
import './App.css';
import AboutUs from './Componentes/AboutUs.js';
import Creación from './Componentes/Creación.js';
import { Footer } from './Componentes/Footer.jsx';
import Quienessomos from"./Componentes/archivo.js";
import Productos from './Componentes/producto.js';


function App() {
  return (
    
    
    <div className="App">

      <div className='contenedor principal'>
       <h1>Transformando tu vuelo</h1>
       <p> productos de calidad para la comodidad de tus viajes</p>

       <Quienessomos/>
       <AboutUs/>
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
            <Creación/>
            <Footer/>
            
      </div>
    </div>
    
  );
  
}


export default App;
