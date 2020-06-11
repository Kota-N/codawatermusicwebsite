import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { played, paused } from '../../actions/playStateAction';

const Controls = ({
  audio,
  volumeRangeValue,
  changeVolume,
  toggleMute,
  isMuted,
}) => {
  const dispatch = useDispatch();
  const isPlaying = useSelector(state => state.isPlaying);
  const cardData = useSelector(state => state.cardData);

  const marqueeP = document.querySelector('.marquee-p');

  useEffect(() => {
    if (marqueeP) {
      if (isPlaying) {
        marqueeP.classList.add('scrolling');
      } else if (!isPlaying) {
        marqueeP.classList.remove('scrolling');
      }
    }
  }, [isPlaying, marqueeP]);

  return (
    <div className="controls">
      {cardData.title ? (
        <div className="marquee">
          <p className="marquee-p">
            {cardData.title} - {cardData.artist}
          </p>
        </div>
      ) : (
        <div className="marquee">
          <p></p>
        </div>
      )}

      {isPlaying ? (
        <i
          onClick={() => {
            audio && dispatch(paused());
            audio && audio.pause();
          }}
          className="fas fa-pause"
        ></i>
      ) : (
        <i
          onClick={() => {
            audio && dispatch(played());
            audio && audio.play();
          }}
          className="fa fa-play"
        ></i>
      )}
      {isMuted ? (
        <i onClick={toggleMute} className="volume fas fa-volume-mute"></i>
      ) : volumeRangeValue < 1 ? (
        <i onClick={toggleMute} className="volume fas fa-volume-off"></i>
      ) : volumeRangeValue <= 45 ? (
        <i onClick={toggleMute} className="volume fas fa-volume-down"></i>
      ) : (
        <i onClick={toggleMute} className="volume fas fa-volume-up"></i>
      )}

      <div className="volume-slider">
        <div className="volume-background">
          <div
            style={{ width: `${volumeRangeValue}%` }}
            className="volume-fill"
          ></div>
          <input
            type="range"
            value={volumeRangeValue}
            onChange={e => changeVolume(e)}
          />
        </div>
      </div>
    </div>
  );
};

export default Controls;
