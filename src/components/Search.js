import React, { Component } from 'react'
import { Navbar, Form, FormControl, Button } from "react-bootstrap";

class Search extends Component {
    render() {
        return (
          <div>
            <Navbar className="navbar" bg="light" variant="light">
              <Form inline>
                <FormControl
                  onChange={this.props.myChange}
                  type="text"
                  placeholder="Search"
                  className="mr-sm-2"
                />
              </Form>
            </Navbar>
          </div>
        );
    }
}

export default Search;