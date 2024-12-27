import React, { useState } from 'react';

const FeedbackForm = () => {
  const [feedback, setFeedback] = useState({
    question1: '',
    question2: '',
    question3: '',
  });
  const [feedbackSummary, setFeedbackSummary] = useState('');

  const handleFeedbackChange = (e) => {
    setFeedback({
      ...feedback,
      [e.target.name]: e.target.value,
    });
  };

  const handleFeedbackSubmit = (e) => {
    e.preventDefault();
    // Construct the feedback summary message
    const summary = `
        Thank you for your feedback! 🌟

        Here's a summary of your fun and creative answers:
        
        1. If you were a vegetable, which one would you be and why?
           🥦 Answer: ${feedback.question1}
        
        2. If you had to cook a meal using only 3 ingredients, what would they be?
           🍳 Answer: ${feedback.question2}
        
        3. If you could invite any celebrity to dinner, what recipe would you cook for them and why?
           🍝 Answer: ${feedback.question3}

        Your feedback is like the secret ingredient that makes our Recipe Finder even better! We appreciate you sharing your thoughts with us.

        Remember, a recipe a day keeps the hunger away! 🍽️
    `;
    setFeedbackSummary(summary);
    // Optionally, reset the form after submission
    setFeedback({
      question1: '',
      question2: '',
      question3: '',
    });
  };

  return (
    <div className="container mt-5">
      <div className="bg-orange-100 p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">We'd Love Your Feedback!</h2>
        <form onSubmit={handleFeedbackSubmit} className="space-y-4">
          <div>
            <label htmlFor="question1" className="block text-lg font-semibold text-gray-700">
              If you were a vegetable, which one would you be and why?
            </label>
            <input
              type="text"
              name="question1"
              id="question1"
              value={feedback.question1}
              onChange={handleFeedbackChange}
              placeholder="Enter your answer"
              className="w-full p-3 mt-2 border-2 border-gray-300 rounded-lg bg-orange-50 focus:outline-none focus:ring-2 focus:ring-orange-300"
            />
          </div>

          <div>
            <label htmlFor="question2" className="block text-lg font-semibold text-gray-700 ">
              If you had to cook a meal using only 3 ingredients, what would they be?
            </label>
            <input
              type="text"
              name="question2"
              id="question2"
              value={feedback.question2}
              onChange={handleFeedbackChange}
              placeholder="Enter your answer"
              className="w-full p-3 mt-2 border-2 border-gray-300 rounded-lg focus:outline-none bg-orange-50 focus:ring-2 focus:ring-orange-300"
            />
          </div>

          <div>
            <label htmlFor="question3" className="block text-lg font-semibold text-gray-700">
              If you could invite any celebrity to dinner, what recipe would you cook for them and why?
            </label>
            <input
              type="text"
              name="question3"
              id="question3"
              value={feedback.question3}
              onChange={handleFeedbackChange}
              placeholder="Enter your answer"
              className="w-full p-3 mt-2 border-2 border-gray-300 rounded-lg bg-orange-50 focus:outline-none focus:ring-2 focus:ring-orange-300"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-2 px-6 rounded-lg mt-4 transition hover:bg-orange-600"
          >
            Submit Feedback
          </button>
        </form>
        {feedbackSummary && (
          <div className="mt-6 p-4 bg-orange-100 rounded-lg shadow-lg">
            <pre className="whitespace-pre-wrap">{feedbackSummary}</pre>
          </div>
        )}
      </div>
    </div>
  );
};

export default FeedbackForm;
