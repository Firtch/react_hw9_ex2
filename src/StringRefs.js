import logo from "./logo.svg";
import "./App.css";
import React from "react";

class StringRefs extends React.Component {

  state = { value: '' };

  handleSubmit = e => {
    e.preventDefault();
    this.setState(_ => ({ value: this.refs.textInput.value}));
  }

  render() {
    return (
      <>      
      <form onSubmit={this.handleSubmit}>
        <input type="text" ref="textInput" />
        <button>Submit</button>
        {this.state.value && <h3>Вы отправили: {this.state.value}</h3>}
      </form>
      </>
    );
  }
}

export default StringRefs;
