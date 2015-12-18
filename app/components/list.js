import React from 'react';

import {Card} from './card';

export class List extends React.Component {
  render() {
    return (
      <div className="list">
        <h2>{this.props.name}</h2>
        {this.props.cards.map(card => {
          return <Card key={card.get('name')} text={card.get('name')}/>;
        })}
      </div>
    );
  }
}
