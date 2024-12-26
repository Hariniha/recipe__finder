// components/About.js
import React from 'react';

const About = () => {
  return (
    <div className="container mt-5">
      <h1 className="text-center text-4xl font-serif font-bold text-gray-800 mb-4">About Us </h1>
      <div className="bg-orange-100 p-6 font-serif rounded-lg shadow-lg">
        <p className="text-lg text-gray-700  font-serif mb-4">
          Welcome to Recipe Finder, your ultimate destination for discovering delicious recipes from around the world. Whether you are a seasoned chef or just starting out in the kitchen, our platform is designed to help you find the perfect recipe for any occasion.
        </p>
        <h2 className="text-2xl font-bold text-gray-800 font-serif mb-2">Our Mission</h2>
        <p className="text-lg text-gray-700 font-serif mb-4">
          At Recipe Finder, our mission is to inspire and empower people to cook and enjoy great food. We believe that cooking should be accessible to everyone, and our goal is to make it easy for you to find recipes that match your taste preferences, dietary needs, and skill level.
        </p>
        <h2 className="text-2xl font-bold text-gray-800 font-serif mb-2">What We Offer</h2>
        <ul className="list-disc list-inside text-lg text-gray-700 font-serif mb-4">
          <li>Easy-to-use search and filtering tools</li>
          <li>Step-by-step cooking instructions and tips</li>
          <li>User reviews and ratings to help you choose the best recipes</li>
          <li>Personalized recipe recommendations based on your preferences</li>
        </ul>
        <h2 className="text-2xl font-bold font-serif text-gray-800 mb-2">Join Our Community</h2>
        <p className="text-lg text-gray-700 font-serif mb-4">
          Recipe Finder is more than just a recipe website; it's a community of food lovers. We encourage you to join our community by sharing your own recipes, leaving reviews, and connecting with other users. Together, we can create a vibrant and supportive environment where everyone can enjoy the joy of cooking.
        </p>
        <h2 className="text-2xl  font-serif font-bold text-gray-800 mb-2">Contact Us</h2>
        <p className="text-lg text-gray-700 font-serif mb-4">
          If you have any questions, feedback, or suggestions, we'd love to hear from you. Feel free to reach out to us at <a href="mailto:support@recipefinder.com" className="text-orange-500 hover:text-orange-700">support@recipefinder.com</a>.
        </p>
      </div>
    </div>
  ); 
};

export default About;
