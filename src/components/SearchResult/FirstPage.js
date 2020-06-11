import React from 'react';
import { Link } from 'react-router-dom';

const FirstPage = ({ searchWords, searchResult, pageNumber }) => {
  return (
    <div className="pagination">
      <p>{`${pageNumber * 12 - 11} - ${12 * pageNumber} of ${
        searchResult.length
      }`}</p>
      <Link to={`/music/search/${searchWords}/page=${pageNumber + 1}`}>
        <div className="next-page">Next</div>
      </Link>
    </div>
  );
};

export default FirstPage;
