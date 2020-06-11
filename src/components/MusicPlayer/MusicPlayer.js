import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { played, paused } from '../../actions/playStateAction';
import TimeDisplay from './TimeDisplay';
import ProgressBar from './ProgressBar';
import Controls from './Controls';

const MusicPlayer = () => {
  const currentUrl = useSelector(state => state.url);
  const cardClick = useSelector(state => state.cardClick);
  // const isPlaying = useSelector(state => state.isPlaying);
  const cardData = useSelector(state => state.cardData);

  const dispatch = useDispatch();
  const audio = document.querySelector('audio');
  const [currentPercent, setCurrentPercent] = useState('100%');
  const [currentSecond, setCurrentSecond] = useState(0);
  const [currentMinute, setCurrentMinute] = useState(0);
  const [totalMinute, setTotalMinute] = useState(0);
  const [totalSecond, setTotalSecond] = useState(0);
  const [volumeRangeValue, setVolumeRangeValue] = useState(100);
  const [isMuted, setIsMuted] = useState(false);
  const [previousVolume, setPreviousVolume] = useState(1);

  const updateProgress = e => {
    const width = e.target.clientWidth;
    const clickX = e.pageX;
    audio.currentTime = (clickX / width) * audio.duration;
  };
  const changeVolume = e => {
    if (audio) {
      setVolumeRangeValue(e.target.value);
      audio.volume = volumeRangeValue / 100;
      setPreviousVolume(volumeRangeValue / 100);
      setIsMuted(false);

      audio.muted = false;
    }
  };

  const toggleMute = () => {
    if (audio) {
      if (audio.muted) {
        setIsMuted(false);
        audio.muted = false;
        setVolumeRangeValue(previousVolume * 100);
        audio.volume = previousVolume;
      } else if (!audio.muted) {
        setIsMuted(true);
        audio.muted = true;
        setVolumeRangeValue(0);
      }
    }
  };

  useEffect(() => {
    if (audio) {
      if (audio.paused) {
        audio.play();
        dispatch(played());
      }
    }
  }, [dispatch, cardClick, audio]);

  useEffect(() => {
    const spaceBarToPlay = e => {
      if (e.code === 'Space') {
        e.preventDefault();
        if (audio) {
          if (!audio.paused) {
            audio.pause();
            dispatch(paused());
          } else if (audio.paused) {
            audio.play();
            dispatch(played());
          }
        }
      }
    };

    window.addEventListener('keydown', spaceBarToPlay);
  }, [dispatch, audio]);

  return (
    <div className="music-player">
      <ProgressBar
        currentPercent={currentPercent}
        currentUrl={currentUrl}
        updateProgress={updateProgress}
      />

      <TimeDisplay
        currentMinute={currentMinute}
        currentSecond={currentSecond}
        totalMinute={totalMinute}
        totalSecond={totalSecond}
      />
      <audio
        onCanPlay={() => {
          setTotalMinute(Math.floor(audio.duration / 60));
          setTotalSecond(
            Math.floor(audio.duration) - Math.floor(audio.duration / 60) * 60
          );
        }}
        onTimeUpdate={() => {
          setCurrentPercent(`${(audio.currentTime / audio.duration) * 100}%`);
          setCurrentSecond(Math.floor(audio.currentTime));
          setCurrentMinute(Math.floor(audio.currentTime / 60));
          audio.paused ? dispatch(paused()) : dispatch(played());
        }}
        src={currentUrl}
      />
      <p className="title-genre">{cardData.title}</p>
      <Controls
        audio={audio}
        volumeRangeValue={volumeRangeValue}
        changeVolume={changeVolume}
        toggleMute={toggleMute}
        isMuted={isMuted}
      />
    </div>
  );
};

export default MusicPlayer;
