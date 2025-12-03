import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { dec, inc } from './counterSlice';

function Counter() {
  const { count } = useSelector((state) => state.counterR);
  const dispatch = useDispatch();

  return (
    <div className="container mt-4">
      <div className="card text-center shadow-sm">
        <div className="card-body">
          <h3 className="mb-4">Count: <span className="text-dark">{count}</span></h3>
          <div className="d-flex justify-content-center gap-3">
            <button
              className="btn btn-success btn-m"
              onClick={() => dispatch(inc())}
            >
              Increment
            </button>
            <button
              className="btn btn-danger btn-m"
              onClick={() => dispatch(dec())}
            >
              Decrement
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Counter;

