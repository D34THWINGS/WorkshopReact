import React from 'react';
import {Provider} from 'react-redux';
import configureStore from '../store/configure-store-prod.js';

const store = configureStore();

export class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        {this.props.children}
      </Provider>
    );
  }
}
