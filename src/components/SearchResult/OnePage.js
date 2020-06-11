import React from 'react';

const OnePage = ({ searchResult, pageNumber }) => {
  return (
    <div className="pagination">
      <p>{`${pageNumber * 12 - 11} - ${searchResult.length} of ${
        searchResult.length
      }`}</p>
    </div>
  );
};

export default OnePage;
