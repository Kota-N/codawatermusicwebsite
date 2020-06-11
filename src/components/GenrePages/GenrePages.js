import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import OnePage from './OnePage';
import FirstPage from './FirstPage';
import LastPage from './LastPage';
import MiddlePages from './MiddlePages';
import NotFound from '../NotFound';
import Download from '../Download';
import Search from '../Search';
import Card from '../Card';
import { fetchIndex } from '../../actions/itemsAction';

const GenrePages = ({ match }) => {
  const dispatch = useDispatch();
  const index = useSelector(state => state.index.allData);
  const dlClick = useSelector(state => state.dlClick);

  const [genreItems, setGenreItems] = useState([]);
  const [pageItems, setPageItems] = useState([]);

  const paramGenre = match.params.genre;
  const pageNumber = Number(match.params.pageNumber.slice(5));

  useEffect(() => dispatch(fetchIndex()), [dispatch]);

  useEffect(() => {
    setGenreItems(
      index.filter(item =>
        item.genre
          .toLowerCase()
          .includes(paramGenre.toLowerCase().split('-').join('/'))
      )
    );
  }, [index, paramGenre]);

  useEffect(() => {
    // Pagination
    const getPageItems = pageNum => {
      const items = genreItems.filter(
        (item, i) => i >= 12 * pageNum - 12 && i < 12 * pageNum
      );
      setPageItems(items);
    };

    getPageItems(pageNumber);
  }, [genreItems, pageNumber]);

  useEffect(() => window.scrollTo(0, 0), [pageNumber]);

  // Rendering
  // when there is no match
  if (genreItems.length === 0) {
    return <NotFound />;
  } else if (
    !Number.isNaN(pageNumber) &&
    pageNumber !== 0 &&
    Math.sign(pageNumber) === 1
  ) {
    return (
      //when there is match
      <div className="music">
        {dlClick.dlPopup ? <Download dlUrl={dlClick.dlUrl} /> : ''}

        <Search placeholder="" />

        <div className="card-container">
          {pageItems.map(item => (
            <Card key={item._id} item={item} />
          ))}
        </div>

        {Math.ceil(genreItems.length / 12) === 1 ? (
          //when the search result items fit within one page
          <OnePage genreItems={genreItems} pageNumber={pageNumber} />
        ) : pageNumber === Math.ceil(genreItems.length / 12) ? (
          //the last page of the search result (no "next page" button)
          <LastPage
            paramGenre={paramGenre}
            genreItems={genreItems}
            pageNumber={pageNumber}
          />
        ) : pageNumber === 1 ? (
          // the first page of the search result (no "previous page" button)
          <FirstPage
            paramGenre={paramGenre}
            genreItems={genreItems}
            pageNumber={pageNumber}
          />
        ) : (
          // middle pages ("next" and "previous" buttons)
          <MiddlePages
            paramGenre={paramGenre}
            genreItems={genreItems}
            pageNumber={pageNumber}
          />
        )}
      </div>
    );
  } else {
    return <NotFound />;
  }
};

export default GenrePages;
