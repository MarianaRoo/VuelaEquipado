import React from "react";
import "./archivo.css";


function Quienessomos(){
  return(
    <div className="contenedor-quienessomos">
      <img className="imagensomos"
      src={require("../imagenes/avion.jpeg")}
      alt="foto avion"/>
      <div className="contenedor-texto-quienessomos">
      <strong><p className="textoquienessomos">¿Quienes somos? </p></strong>
      <p className="vuela-equipado">Bienvenido a vuela equipado, tu destino para accesorios de viaje elegantes y funcionales en donde nos apasiona facilitar tus aventuras alrededor del mundo proporcionándote productos de alta calidad que complementan tu estilo de vida viajero.</p>
      <p className="descripcion">Somos una tienda con un alto valor en el mercado comercial,ofreciendo productos de alta calidad, exclusivos y con los mejores precios </p>
      </div>
    </div>
  );
}
export default Quienessomos;

