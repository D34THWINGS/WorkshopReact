import React from 'react';
import {connect} from 'react-redux';

import {List} from '../components/list';
import {fetchTodos} from '../actions/todos';

function mapStateToProps(state) {
  return {
    lists: state.todos.get('lists')
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchTodos: () => dispatch(fetchTodos())
  };
}

class Home extends React.Component {
  componentDidMount() {
    this.props.fetchTodos();
  }

  render() {
    return <div className="app">
      {this.props.lists.map(list => {
        return <List key={list.get('name')} name={list.get('name')} cards={list.get('tasks').toArray()}/>;
      })}
    </div>;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
