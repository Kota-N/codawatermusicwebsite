import React from 'react';
import Card from './Card';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Download from './Download';

const Description = ({ location }) => {
  const item = location.state;
  const dlClick = useSelector(state => state.dlClick);

  return (
    <div className="description">
      {dlClick.dlPopup ? <Download dlUrl={dlClick.dlUrl} /> : ''}
      <div className="description-container">
        <Card item={item} />
        <div className="about-track">
          <h3 className="track-title">{item.title}</h3>
          <h3>
            <Link to={`/music/search/${item.artist}/page=1`}>
              {item.artist}
            </Link>
          </h3>
          <h3>
            {item.genre.includes('/') ? (
              <Link
                to={`/music/search/${item.genre.split('/').join('-')}/page=1`}
              >
                {item.genre}
              </Link>
            ) : (
              <Link to={`/music/search/${item.genre}/page=1`}>
                {item.genre}
              </Link>
            )}
          </h3>
          <p>{item.description}</p>
        </div>
      </div>
      <div className="tags">
        <h4>Tags: </h4>
        <div className="tag-name">
          {item.tags.split(', ').map(tag => (
            <Link key={tag} to={`/music/search/${tag}/page=1`}>
              {tag}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Description;
