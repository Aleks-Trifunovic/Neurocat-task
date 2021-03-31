import React, { Component } from 'react';
import items from "../items.json";

class Items extends Component {
  state = {
    items: items
  };

  render() {
    return (
      <div>
        <h1>Items: </h1>
        {this.state.items.map((singleItem) => {
          return <div>{singleItem.item}</div>;
        })}
      </div>
    );
  }
}
export default Items;