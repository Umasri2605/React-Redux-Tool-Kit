import Counter from "./features/counter/Counter";
import Products from "./features/products/products";
import Todolist from "./features/todolist/Todolist";
import Recipes from "./features/recipes/Recipes";
import {Link}  from "react-router-dom"
import {Outlet} from "react-router-dom"
import Navbar from "./services/components/Navbar";

function App() {
  return (
    <div className="border border-2 border-dark p-4 m-4">
      <h1>RTK Components</h1>
      <Navbar></Navbar>
      <Outlet /> 
    </div>
  );
}

export default App;