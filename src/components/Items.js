import React, { Component } from 'react';
import itemsJson from "../items.json";

class Items extends Component {
  state = {
    items: itemsJson
  };

  handleAdd = () => {
      let randomIndex = Math.floor(Math.random() * itemsJson.length)
      let addRandom = itemsJson[randomIndex];

      this.setState({
        items: [...this.state.items, addRandom],
      });
  }

  render() {
    return (
      <div>
      <button onClick={this.handleAdd}>+</button>
        <h1>Items: </h1>
        {this.state.items.map((singleItem, index) => {
          return <div key={index}><h4>{singleItem.name}</h4></div>;
        })}
      </div>
    );
  }
}
export default Items;