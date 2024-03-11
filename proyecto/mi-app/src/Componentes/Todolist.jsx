// TodoList.js
import React, { useState } from 'react';

const TodoList = () => {
 const [todos, setTodos] = useState([
    { id: 1, text: 'Learn React', completed: false },
    { id: 2, text: 'Learn Jest', completed: true },
    { id: 3, text: 'Learn Testing Library', completed: false },
 ]);

 const [filter, setFilter] = useState('all');

 const filteredTodos = todos.filter(todo => {
    if (filter === 'all') return true;
    if (filter === 'completed') return todo.completed;
    if (filter === 'pending') return !todo.completed;
 });

 return (
    <div>
      <ul>
        {filteredTodos.map(todo => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
      <button onClick={() => setFilter('all')}>All</button>
      <button onClick={() => setFilter('completed')}>Completed</button>
      <button onClick={() => setFilter('pending')}>Pending</button>
    </div>
 );
};

export default TodoList;

// TodoList.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TodoList from './Todolist';

test('filters todos by completed status', () => {
 render(<TodoList />);
 const completedButton = screen.getByText(/completed/i);
 const pendingButton = screen.getByText(/pending/i);

 // Verificar que todos los todos están presentes inicialmente
 expect(screen.getByText(/learn react/i)).toBeInTheDocument();
 expect(screen.getByText(/learn jest/i)).toBeInTheDocument();
 expect(screen.getByText(/learn testing library/i)).toBeInTheDocument();

 // Filtrar por completados
 fireEvent.click(completedButton);
 expect(screen.getByText(/learn react/i)).not.toBeInTheDocument();
 expect(screen.getByText(/learn jest/i)).toBeInTheDocument();
 expect(screen.getByText(/learn testing library/i)).not.toBeInTheDocument();

 // Filtrar por pendientes
 fireEvent.click(pendingButton);
 expect(screen.getByText(/learn react/i)).toBeInTheDocument();
 expect(screen.getByText(/learn jest/i)).not.toBeInTheDocument();
 expect(screen.getByText(/learn testing library/i)).toBeInTheDocument();
});