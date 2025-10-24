import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { dec, inc } from './counterSlice';

function Counter() {
    var {count}=useSelector((state)=>state.counterR)
    var dispatch=useDispatch();
  return (
    <div className= "border border-primary m-3 p-3 border-1">
      <h1>Counter:{count}</h1>
      <br></br>
      <button 
      className=' border border-2 color-white me-3 bg-success-subtle border-success '
      onClick={()=>{
      dispatch(inc());
       }}
       >
        Increment
        </button>
      <button className='border border-2 bg-danger-subtle  border-danger' onClick={()=>{dispatch(dec());}}>Decrement</button> 
    </div>
  )
}

export default Counter
