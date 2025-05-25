import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeTodo } from '../features/todo/todoSlice'

function Todos() {
  const todos = useSelector((state) => state.todos.todos)
  // first todos is for accessing it from store.js and 2nd is for accessing it from todoSlice.js
  const dispatch = useDispatch()

  return (
    <div className="container mt-4">
      <h3 className="text-center mb-4">Todos</h3>
      <ul className="list-group">
        {todos.map((todo) => (
          <li
            className="list-group-item d-flex justify-content-between align-items-center"
            key={todo.id}
          >
            <span>{todo.text}</span>
            <button
              onClick={() => dispatch(removeTodo(todo.id))}
              className="btn btn-sm btn-danger"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                width="20"
                height="20"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Todos
