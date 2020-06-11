import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { prevPage } from '../../actions/pageAction';

const LastPage = ({ pageNumber, indexLength }) => {
  const dispatch = useDispatch();
  return (
    <div className="pagination">
      <Link
        to={`/music/page=${pageNumber - 1}`}
        onClick={() => dispatch(prevPage())}
      >
        <div className="prev-page">Previous</div>
      </Link>

      <p>{`${12 * pageNumber - 11} - ${indexLength} of ${indexLength}`}</p>
    </div>
  );
};

export default LastPage;
