import React, { useId, useContext } from 'react';

import iconCross from '../assets/icon-cross.svg';
import { TodoContext, Todo } from '../contexts/todo.context';

interface Props {
  todo: Todo;
}

const TodoItem: React.FC<Props> = ({ todo }) => {
  const { _id, name, status } = todo;
  const id = useId();
  const { clearTodo, changeStatus } = useContext(TodoContext);

  const handleToggleStatus = () => {
    changeStatus(_id);
  };

  const handleClearTodo = () => {
    clearTodo(_id);
  };

  return (
    <div className='flex items-center space-x-3 bg-white px-5 py-4 dark:bg-[#25273d] lg:space-x-6 lg:px-6 lg:py-5'>
      <input
        type='checkbox'
        id={id}
        className='h-5 w-5 appearance-none rounded-full border border-[#e3e4f1] from-[#55ddff] to-[#c058f3] checked:bg-gradient-to-br hover:border-[#55ddff] dark:border-[#393a4b] lg:h-6 lg:w-6'
        checked={status}
        onChange={handleToggleStatus}
      />
      <label
        htmlFor={id}
        className={`${
          status ? 'line-through opacity-30' : ''
        } flex-1 text-xs capitalize text-[#494c6b] dark:text-[#c8cbe7] lg:text-base`}
      >
        {name}
      </label>
      <img
        src={iconCross}
        alt=''
        className='h-3 w-3 text-[#494c6b] lg:h-4 lg:w-4'
        onClick={handleClearTodo}
      />
    </div>
  );
};

export default TodoItem;
