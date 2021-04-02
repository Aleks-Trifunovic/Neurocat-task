import React, { Component } from 'react';
import itemsJson from "../items.json";
import Search from "./Search.js";
import { Button, Card } from "react-bootstrap";
import video from "./Video/video.mp4"

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
      <video className="vid" autoPlay loop muted
      style={{
          position: "absolute",
          width: "100%"
      }}>
          <source src={video} type="video/mp4"/>
      </video>
        <div className="displayed">
          <Card className="card">
            <div className="nav">
              <Search myChange={this.handleChange} />
              <Button
                className="button"
                data-tooltip="Click to add items"
                variant="outline-primary"
                onClick={this.handleAdd}>
                +
              </Button>
            </div>
            <hr className="line2"/>
            <img src="../../neurocatLogo.png" style={{width: "50px"}}/>
            <br/>
            {filteredItems.map((singleItem, index) => {
              return (
                <div key={index}>
                  <h5>{singleItem.name}</h5>
                  <hr className="line" />
                </div>
              );
            })}
          </Card>
        </div>
      </div>
    );
  }
}
export default Items;