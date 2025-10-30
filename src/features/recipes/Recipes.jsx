
import React from "react";
import { useGetAllrecipesQuery } from "../../services/recipesApi"; 

function Recipes() {
  const { isLoading, data } = useGetAllrecipesQuery();

  return (
    <div className='border  border-1 p-3 m-3 border-primary'>
      <h1>Recipes Component:</h1> 

      {isLoading && <h5>Recipes Loading...</h5>}

      {!isLoading && (
        <ul className='d-flex flex-wrap list-unstyled justify-content-between'>
          {data?.recipes.map((recipe) => (
            <li className="m-2">
              <h5>{recipe.name.slice(0,10)}</h5>
              <img src={recipe.image} width="200px" alt={recipe.name} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Recipes;

