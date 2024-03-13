// Comentarios.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Comentarios from './Comentarios';

test('renders Comentarios component', () => {
  render(<Comentarios />);

  // Verifica que el título "Comentarios" esté presente
  expect(screen.getByText('Comentarios')).toBeInTheDocument();

  // Verifica que no haya comentarios al principio
  expect(screen.queryAllByRole('listitem')).toHaveLength(0);

  // Simula agregar un nuevo comentario
  fireEvent.change(screen.getByPlaceholderText('Escribe un comentario sobre nuestros servicios'), {
    target: { value: 'Este es un nuevo comentario' },
  });
  fireEvent.click(screen.getByText('Agregar Comentario'));

  // Verifica que el nuevo comentario se haya agregado
  expect(screen.getByText('Este es un nuevo comentario')).toBeInTheDocument();
});
