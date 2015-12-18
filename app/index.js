import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute} from 'react-router';

import {App} from './views/app';

// Views
import {Home} from './views/home';

ReactDOM.render((
  <Router>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
    </Route>
  </Router>
), document.getElementById('app-wrapper'));
