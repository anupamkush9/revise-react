import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, incrementByAmount, resetValue } from '../features/counter/counterSlice.jsx';

export const Counter = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value);

  const [incrementValue, setIncrementValue] = useState(0);

  const handleIncrementByAmount = () => {
    const amount = Number(incrementValue);
    if (!isNaN(amount)) {
      dispatch(incrementByAmount(amount));
      setIncrementValue(0); // Reset input
    }
  };

  return (
    <div className="container mt-5">
      <div className="card text-center shadow p-4">
        <h3 className="mb-4">Counter App With Redux Toolkit</h3>

        <div className="d-flex justify-content-center align-items-center gap-3 mb-3">
          <button
            className="btn btn-primary"
            onClick={() => dispatch(increment())}
          >
            Increment
          </button>
          <span className="fs-4">{count}</span>
          <button
            className="btn btn-danger"
            onClick={() => dispatch(decrement())}
          >
            Decrement
          </button>
          <button
            className="btn btn-danger"
            onClick={() => dispatch(resetValue())}>
            Reset Value
          </button>
        </div>
        <br/>
        <br/>

        <div className="d-flex justify-content-center align-items-center gap-2">
          <input
            type="number"
            className="form-control w-auto"
            value={incrementValue}
            onChange={(e) => setIncrementValue(e.target.value)}
            placeholder="Enter number"
          />
          <button className="btn btn-success" onClick={handleIncrementByAmount}>
            Increment by Amount
          </button>
        </div>
      </div>
    </div>
  );
};
