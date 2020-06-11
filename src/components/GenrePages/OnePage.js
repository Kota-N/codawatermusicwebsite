import React from 'react';

const OnePage = ({ genreItems, pageNumber }) => {
  return (
    <div className="pagination">
      <p>{`${pageNumber * 12 - 11} - ${genreItems.length} of ${
        genreItems.length
      }`}</p>
    </div>
  );
};

export default OnePage;
