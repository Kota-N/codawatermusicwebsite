import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchIndex } from '../actions/itemsAction';
import Card from './Card';
import Download from './Download';

const Home = () => {
  const dispatch = useDispatch();
  const index = useSelector(state => state.index.allData);
  const dlClick = useSelector(state => state.dlClick);

  useEffect(() => dispatch(fetchIndex()), [dispatch]);

  return (
    <div className="home">
      <h2 className="home-text">
        <Link to="/music">Royalty-Free Music</Link>
      </h2>
      <h3>by CodaWaterMusic</h3>

      {index[0] ? (
        <div className="new-arrival">
          {dlClick.dlPopup ? <Download dlUrl={dlClick.dlUrl} /> : ''}
          <p className="new">NEW</p>
          <Card item={index[0]} />
          <Link className="new-arrival-link" to="/music">
            <p>View All</p> <i className="fas fa-angle-double-down"></i>
          </Link>
        </div>
      ) : (
        ''
      )}
      <div className="genre-buttons">
        <h3>
          <Link to="/music/genre/piano/page=1">PIANO</Link>
        </h3>
        <h3>
          <Link to="/music/genre/electronic/page=1">ELECTRONIC</Link>
        </h3>
        <h3>
          <Link to="/music/genre/cinematic/page=1">CINEMATIC</Link>
        </h3>
        <h3>
          <Link to="/music/genre/corporate/page=1">CORPORATE</Link>
        </h3>
        <h3>
          <Link to="/music/genre/acoustic/page=1">ACOUSTIC</Link>
        </h3>
        <h3>
          <Link to="/music/genre/rock/page=1">ROCK</Link>
        </h3>
        <h3>
          <Link to="/music/genre/pop/page=1">POP</Link>
        </h3>
        <h3>
          <Link to="/music/genre/game-8bit/page=1">GAME/8BIT</Link>
        </h3>
      </div>
    </div>
  );
};

export default Home;
