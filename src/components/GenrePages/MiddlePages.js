import React from 'react';
import { Link } from 'react-router-dom';

const MiddlePages = ({ paramGenre, genreItems, pageNumber }) => {
  return (
    <div className="pagination">
      <Link to={`/music/genre/${paramGenre}/page=${pageNumber - 1}`}>
        <div className="prev-page">Previous</div>
      </Link>
      <p>{`${pageNumber * 12 - 11} - ${12 * pageNumber} of ${
        genreItems.length
      }`}</p>
      <Link to={`/music/genre/${paramGenre}/page=${pageNumber + 1}`}>
        <div className="next-page">Next</div>
      </Link>
    </div>
  );
};

export default MiddlePages;
