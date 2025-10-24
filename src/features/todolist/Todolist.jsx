  import React from 'react'
 import { useDispatch, useSelector } from 'react-redux'
import { addTodo } from './todolistSlice';
 
  function Todolist() {
    var {todos}=useSelector((state)=>state.todolistR)
    var dispatch=useDispatch();
    var[newtodo,setnewtodo]=React.useState("")
        return (
      <div className='border border-1 m-3 p-3 border-primary'>
        <h1>Todolist:</h1>
        <input type="text" onChange={(e)=>{setnewtodo(e.target.value)}}/>
        <button onClick={()=>{dispatch(addTodo(newtodo))}}>Add Todo</button>
        <ul>
            {
                todos.map((todo)=>{
                    return<li>{todo}</li>
                })
            }
        </ul>
      </div>
    )
  }
  
  export default Todolist;
  