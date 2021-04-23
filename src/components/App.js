import React, { useState, useEffect } from "react";
import RecipeList from "./RecipeList";
import "../css/App.css";
import RecipeEdit from "./RecipeEdit";

export const RecipeContext = React.createContext();
const LOCAL_STORAGE_KEY = "cookingwithReact.recipes";

function App() {
  const sampleRecipes = [
    {
      name: "Sample Recipe",
      id: 1,
      cookTime: "1 hr",
      servings: 3,
      instructions: "Defrost chicken. Cook till brown. Serve.",
      ingredients: [
        {
          id: 1,
          name: "Chicken",
          amount: "2 lbs",
        },
      ],
    },
  ];

  const [selectedRecipeId, setSelectedRecipeId] = useState();
  const [recipes, setRecipes] = useState(sampleRecipes);
  const selectedRecipe = recipes.find(
    (recipe) => recipe.id === selectedRecipeId
  );

  useEffect(() => {
    const recipeJSON = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (recipeJSON != null) {
      setRecipes(JSON.parse(recipeJSON));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(recipes));
  }, [recipes]);

  const recipeContextValue = {
    handleRecipeAdd,
    handleRecipeDelete,
    handleRecipeSelect,
    handleRecipeChange,
  };

  function handleRecipeSelect(id) {
    setSelectedRecipeId(id);
  }

  function handleRecipeAdd() {
    const newRecipe = {
      id: Date.now().toString(),
      name: "",
      servings: 1,
      cookTime: "",
      instructions: "",
      ingredients: [
        {
          id: Date.now().toString(),
          name: "",
          amount: "",
        },
      ],
    };
    setSelectedRecipeId(newRecipe.id);
    setRecipes([...recipes, newRecipe]);
  }

  function handleRecipeChange(id, recipe) {
    const newRecipes = [...recipes];
    const index = newRecipes.findIndex((r) => r.id === id);
    newRecipes[index] = recipe;
    setRecipes(newRecipes);
  }

  function handleRecipeDelete(id) {
    setRecipes(recipes.filter((recipe) => recipe.id !== id));
  }

  return (
    <>
      <RecipeContext.Provider value={recipeContextValue}>
        <RecipeList recipes={recipes} />
        {/* <Recipe /> */}
        {selectedRecipe && <RecipeEdit recipe={selectedRecipe} />}
      </RecipeContext.Provider>
    </>
  );
}

export default App;
