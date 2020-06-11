import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import './css/Home.css';
import './css/Nav.css';
import './css/BackgroundLogo.css';
import './css/Music.css';
import './css/License.css';
import './css/Contact.css';
import './css/Card/Card.css';
import './css/Card/vinyl-player.css';
import './css/MusicPlayer/MusicPlayer.css';
import './css/MusicPlayer/volume-slider.css';
import './css/Description.css';
import './css/Download.css';
import './css/Search.css';
import './css/media.css';
import './css/Footer.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
