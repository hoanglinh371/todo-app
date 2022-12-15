import axios from 'axios';
import React, { createContext, useState } from 'react';

export interface Todo {
  _id: string;
  name: string;
  status: boolean;
}

interface TodoContextProps {
  todoList: Todo[];
  setTodoList: React.Dispatch<React.SetStateAction<Todo[]>>;
  clearTodo: (_id: string) => void;
  changeStatus: (_id: string) => void;
  addTodo: (name: string) => void;
  getTodoList: (status?: boolean) => void;
  deleteCompleted: () => void;
}

interface TodoProviderProps {
  children: React.ReactNode;
}

export const TodoContext = createContext<TodoContextProps>({
  todoList: [],
  setTodoList: () => {},
  clearTodo: () => {},
  changeStatus: () => {},
  addTodo: () => {},
  getTodoList: () => {},
  deleteCompleted: () => {},
});

export const TodoProvider: React.FC<TodoProviderProps> = ({ children }) => {
  const URL = 'http://localhost:8080/todo-list';
  const [todoList, setTodoList] = useState<Todo[]>([]);

  const clearTodo = async (_id: string) => {
    await axios.delete(`${URL}/${_id}`);
    getTodoList();
  };

  const deleteCompleted = async () => {
    await axios.delete(URL);
    getTodoList();
  };

  const changeStatus = async (_id: string) => {
    await axios.put(`${URL}/${_id}`);
    getTodoList();
  };

  const addTodo = async (name: string) => {
    await axios.post(
      URL,
      { name: name },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );
    getTodoList();
  };

  const getTodoList = async (status?: boolean) => {
    const res = await axios.get('http://localhost:8080/todo-list', {
      params: {
        status: status,
      },
    });
    const data = await res.data.results.todoList;
    setTodoList(data);
  };

  const value = {
    todoList,
    setTodoList,
    clearTodo,
    changeStatus,
    addTodo,
    getTodoList,
    deleteCompleted,
  };

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
};
