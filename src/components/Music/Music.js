import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Card from '../Card';
import Download from '../Download';
import Search from '../Search';
import NotFound from '../NotFound';
import { fetchItems, fetchIndex } from '../../actions/itemsAction';

const Music = () => {
  const items = useSelector(state => state.data.items);
  const indexLength = useSelector(state => state.index.allData.length);
  const dlClick = useSelector(state => state.dlClick);

  const pageNumber = 1;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchItems(pageNumber));
    dispatch(fetchIndex());
  }, [dispatch]);

  useEffect(() => window.scrollTo(0, 0), []);

  if (indexLength === 0) {
    return <NotFound />;
  } else {
    return (
      <div className="music">
        {dlClick.dlPopup ? <Download dlUrl={dlClick.dlUrl} /> : ''}
        <Search />
        <div className="card-container">
          {items.map(item => (
            <Card key={item._id} item={item} />
          ))}
        </div>

        {indexLength <= 12 ? (
          <div className="pagination">
            {' '}
            <p>{`1 - ${indexLength} of ${indexLength}`}</p>
          </div>
        ) : (
          <div className="pagination">
            {' '}
            <p>{`1 - 12 of ${indexLength}`}</p>
            <Link to={`/music/page=${pageNumber + 1}`}>
              <div className="next-page">Next</div>
            </Link>
          </div>
        )}
      </div>
    );
  }
};

export default Music;
