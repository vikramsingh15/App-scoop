import React from 'react';
import { Router, Route } from 'react-router-dom';
import history from './history';
import IndexBooks from './components/IndexBooks/index';
import ShowBook from './components/ShowBook';

const App = () => {
  return (
    <Router history={history}>
      <Route exact path='/' component={IndexBooks} />
      <Route exact path='/book/:id' component={ShowBook} />
    </Router>
  );
};

export default App;
