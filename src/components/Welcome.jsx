import React from "react";

const Welcome = () => {
  return (
    <>
      <div className="bg-black px-4 sm:px-6">
        <div className="text-center py-6 sm:py-8 font-serif max-w-3xl mx-auto">
          <h1 className="text-2xl sm:text-3xl font-bold text-blue-600 dark:text-blue-400 mb-3 sm:mb-4">
            Welcome to Movies Finder
          </h1>
          <p className="text-base sm:text-lg text-gray-300 dark:text-gray-300 leading-relaxed">
            "Movies Finder" is a user-friendly application designed to simplify
            the process of discovering and learning about movies.
          </p>
        </div>
      </div>
    </>
  );
};

export default Welcome;
