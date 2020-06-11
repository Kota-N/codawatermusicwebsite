import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { dlExit } from '../actions/dlClickAction';

const Download = () => {
  const dispatch = useDispatch();
  const dlUrl = useSelector(state => state.dlClick.dlUrl);
  return (
    <div
      className="download"
      onClick={() => {
        dispatch(dlExit());
      }}
    >
      <div className="download-background" onClick={e => e.stopPropagation()}>
        <p className="free-download">Free Download</p>
        <i
          className="fas fa-times"
          onClick={e => {
            e.stopPropagation();
            dispatch(dlExit());
          }}
        ></i>
        <div className="download-btn">
          <a href={dlUrl}>
            <div className="download-mp3 download-option">
              <i className="fas fa-download"></i>
              <h3>mp3</h3>
            </div>
          </a>
          <div className="download-wav download-option">
            <h3 style={{ textDecoration: 'line-through #c720ab 3px' }}>wav</h3>
            <p>Coming Soon!</p>
          </div>
        </div>
        <p>Wave version will be available soon!</p>
      </div>
    </div>
  );
};

export default Download;
