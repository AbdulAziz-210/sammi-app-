import React, { Component } from "react";

import Information from "./information";
import ShoppingAddFrom from "./shopping-add-from";
import ShoppingList from "./shopping-list";
import Filter from "./filter";
import { arr } from "../constants";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: arr
    };
  }

  onDelete = (id) => {
    const newArr = this.state.data.filter((item) => item.id !== id);
    this.setState({
      data: newArr
    });
  };
  onToggleActive = (id) => {
    const newArr = this.state.data.map((item) => {
      if (item.id === id) {
        return { ...item, active: !item.active };
      }
      return item;
    });

    this.setState({
      data: newArr
    });
  };

  render() {
    const { data } = this.state;
    return (
      <>
        <div className="app">
          <div className="wrapper">
            <div className="card">
              <Information />

              <ShoppingAddFrom />

              <ShoppingList
                data={data}
                onDelete={this.onDelete}
                onToggleActive={this.onToggleActive}
              />

              <Filter />
            </div>
            <img src="/earth.svg" alt="" />
          </div>
        </div>
      </>
    );
  }
}

export default App;
