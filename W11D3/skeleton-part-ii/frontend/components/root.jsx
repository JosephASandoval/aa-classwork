import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter, Route } from "react-router-dom";
import App from './app';
import PokemonIndexContainer from './../components/pokemon/pokemon_index_container';

const Root = ({ store }) => (
  <Provider store={store}>
    <HashRouter>
      {/* <Route path="/" component={PokemonIndexContainer} /> */}
      <App />
    </HashRouter>
  </Provider>
);

export default Root;