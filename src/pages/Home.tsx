import React from 'react';
import TodoTable from '../components/TodoTable';

const Home: React.FC = () => {
  return (
    <div style={{ padding: 20 }}>
      <h1>Todo List</h1>
      <TodoTable />
    </div>
  );
};

export default Home;
