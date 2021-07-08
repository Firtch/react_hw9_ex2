import React from "react";
import ReactDOM from "react-dom";

export class Parent2 extends React.Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }

  focusInput = () => this.inputRef.current.focusInput();

  componentDidMount = (_) => console.log(this.inputRef.current);

  render() {
    return (
      <>
      <CustomTextInput ref={this.inputRef} />
      <input type="button" value="Focus" onClick={this.focusInput} />
      </>
    );
  }
}

class CustomTextInput extends React.Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }

  focusInput = () => { 
    // console.log(ReactDOM.findDOMNode(this.inputRef.current));
    // ReactDOM.findDOMNode(this.inputRef.current).querySelector("XPATH / CSS-class / #id/ etc... ").value="Changed";
    this.inputRef.current.focus();
  }

  render() {
    return <input type="text" ref={this.inputRef} />;
  }
}
