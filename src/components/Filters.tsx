import React, { useContext, useState } from 'react';

import { TodoContext } from '../contexts/todo.context';

const Filters: React.FC = () => {
  const [currentFilter, setCurrentFilter] = useState('all');
  const { getTodoList } = useContext(TodoContext);

  const filtersMap = [
    {
      text: 'All',
      action: () => {
        getTodoList();
        setCurrentFilter('All');
      },
    },
    {
      text: 'Active',
      action: () => {
        getTodoList(false);
        setCurrentFilter('Active');
      },
    },
    {
      text: 'Completed',
      action: () => {
        getTodoList(true);
        setCurrentFilter('Completed');
      },
    },
  ];

  return (
    <div className='mt-4 mb-10 flex w-full items-center justify-center space-x-5 rounded-md bg-white py-4 shadow-md dark:bg-[#25273d]'>
      {filtersMap.map((f, i) => (
        <span
          key={i}
          className={`${
            currentFilter === f.text ? '!text-[#3a7cFd]' : null
          } cursor-pointer text-sm font-bold text-[#9495a5] hover:text-[#494c6b] dark:text-[#5b5e7e] dark:hover:text-[#e3e4f1]`}
          onClick={f.action}
        >
          {f.text}
        </span>
      ))}
    </div>
  );
};

export default Filters;
