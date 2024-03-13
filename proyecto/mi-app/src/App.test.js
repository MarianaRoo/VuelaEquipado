// Comentarios.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './Componentes/Comentarios'; // Ajusta la ruta según la ubicación real del archivo

test('renders Comentarios component', () => {
  render(<App/>)
  expect(screen.getByText('Comentarios')).toBeInTheDocument();
});


