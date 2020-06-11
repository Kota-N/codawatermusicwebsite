import React from 'react';
import Home from './components/Home';
import Nav from './components/Nav';
import BackgroundLogo from './components/BackgroundLogo';
import Music from './components/Music/Music';
import License from './components/License';
import Contact from './components/Contact';
import MusicPages from './components/Music/MusicPages';
import GenrePages from './components/GenrePages/GenrePages';
import SearchResultPages from './components/SearchResult/SearchResultPages';
import Description from './components/Description';
import NotFound from './components/NotFound';
import Footer from './components/Footer';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const initialState = {};
const middleware = [thunk];
const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(...middleware)
);

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <Nav />
          <BackgroundLogo />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/music" component={Music} />
            <Route exact path="/license" component={License} />
            <Route exact path="/contact" component={Contact} />

            <Route exact path="/music/:pageNumber" component={MusicPages} />
            <Route
              exact
              path="/music/genre/:genre/:pageNumber"
              component={GenrePages}
            />
            <Route
              exact
              path="/music/description/:title"
              component={Description}
            />
            <Route
              exact
              path="/music/search/:searchWords/:pageNumber"
              component={SearchResultPages}
            />
            <Route component={NotFound} />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
