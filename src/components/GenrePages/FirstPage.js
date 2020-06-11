import React from 'react';
import { Link } from 'react-router-dom';

const FirstPage = ({ paramGenre, genreItems, pageNumber }) => {
  return (
    <div className="pagination">
      <p>{`${pageNumber * 12 - 11} - ${12 * pageNumber} of ${
        genreItems.length
      }`}</p>
      <Link to={`/music/genre/${paramGenre}/page=${pageNumber + 1}`}>
        <div className="next-page">Next</div>
      </Link>
    </div>
  );
};

export default FirstPage;
