import React from "react";

export default function RecipeSummary(props) {
  //   const { handleRecipeDelete, handleRecipeSelect } = useContext(RecipeContext);
  const { name, cookTime, servings } = props;
  return (
    <div>
      <div className="recipe-summary">
        <div className="recipe-summary__text-container">
          <div className="recipe-summary__header">
            <h3 className="recipe-summary__title">{name}</h3>
          </div>
          <div className="recipe-summary__body">
            <div className="recipe__row">
              <span className="recipe__label">Cook Time:</span>
              <span className="recipe__value">{cookTime}</span>
            </div>
            <div className="recipe__row">
              <span className="recipe__label">Servings:</span>
              <span className="recipe__value">{servings}</span>
            </div>
          </div>
        </div>
        <span class="material-icons-outlined">expand_more</span>{" "}
      </div>
    </div>
  );
}
