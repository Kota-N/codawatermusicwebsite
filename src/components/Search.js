import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Search = ({ placeholder }) => {
  const [searchValue, setSearchValue] = useState(
    placeholder ? placeholder : ''
  );
  const [searchBtn, setsearchBtn] = useState(
    document.querySelector('.search-btn')
  );

  const handleChange = e => {
    setSearchValue(e.target.value);
  };

  const handleEnter = e => {
    e.stopPropagation();
    if (e.key === 'Enter') {
      if (searchBtn && searchValue) {
        searchBtn.click();
      }
    }
  };

  useEffect(() => {
    placeholder && setSearchValue(placeholder);
  }, [placeholder]);

  useEffect(() => {
    setsearchBtn(document.querySelector('.search-btn'));
  }, [searchValue]);

  return (
    <div className="search">
      <input
        onKeyDown={e => handleEnter(e)}
        onChange={e => handleChange(e)}
        value={searchValue}
        type="text"
      />
      {searchValue ? (
        <p>Search</p>
      ) : (
        <p className="search-placeholder">Search</p>
      )}
      <div className="search-underline"></div>

      {searchValue.trim() ? (
        <Link
          className="search-btn"
          to={`/music/search/${searchValue
            .split(' ')
            .filter(x => x !== '')
            .join('-')}/page=1`}
        >
          <i className="fas fa-search"></i>
        </Link>
      ) : (
        <i className="fas fa-search"></i>
      )}
    </div>
  );
};

export default Search;
