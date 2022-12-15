import React, { useEffect, useContext } from 'react';
import { TodoContext } from './contexts/todo.context';

import AddForm from './components/AddForm';
import Header from './components/Header';
import TodoList from './components/TodoList';
import Filters from './components/Filters';

const App: React.FC = () => {
  const { getTodoList } = useContext(TodoContext);

  useEffect(() => {
    getTodoList();
  }, []);

  return (
    <div className='mx-auto px-6 py-12 sm:max-w-2xl'>
      <Header />
      <AddForm />
      <TodoList />
      <Filters />
      <p className='text-center text-xs text-[#9495a5] dark:text-[#5b5e7e] sm:text-sm'>
        Drag and drop to reorder list
      </p>
    </div>
  );
};

export default App;
