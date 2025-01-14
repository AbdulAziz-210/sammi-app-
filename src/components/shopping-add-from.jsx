import React from "react";

//
class ShoppingAddFrom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Buy ",
      number: ""
    };
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onAdd = () => {
    const data = {
      title: this.state.title,
      number: this.state.number
    };
    console.log(data);
  };
  render() {
    const { number, title } = this.state;
    return (
      <div className="form">
        <input
          type="text"
          className="title"
          placeholder="Title..."
          name="title"
          value={title}
          onChange={this.onChange}
        />
        <input
          type="number"
          className="number"
          placeholder="14"
          name="number"
          value={number}
          onChange={this.onChange}
        />
        <button onClick={this.onAdd}>Add</button>
      </div>
    );
  }
}
export default ShoppingAddFrom;
