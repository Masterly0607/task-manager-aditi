import React from 'react';

const NotFoundError: React.FC = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-6 text-center">
      <h1 className="text-9xl font-black text-gray-200 mb-8">
        404
      </h1>
      <h2 className="text-4xl font-bold text-gray-800 mb-4">
        Page not found
      </h2>
      <p className="text-xl text-gray-600 max-w-lg mb-10">
        Sorry, we could not find the page you are looking for. It might have been moved or does not exist.
      </p>

      <a
        href="/"
        className="px-8 py-4 bg-indigo-600 text-white text-lg font-medium rounded-lg hover:bg-indigo-700 transition"
      >
        Back to Home
      </a>
    </div>
  );
};

export default NotFoundError;