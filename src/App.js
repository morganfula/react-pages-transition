/* eslint-disable no-undef */
import React from 'react';
import './App.scss';
import { Route } from 'react-router-dom';

import About from './pages/about';
import Home from './pages/home';
import Header from './components/header'

const routes = [
  { path: '/', name: 'Home', Component: Home },
  { path: '/about', name: 'About', Component: About }
];

function App() {
  return <>
    <Header />
    <div className="container">
      {routes.map(({ path, Component }) => (
        <Route key='name' path={path} exact>
          <div className="page">
            <Component />
          </div>
        </Route>
      ))}
    </div>
  </>;
}

export default App;
