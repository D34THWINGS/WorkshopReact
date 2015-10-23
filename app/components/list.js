import React from 'react';

import {Card} from './card';

export class List extends React.Component {
  render() {
    const cardNodes = this.props.cards.map(card => {
      return <Card text={card.name}/>;
    });
    return (
      <div className="list">
        <h2>{this.props.name}</h2>
        {cardNodes}
      </div>
    );
  }
}
