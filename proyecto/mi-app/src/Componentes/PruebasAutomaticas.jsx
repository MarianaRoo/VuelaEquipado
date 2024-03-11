// PruebasAutomaticas
import React from 'react';
const PruebasAutomaticas = ({ VuelaEquipado }) => <h1>Hola, {VuelaEquipado}!</h1>;
export default PruebasAutomaticas;

// PruebasAutomaticas
import React from 'react';
import { render, screen } from '@testing-library/react';
import PruebasAutomaticas from './PruebasAutomaticas';

test('renders the greeting', () => {
 render(<PruebasAutomaticas VuelaEquipado="World" />);
 const PruebasAutomaticasElement = screen.getByText(/VuelaEquipado!/i);
 expect(PruebasAutomaticasElement).toBeInTheDocument();
});