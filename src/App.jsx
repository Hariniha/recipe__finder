// App.jsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import RecipeModal from './components/RecipeModal';
import FeedbackForm from './components/Feedback';
import About from "./components/About"
import Footer from './components/Footer';

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
    alert('Thanks for your feedback! You made us smile!');
  };

  return (
    <Router>
      <div className="flex flex-col bg-orange-100 min-h-screen">
        <Navbar />
        <div className="App  flex-grow flex flex-col items-center p-4">
          <Routes>
            {/* Home Route */}
            <Route path="/" element={(
              <>
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

                {isSearchDone && (
                  <div className="text-green-500 text-xl mt-4 font-semibold">
                    Thank you for searching! Here are your results.
                  </div>
                )}

                {isSearchDone && searchTerm && (
                  <RecipeModal
                    searchTerm={searchTerm}
                    setIsRecipesLoaded={setIsRecipesLoaded}
                  />
                )}
              </>
            )} />
            
            {/* Feedback Route */}
            <Route path="/feedback" element={ <FeedbackForm/> } />
            <Route path="/about" element={ <About/> } />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
