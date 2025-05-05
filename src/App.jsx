import React, { useReducer } from 'react';

// Reducer function
function counterReducer(state, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    case 'RESET':
      return { count: 0 };
    case 'SET':
      return { count: action.payload };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

function Counter() {
  // Initialize useReducer
  const [state, dispatch] = useReducer(counterReducer, { count: 0 });

  return (
    <div className="container mt-5 text-center">
      <div className="card p-4 shadow-lg">
        <h2 className="mb-4">Counter App</h2>
        <h3 className="display-4 mb-4">Count: {state.count}</h3>

        <div className="btn-group mb-3" role="group">
          <button className="btn btn-success" onClick={() => dispatch({ type: 'INCREMENT' })}>
            +
          </button>
          <button className="btn btn-danger" onClick={() => dispatch({ type: 'DECREMENT' })}>
            -
          </button>
          <button className="btn btn-secondary" onClick={() => dispatch({ type: 'RESET' })}>
            Reset
          </button>
          <button className="btn btn-primary" onClick={() => dispatch({ type: 'SET', payload: state.count + 10 })}>
            Increase by 10
          </button>
        </div>
      </div>
    </div>
  );
}

export default Counter;
