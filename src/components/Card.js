import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { currentMusic } from '../actions/urlAction';
import { getId } from '../actions/idAction';
import { toggleCardClick } from '../actions/cardClickAction';
import { setCardData } from '../actions/cardDataAction';
import { dlClick } from '../actions/dlClickAction';

const Card = ({ item }) => {
  const idState = useSelector(state => state.id);
  const isPlaying = useSelector(state => state.isPlaying);

  const title = item.title;
  const url = item.mp3Url;
  const id = item._id;
  const imgUrl = item.imgUrl;
  const genre = item.genre;

  useEffect(() => {
    const currentEventTarget = document.querySelector(`#id${idState[1]}`);
    const prevEventTarget = document.querySelector(`#id${idState[0]}`);
    if (idState[0]) {
      if (currentEventTarget && prevEventTarget) {
        if (idState[0] !== idState[1]) {
          if (isPlaying) {
            currentEventTarget.classList.add('playing');
            prevEventTarget.classList.remove('playing');
          } else {
            currentEventTarget.classList.remove('playing');
          }
        } else if (idState[0] === idState[1]) {
          if (isPlaying) {
            currentEventTarget.classList.add('playing');
          } else {
            currentEventTarget.classList.remove('playing');
          }
        }
      } else if (currentEventTarget) {
        if (isPlaying) {
          currentEventTarget.classList.add('playing');
        } else {
          currentEventTarget.classList.remove('playing');
        }
      }
    } else if (idState[1] && !idState[0]) {
      if (currentEventTarget) {
        if (isPlaying) {
          currentEventTarget.classList.add('playing');
        } else {
          currentEventTarget.classList.remove('playing');
        }
      }
    }
  }, [isPlaying, idState]);

  const dispatch = useDispatch();

  return (
    <div
      id={`id${id}`}
      alt="playButton"
      onClick={() => {
        dispatch(currentMusic(url));
        dispatch(getId(id));
        dispatch(toggleCardClick());
        dispatch(setCardData(item));
      }}
      className="card"
      title="Play"
    >
      <div className="img-container">
        <h2 className="card-genre">{genre}</h2>
        <img className="card-img" src={imgUrl} alt="Genre" />
      </div>

      <div className="card-title">
        <Link
          to={{
            pathname: `/music/description/${title.split(' ').join('-')}`,
            state: item,
          }}
          onClick={e => e.stopPropagation()}
        >
          <h3 title={title}>{title}</h3>
        </Link>
      </div>
      <i
        onClick={e => {
          e.stopPropagation();
          dispatch(dlClick(url));
        }}
        title="Download"
        className="fas fa-download"
      ></i>
      <div className="vinyl-player">
        <div className="vinyl ball"></div>
        <div className="vinyl rectangle"></div>
        <div className="vinyl needle"></div>
        <div className="vinyl needle2"></div>
        <i className="fas fa-compact-disc"></i>
      </div>
    </div>
  );
};

export default Card;
