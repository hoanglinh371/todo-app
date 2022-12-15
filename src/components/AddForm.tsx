import React, { FormEvent, useContext, useState } from 'react';
import { TodoContext } from '../contexts/todo.context';

const AddForm: React.FC = () => {
  const [name, setName] = useState('');
  const { addTodo } = useContext(TodoContext);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    addTodo(name);
    setName('');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  return (
    <form className='mt-10 mb-4 2xl:mb-6' onSubmit={handleSubmit}>
      <div className='flex items-center space-x-3 rounded-md bg-white px-5 py-4 shadow-sm dark:bg-[#25273d] lg:space-x-6 lg:px-6 lg:py-5'>
        <input
          type='button'
          className='h-5 w-5 rounded-full border border-[#e3e4f1] dark:border-[#393a4b] lg:h-6 lg:w-6'
        />
        <input
          type='text'
          value={name}
          className='flex-1 bg-transparent text-xs text-[#393a4b] outline-0 placeholder:text-[#393a4b] dark:text-[#767992] lg:text-base'
          placeholder='Create a new todo...'
          onChange={handleChange}
        />
      </div>
      {/* // TODO: Validate form and display error when form is invalid */}
    </form>
  );
};

export default AddForm;
