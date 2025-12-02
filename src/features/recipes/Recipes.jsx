import React from "react";
import { useGetAllrecipesQuery } from "../../services/recipesApi";

function Recipes() {
  const { isLoading, data } = useGetAllrecipesQuery();

  return (
    <div className="container mt-4">
      <h1 className="mb-4 text-center text-success">Recipes</h1>

      {isLoading && <h5 className="text-center">Recipes Loading...</h5>}

      {!isLoading && (
        <div className="row g-4">
          {data?.recipes.map((recipe, index) => (
            <div key={index} className="col-sm-6 col-md-4 col-lg-3">
              <div 
                className="card recipe-card h-100 shadow-sm text-center"
                style={{ transition: "transform 0.3s, box-shadow 0.3s" }}
              >
                <img 
                  src={recipe.image} 
                  className="card-img-top" 
                  alt={recipe.name} 
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <h5 className="card-title">{recipe.name.slice(0, 20)}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      <style>{`
        .recipe-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 20px rgba(0,0,0,0.2);
        }
      `}</style>
    </div>
  );
}

export default Recipes;


