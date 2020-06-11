import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { nextPage } from '../../actions/pageAction';
import { prevPage } from '../../actions/pageAction';

const MiddlePages = ({ pageNumber, indexLength }) => {
  const dispatch = useDispatch();
  return (
    <div className="pagination">
      <Link
        to={`/music/page=${pageNumber - 1}`}
        onClick={() => dispatch(prevPage())}
      >
        <div className="prev-page">Previous</div>
      </Link>

      <p>{`${12 * pageNumber - 11} - ${pageNumber * 12} of ${indexLength}`}</p>

      <Link
        to={`/music/page=${pageNumber + 1}`}
        onClick={() => dispatch(nextPage())}
      >
        <div className="next-page">Next</div>
      </Link>
    </div>
  );
};

export default MiddlePages;
