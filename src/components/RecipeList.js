import React, { useContext } from "react";
import Recipe from "./Recipe";
import { RecipeContext } from "./App";

export default function RecipeList({ recipes }) {
  const { handleRecipeAdd } = useContext(RecipeContext);

  return (
    <>
      <div className="recipe-list">
        <div className="recipe-list__recipes">
          {recipes.map((recipe) => {
            return <Recipe key={recipe.id} {...recipe} />;
          })}

          {/* {recipes.map((recipe) => {
            return <RecipeSummary key={recipe.id} {...recipe} />;
          })} */}
        </div>
        <div className="recipe-list__add-recipe-btn-container">
          <button className="btn btn--primary" onClick={handleRecipeAdd}>
            Add Recipe
          </button>
        </div>
      </div>
    </>
  );
}
