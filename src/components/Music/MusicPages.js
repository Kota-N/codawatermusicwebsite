import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Card from '../Card';
import Music from './Music';
import NotFound from '../NotFound';
import Download from '../Download';
import Search from '../Search';
import LastPage from './LastPage';
import MiddlePages from './MiddlePages';
import { fetchItems, fetchIndex } from '../../actions/itemsAction';

const MusicPages = ({ match }) => {
  const items = useSelector(state => state.data.items);
  const indexLength = useSelector(state => state.index.allData.length);
  const dlClick = useSelector(state => state.dlClick);

  const dispatch = useDispatch();
  const pageNumber = Number(match.params.pageNumber.slice(5));

  useEffect(() => {
    dispatch(fetchIndex());
    if (
      !Number.isNaN(pageNumber) &&
      pageNumber !== 0 &&
      pageNumber <= Math.ceil(indexLength / 12)
    ) {
      dispatch(fetchItems(pageNumber));
    }
  }, [dispatch, pageNumber, indexLength]);

  useEffect(() => window.scrollTo(0, 0), [pageNumber]);

  //Rendering
  //checks for bad page numbers (NaN, 0, -1)
  if (
    !Number.isNaN(pageNumber) &&
    pageNumber !== 0 &&
    Math.sign(pageNumber) === 1
  ) {
    //when items fit within one page, return Music page
    if (pageNumber === 1) {
      return <Music />;
    } else if (pageNumber <= Math.ceil(indexLength / 12)) {
      return (
        <div className="music">
          {dlClick.dlPopup ? <Download dlUrl={dlClick.dlUrl} /> : ''}
          <Search />
          <div className="card-container">
            {items.map(item => (
              <Card key={item._id} item={item} />
            ))}
          </div>

          {
            //the last page doesn't have "next" button
            pageNumber === Math.ceil(indexLength / 12) ? (
              <LastPage pageNumber={pageNumber} indexLength={indexLength} />
            ) : (
              <MiddlePages pageNumber={pageNumber} indexLength={indexLength} />
            )
          }
        </div>
      );
    } else {
      return <NotFound />;
    }
  } else {
    return <NotFound />;
  }
};
export default MusicPages;
