import React from 'react';
import ReactDOM from 'react-dom';

import {List} from './components/list';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {lists: []};
  }

  componentDidMount() {
    fetch('http://localhost:8080/lists')
      .then(response => {
        return response.json();
      })
      .then(lists => {
        this.setState({lists});
      });
  }

  render() {
    const listNodes = this.state.lists.map(list => {
      return <List name={list.name} cards={list.tasks}/>;
    });
    return <div className="app">{listNodes}</div>;
  }
}

ReactDOM.render(
  <App/>,
  document.getElementById('example')
);
