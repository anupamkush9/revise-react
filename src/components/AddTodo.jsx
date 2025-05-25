import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../features/todo/todoSlice';

function AddTodo() {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    e.preventDefault();
    if (input.trim() !== '') {
      dispatch(addTodo(input));
      setInput('');
    }
  };

  return (
    <form onSubmit={addTodoHandler} className="mt-4 d-flex gap-2 justify-content-center">
      <input
        type="text"
        className="form-control w-50"
        placeholder="Enter a Todo..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit" className="btn btn-primary">
        Add Todo
      </button>
    </form>
  );
}

export default AddTodo;
