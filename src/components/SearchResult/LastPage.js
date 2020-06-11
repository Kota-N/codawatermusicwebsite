import React from 'react';
import { Link } from 'react-router-dom';

const LastPage = ({ searchWords, searchResult, pageNumber }) => {
  return (
    <div className="pagination">
      <Link to={`/music/search/${searchWords}/page=${pageNumber - 1}`}>
        <div className="prev-page">Previous</div>
      </Link>
      <p>{`${pageNumber * 12 - 11} - ${searchResult.length} of ${
        searchResult.length
      }`}</p>
    </div>
  );
};

export default LastPage;
