// src/components/Pagination.js
import React from 'react';
import { Link } from 'react-router-dom';

const Pagination = ({ prevLink, nextLink }) => {
  return (
    <div className="flex justify-between mt-8">
      {prevLink && (
        <Link to={prevLink} className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-600">
          &lt; Previous
        </Link>
      )}
      {nextLink && (
        <Link to={nextLink} className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-600">
          Next &gt;
        </Link>
      )}
    </div>
  );
};

export default Pagination;
