import React, { useContext, useState } from "react";
import { RecipeContext } from "./App";
import IngredientList from "./IngredientList";

export default function Recipe(props) {
  const { handleRecipeDelete, handleRecipeSelect } = useContext(RecipeContext);
  const { id, name, cookTime, servings, instructions, ingredients } = props;
  const [selected, setSelected] = useState(false);

  const expanded = () => {
    return (
      <>
        <div className="recipe">
          <div className="recipe__header">
            <h3 className="recipe__title">{name}</h3>
            <button
              className="btn btn--primary mr-1"
              onClick={() => handleRecipeSelect(id)}
            >
              Edit
            </button>
            <button
              className="btn btn--danger"
              onClick={() => {
                handleRecipeDelete(id);
              }}
            >
              Delete
            </button>
          </div>
          <div className="recipe__row">
            <span className="recipe__label">Cook Time:</span>
            <span className="recipe__value">{cookTime}</span>
          </div>
          <div className="recipe__row">
            <span className="recipe__label">Servings:</span>
            <span className="recipe__value">{servings}</span>
          </div>
          <div className="recipe__row">
            <span className="recipe__label">Instructions:</span>
            <div className="recipe__value recipe__instructions recipe__value--indented">
              {instructions}
            </div>
          </div>
          <div className="recipe__row">
            <span className="recipe__label">Ingredients:</span>
            <div className="recipe__value recipe__value--indented">
              <IngredientList ingredients={ingredients} />
            </div>
          </div>
          <div className="recipe__icon-container">
            <span class="material-icons" onClick={() => setSelected(false)}>
              expand_less
            </span>
          </div>
        </div>
      </>
    );
  };

  const collapsed = () => {
    return (
      <>
        <div className="recipe-summary">
          <div className="recipe-summary__text-container">
            <div className="recipe-summary__header">
              <h3 className="recipe-summary__title">{name}</h3>
            </div>
            <div className="recipe__row">
              <span className="recipe-summary__label">Cook Time:</span>
              <span className="recipe-summary__value">{cookTime}</span>
            </div>
            <div className="recipe__row">
              <span className="recipe-summary__label">Servings:</span>
              <span className="recipe-summary__value">{servings}</span>
            </div>
          </div>
          <div className="recipe-summary__icon-container">
            <span className="material-icons" onClick={() => setSelected(true)}>
              expand_more
            </span>
          </div>
        </div>
      </>
    );
  };

  function showRecipes() {
    if (selected) {
      return expanded();
    }

    return collapsed();
  }

  return <>{showRecipes()}</>;
}
