import React from "react";
import Search from "../Search";
import Card from "../Card";

const NoMatch = ({ searchWords, pageItems }) => {
  return (
    <div className="music">
      <Search placeholder={searchWords.split("-").join(" ")} />
      <p className="search-keyword">
        Search: {searchWords.split("-").join(", ").toLowerCase()}
      </p>
      <div className="card-container">
        {pageItems.map((item) => (
          <Card key={item._id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default NoMatch;
