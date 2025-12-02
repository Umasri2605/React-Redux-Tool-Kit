// import React from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { dec, inc } from './counterSlice';

// function Counter() {
//     var {count}=useSelector((state)=>state.counterR)
//     var dispatch=useDispatch();
//   return (
//     <div className= "border border-primary m-3 p-3 border-1">
//       <h1>Count:{count}</h1>
//       <br></br>
//       <button 
//       className=' border border-2 color-white me-3 bg-success-subtle border-success '
//       onClick={()=>{
//       dispatch(inc());
//        }}
//        >
//         Increment
//         </button>
//       <button className='border border-2 bg-danger-subtle  border-danger' onClick={()=>{dispatch(dec());}}>Decrement</button> 
//     </div>
//   )
// }

// export default Counter

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
              className="btn btn-success btn-lg"
              onClick={() => dispatch(inc())}
            >
              Increment
            </button>
            <button
              className="btn btn-danger btn-lg"
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

