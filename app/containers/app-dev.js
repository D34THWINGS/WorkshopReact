import React from 'react';
import {Provider} from 'react-redux';

import configureStore from '../store/configure-store-dev';
import {DevTools} from './dev-tools';

const store = configureStore();

export class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          {this.props.children}
          <DevTools/>
        </div>
      </Provider>
    );
  }
}
