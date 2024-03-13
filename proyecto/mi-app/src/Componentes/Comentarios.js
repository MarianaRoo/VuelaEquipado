import React, { useState } from 'react';
import './Comentarios.css';

const Comentarios = () => {
  const [comentarios, setComentarios] = useState([]);
  const [nuevoComentario, setNuevoComentario] = useState('');

  const agregarComentario = () => {
    if (nuevoComentario.trim() !== '') {
      setComentarios([...comentarios, nuevoComentario]);
      setNuevoComentario('');
    }
  };

  return (
    <div className="comentarios-container">
      <h2>Comentarios</h2>
      <ul className="lista-comentarios">
        {comentarios.map((comentario, index) => (
          <li key={index} className="comentario-item">
            {comentario}
          </li>
        ))}
      </ul>
      <div className="nuevo-comentario-container">
        <textarea
          value={nuevoComentario}
          onChange={(e) => setNuevoComentario(e.target.value)}
          placeholder="Escribe un comentario sobre nuestros servicios"
          className="input-comentario"
        ></textarea>
        <button onClick={agregarComentario} className="btn-agregar">
          Agregar Comentario
        </button>
      </div>
    </div>
  );
};

export default Comentarios;
