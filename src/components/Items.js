import React, { Component } from 'react';
import itemsJson from "../items.json";
import Search from "./Search.js";

class Items extends Component {
  state = {
    items: itemsJson,
    filteredItems: itemsJson,
  };

  handleAdd = () => {
    let randomIndex = Math.floor(Math.random() * itemsJson.length);
    let addRandom = itemsJson[randomIndex];

    this.setState({
      items: [...this.state.items, addRandom],
      filteredItems: [...this.state.items, addRandom],
    });
  };

  handleChange = (event) => {
    let searchText = event.target.value.toLowerCase();
    let filteredSearch = this.state.items.filter((singleItem) => {
      return singleItem.name.toLowerCase().includes(searchText);
    });
    this.setState({
      filteredItems: filteredSearch,
    });
  };

  render() {
      const{filteredItems} = this.state
    return (
      <div>
        <Search myChange={this.handleChange} />
        <button onClick={this.handleAdd}>+</button>
        <h1>Items: </h1>
        {filteredItems.map((singleItem, index) => {
          return (
            <div key={index}>
              <h4>{singleItem.name}</h4>
            </div>
          );
        })}
      </div>
    );
  }
}
export default Items;