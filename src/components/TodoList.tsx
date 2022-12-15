import React, { useContext } from 'react';
import {
  DragDropContext,
  Draggable,
  Droppable,
  DropResult,
} from 'react-beautiful-dnd';

import { TodoContext } from '../contexts/todo.context';
import TodoItem from './TodoItem';

const TodoList: React.FC = () => {
  const { todoList, setTodoList, deleteCompleted } = useContext(TodoContext);

  const handleDragEnd = (result: DropResult) => {
    const { source, destination } = result;
    if (!destination) {
      return;
    }
    const items = Array.from(todoList);
    const [newOrder] = items.splice(source.index, 1);
    items.splice(destination.index, 0, newOrder);
    setTodoList(items);
  };

  return (
    <div className='shadow-md'>
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId='droppableId'>
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {todoList.map((todo, i) => (
                <Draggable key={todo._id} draggableId={todo._id} index={i}>
                  {(provided) => (
                    <div
                      {...provided.dragHandleProps}
                      {...provided.draggableProps}
                      ref={provided.innerRef}
                      className='border-b border-[#e3e4f1] dark:border-[#393a4b]'
                    >
                      <TodoItem todo={todo} />
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
      <div className='flex items-center justify-between bg-white px-6 py-5 dark:bg-[#25273d]'>
        <span className='text-xs text-[#5b5e7e] lg:text-sm'>
          {todoList.length} items left
        </span>
        <span
          className='cursor-pointer text-xs capitalize text-[#5b5e7e] lg:text-sm'
          onClick={deleteCompleted}
        >
          clear completed
        </span>
      </div>
    </div>
  );
};

export default TodoList;
