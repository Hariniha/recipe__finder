import React from 'react'

const Feedback = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg mt-8 max-w-xl w-full">
    <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">We'd Love Your Feedback!</h2>
    <form  className="space-y-4">
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
  )
}

export default Feedback