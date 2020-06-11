import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import NotFound from '../NotFound';
import NoMatch from './NoMatch';
import OnePage from './OnePage';
import LastPage from './LastPage';
import FirstPage from './FirstPage';
import MiddlePages from './MiddlePages';
import Download from '../Download';
import Search from '../Search';
import Card from '../Card';
import { fetchIndex } from '../../actions/itemsAction';
import { setSearchResult } from '../../actions/searchResultAction';

const SearchResultPages = ({ match }) => {
  const dispatch = useDispatch();
  const index = useSelector(state => state.index.allData);
  const searchResult = useSelector(state => state.searchResult);
  const dlClick = useSelector(state => state.dlClick);

  const [pageItems, setPageItems] = useState([]);

  const pageNumber = Number(match.params.pageNumber.slice(5));
  const searchWords = match.params.searchWords;

  useEffect(() => {
    dispatch(fetchIndex());
  }, [dispatch]);

  useEffect(() => {
    // Search function
    const handleSearch = () => {
      let searchedData = index;

      for (let i = 0; i < searchWords.split('-').length; i++) {
        searchedData = searchedData.filter(
          item =>
            item.title
              .toLowerCase()
              .includes(searchWords.split('-')[i].toLowerCase()) ||
            item.genre
              .toLowerCase()
              .includes(searchWords.split('-')[i].toLowerCase()) ||
            item.artist
              .toLowerCase()
              .includes(searchWords.split('-')[i].toLowerCase()) ||
            item.tags
              .toLowerCase()
              .includes(searchWords.split('-')[i].toLowerCase())
        );
      }

      dispatch(setSearchResult(searchedData));
    };
    handleSearch();
  }, [dispatch, searchWords, index]);

  useEffect(() => {
    // Pagination
    const getPageItems = pageNum => {
      const items = searchResult.filter(
        (item, i) => i >= 12 * pageNum - 12 && i < 12 * pageNum
      );
      setPageItems(items);
    };

    getPageItems(pageNumber);
  }, [searchResult, pageNumber]);

  useEffect(() => window.scrollTo(0, 0), [pageNumber]);

  // Rendering
  // when there is no match
  if (searchResult.length === 0) {
    return <NoMatch searchWords={searchWords} pageItems={pageItems} />;
  } else if (
    !Number.isNaN(pageNumber) &&
    pageNumber !== 0 &&
    Math.sign(pageNumber) === 1
  ) {
    return (
      //when there is match
      <div className="music">
        {dlClick.dlPopup ? <Download dlUrl={dlClick.dlUrl} /> : ''}

        <Search placeholder={searchWords.split('-').join(' ')} />
        <p className="search-keyword">
          Search:
          {searchWords.split('-').join(', ').toLowerCase()}
        </p>
        <div className="card-container">
          {pageItems.map(item => (
            <Card key={item._id} item={item} />
          ))}
        </div>

        {Math.ceil(searchResult.length / 12) === 1 ? (
          //when the search result items fit within one page
          <OnePage searchResult={searchResult} pageNumber={pageNumber} />
        ) : pageNumber === Math.ceil(searchResult.length / 12) ? (
          //the last page of the search result (no "next page" button)
          <LastPage
            searchWords={searchWords}
            searchResult={searchResult}
            pageNumber={pageNumber}
          />
        ) : pageNumber === 1 ? (
          // the first page of the search result (no "previous page" button)
          <FirstPage
            searchWords={searchWords}
            searchResult={searchResult}
            pageNumber={pageNumber}
          />
        ) : (
          // middle pages ("next" and "previous" buttons)
          <MiddlePages
            searchWords={searchWords}
            searchResult={searchResult}
            pageNumber={pageNumber}
          />
        )}
      </div>
    );
  } else {
    return <NotFound />;
  }
};

export default SearchResultPages;
