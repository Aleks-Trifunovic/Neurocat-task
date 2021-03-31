import React, { Component } from 'react';
import itemsJson from "../items.json";

class Items extends Component {
  state = {
    items: itemsJson
  };

  render() {
    return (
      <div>
        <h1>Items: </h1>
        {this.state.items.map((singleItem) => {
          return <div>{singleItem.name}</div>;
        })}
      </div>
    );
  }
}
export default Items;