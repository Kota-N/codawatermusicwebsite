import React from 'react';
import { Link } from 'react-router-dom';

const LastPage = ({ paramGenre, genreItems, pageNumber }) => {
  return (
    <div className="pagination">
      <Link to={`/music/genre/${paramGenre}/page=${pageNumber - 1}`}>
        <div className="prev-page">Previous</div>
      </Link>
      <p>{`${pageNumber * 12 - 11} - ${genreItems.length} of ${
        genreItems.length
      }`}</p>
    </div>
  );
};

export default LastPage;
