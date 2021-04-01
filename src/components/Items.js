import React, { Component } from 'react';
import itemsJson from "../items.json";
import Search from "./Search.js";
import { Button } from "react-bootstrap";

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
      <div className="displayed">
        <div className="nav">
          <Search myChange={this.handleChange} />
            
          <Button className="button" variant="outline-primary" onClick={this.handleAdd}>
            +
          </Button>
        </div>
        <h1>Items: </h1>
        {filteredItems.map((singleItem, index) => {
          return (
            <div key={index}>
              <h4>{singleItem.name}</h4>
              <hr className="line" />
            </div>
          );
        })}
      </div>
    );
  }
}
export default Items;