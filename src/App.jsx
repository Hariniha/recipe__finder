import React, { useState } from 'react';
import RecipeModal from './components/RecipeModal';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isSearchDone, setIsSearchDone] = useState(false);
  const [isRecipesLoaded, setIsRecipesLoaded] = useState(false); // Track when recipes are fully loaded
  const [feedback, setFeedback] = useState({
    question1: '',
    question2: '',
    question3: '',
  });

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setIsSearchDone(false); // Reset the "Thank You" message and recipes when the user changes the search term
    setIsRecipesLoaded(false); // Reset recipe loading state
  };

  const handleSearchSubmit = () => {
    if (searchTerm) {
      setIsSearchDone(true); // Set to true to display the "Thank You" message
      setIsRecipesLoaded(false); // Reset recipe loading state when a new search is triggered
    }
  };

  const handleFeedbackChange = (e) => {
    setFeedback({
      ...feedback,
      [e.target.name]: e.target.value,
    });
  };

  const handleFeedbackSubmit = (e) => {
    e.preventDefault();
    // You can handle the feedback here (e.g., save it, display a message, etc.)
    alert('Thanks for your feedback! You made us smile!');
  };

  return (
    <div className="App bg-orange-100 min-h-screen flex flex-col items-center p-4">
      <h1 className="text-5xl font-extrabold text-gray-800 my-4 drop-shadow-lg">
        Recipe Finder
      </h1>
      <input
        type="text"
        placeholder="Search recipes..."
        value={searchTerm}
        onChange={handleSearchChange}
        className="p-2 w-full max-w-md border-2 border-orange-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-300 transition duration-200 mb-4"
      />
      <button
        onClick={handleSearchSubmit}
        className="bg-orange-500 text-white py-2 px-6 rounded-lg mt-2 transition hover:bg-orange-600"
      >
        Search
      </button>

      {/* Show "Thank You" message only after search is done */}
      {isSearchDone && (
        <div className="text-green-500 text-xl mt-4 font-semibold">
          Thank you for searching! Here are your results.
        </div>
      )}

      {/* Conditionally render RecipeModal based on search term and isSearchDone */}
      {isSearchDone && searchTerm && (
        <RecipeModal
          searchTerm={searchTerm}
          setIsRecipesLoaded={setIsRecipesLoaded} // Pass this to RecipeModal to mark recipes as loaded
        />
      )}

      {/* Show feedback form only after recipes have been fully loaded */}
      {isRecipesLoaded && isSearchDone && searchTerm && (
        <div className="bg-white p-6 rounded-lg shadow-lg mt-8 max-w-xl w-full">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">We'd Love Your Feedback!</h2>
          <form onSubmit={handleFeedbackSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="question1"
                className="block text-lg font-semibold text-gray-700"
              >
                If you were a vegetable, which one would you be and why?
              </label>
              <input
                type="text"
                name="question1"
                id="question1"
                value={feedback.question1}
                onChange={handleFeedbackChange}
                placeholder="Enter your answer"
                className="w-full p-3 mt-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-300"
              />
            </div>

            <div>
              <label
                htmlFor="question2"
                className="block text-lg font-semibold text-gray-700"
              >
               If you had to cook a meal using only 3 ingredients, what would they be?
              </label>
              <input
                type="text"
                name="question2"
                id="question2"
                value={feedback.question2}
                onChange={handleFeedbackChange}
                placeholder="Enter your answer"
                className="w-full p-3 mt-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-300"
              />
            </div>

            <div>
              <label
                htmlFor="question3"
                className="block text-lg font-semibold text-gray-700"
              >
               If you could invite any celebrity to dinner, what recipe would you cook for them and why?
              </label>
              <input
                type="text"
                name="question3"
                id="question3"
                value={feedback.question3}
                onChange={handleFeedbackChange}
                placeholder="Enter your answer"
                className="w-full p-3 mt-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-300"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-orange-500 text-white py-2 px-6 rounded-lg mt-4 transition hover:bg-orange-600"
            >
              Submit Feedback
            </button>
          </form>
        </div>
      )}
      <div>
      </div>
    </div>
  );
};

export default App;
