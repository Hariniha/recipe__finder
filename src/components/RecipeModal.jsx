import React, { useState, useEffect } from 'react';

const RecipeModal = ({ searchTerm, setIsRecipesLoaded }) => {
  const [recipes, setRecipes] = useState([]);
  const [allRecipes, setAllRecipes] = useState([]); // Store all recipes to display when no search matches
  const [error, setError] = useState(null);
  const [selectedRecipe, setSelectedRecipe] = useState(null); // Track the selected recipe for details
  const [isSearchCompleted, setIsSearchCompleted] = useState(false); // Track if search is completed

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        // Fetch all recipes
        const response = await fetch('https://dummyjson.com/recipes');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setAllRecipes(data.recipes); // Store all recipes
        setIsRecipesLoaded(true); // Mark the recipes as loaded

        // If there's a search term, try to match the recipes
        if (searchTerm) {
          const filteredRecipes = data.recipes.filter((recipe) =>
            recipe.name.toLowerCase().includes(searchTerm.toLowerCase())
          );
          setRecipes(filteredRecipes); // Set filtered recipes based on search term
        } else {
          setRecipes(data.recipes); // If no search term, show all recipes
        }
      } catch (error) {
        console.error('Error fetching recipes:', error);
        setError(error.message);
      } finally {
        setIsSearchCompleted(true); // Mark the search as completed (whether successful or not)
      }
    };

    fetchRecipes();
  }, [searchTerm, setIsRecipesLoaded]);

  // Handle recipe click to show detailed information
  const handleRecipeClick = (recipe) => {
    setSelectedRecipe(recipe); // Set the selected recipe to show details
  };

  // Close the recipe details view
  const closeRecipeDetails = () => {
    setSelectedRecipe(null); // Reset to null to show the list again
  };

  return (
    <div>
      {error && <div className="text-red-500 text-center mt-4">Error fetching recipes: {error}</div>}

      {/* Show recipe names or details */}
      {selectedRecipe ? (
        // Show the details of the selected recipe
        <div className="bg-white p-6 rounded-lg shadow-lg mt-8 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">{selectedRecipe.name}</h2>
          <div className="flex flex-col md:flex-row mb-6">
            <img
              src={selectedRecipe.image}
              alt={selectedRecipe.name}
              className="w-full md:w-1/3 rounded-lg shadow-lg mb-4 md:mb-0"
            />
            <div className="md:ml-6">
              <p className="text-gray-700 text-xl font-semibold">Cuisine: {selectedRecipe.cuisine}</p>
              <p className="text-gray-700 text-xl font-semibold">Difficulty: {selectedRecipe.difficulty}</p>
              <p className="text-gray-700 text-xl font-semibold">Calories: {selectedRecipe.caloriesPerServing} per serving</p>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">Ingredients:</h3>
            <ul className="list-disc pl-6 mb-4">
              {selectedRecipe.ingredients.map((ingredient, index) => (
                <li key={index} className="text-gray-600">{ingredient}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">Instructions:</h3>
            <ol className="list-decimal pl-6">
              {selectedRecipe.instructions.map((instruction, index) => (
                <li key={index} className="text-gray-600">{instruction}</li>
              ))}
            </ol>
          </div>

          <button
            onClick={closeRecipeDetails} // Close the details view
            className="bg-red-500 text-white py-2 px-6 rounded-lg mt-4 transition hover:bg-red-600"
          >
            Close Details
          </button>
        </div>
      ) : (
        // Show recipe list or a message if no results are found
        <div>
          {isSearchCompleted ? ( // Check if the search is completed
            recipes.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
                {recipes.map((recipe) => (
                  <div key={recipe.id} className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden my-4">
                    <div className="md:flex">
                      <div className="md:flex-shrink-0">
                        <img
                          className="h-48 w-full object-cover md:w-48"
                          src={recipe.image}
                          alt={recipe.name}
                        />
                      </div>
                      <div className="p-8">
                        <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                          <button
                            className="text-xl font-semibold text-indigo-700 hover:text-indigo-500"
                            onClick={() => handleRecipeClick(recipe)} // When clicked, show the recipe details
                          >
                            {recipe.name}
                          </button>
                        </div>
                        <p className="mt-2 text-gray-500">Cuisine: {recipe.cuisine}</p>
                        <p className="mt-2 text-gray-500">Difficulty: {recipe.difficulty}</p>
                        <p className="mt-2 text-gray-500">Calories: {recipe.caloriesPerServing} per serving</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center text-gray-600 mt-4">
                <p>No recipes found for your search. Showing all available recipes.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
                  {allRecipes.map((recipe) => (
                    <div key={recipe.id} className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden my-4">
                      <div className="md:flex">
                        <div className="md:flex-shrink-0">
                          <img
                            className="h-48 w-full object-cover md:w-48"
                            src={recipe.image}
                            alt={recipe.name}
                          />
                        </div>
                        <div className="p-8">
                          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                            <button
                              className="text-xl font-semibold text-indigo-700 hover:text-indigo-500"
                              onClick={() => handleRecipeClick(recipe)} // When clicked, show the recipe details
                            >
                              {recipe.name}
                            </button>
                          </div>
                          <p className="mt-2 text-gray-500">Cuisine: {recipe.cuisine}</p>
                          <p className="mt-2 text-gray-500">Difficulty: {recipe.difficulty}</p>
                          <p className="mt-2 text-gray-500">Calories: {recipe.caloriesPerServing} per serving</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )
          ) : (
            <div className="text-center text-gray-600 mt-4">
              <p>Loading recipes...</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default RecipeModal;
