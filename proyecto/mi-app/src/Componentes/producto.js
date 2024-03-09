import React from "react";
import "./producto.css";


function Productos(props){
  const handleAgregarCarrito = () => {
    alert(`¡"${props.nombre}" ha sido agregado al carrito!`);
  };
  return(
    <div className="contenedor-producto">
      <img className="imagenproducto"
      src={require(`../imagenes/${props.imagen}.jpg`)}
      alt="imagen producto"/>
       <div className="contenedor-texto-producto">
          <strong><p className="textotipoproducto">{props.nombre} </p></strong>
          <p className="producto-descripcion">{props.descripcion}.</p>
          <p className="precio">{props.precio}</p>
          <button onClick={handleAgregarCarrito}>Agregar al carrito</button>
        </div>
    </div>
  );
}
export default Productos;
