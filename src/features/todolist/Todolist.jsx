import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { addTodo, deleteTodo } from './todolistSlice';
import { addTodo,delTodo } from './todolistSlice';

function Todolist() {
  const { todos } = useSelector((state) => state.todolistR);
  const dispatch = useDispatch();
  const [newtodo, setnewtodo] = React.useState("");

  return (
    <div className="container mt-4">
      <div className="card shadow-sm">
        <div className="card-body">
          <h2 className="card-title mb-4 text-center text-dark">Todolist</h2>
          
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Enter new todo"
              value={newtodo}
              onChange={(e) => setnewtodo(e.target.value)}
            />
            <button
              className="btn btn-primary"
              onClick={() => {
                if(newtodo.trim() !== "") {
                  dispatch(addTodo(newtodo));
                  setnewtodo(""); 
                }
              }}
            >
              Add Todo
            </button>
          </div>

          <ul className="list-group">
            {todos.map((todo, index) => (
              <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                {todo}
                <div>
                  <span className="badge bg-primary rounded-pill me-2"></span>
                  <button
                    className="btn btn-sm btn-danger"
                    onClick={() => dispatch(delTodo(index))}
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Todolist;
