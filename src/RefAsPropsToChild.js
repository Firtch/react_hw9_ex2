import React from "react";

export class Parent extends React.Component {
  constructor(props) {
    super(props);
    this.setTextInputRef = (element) => (this.textInput = element);
  }

  focusTextInput = (_) => {
    if (this.textInput) this.textInput.focus();
  };

  componentDidMount() {
    this.focusTextInput();
  }

  render() {
    return (
    <>
    <CustomTextInput setTextInputRef={this.setTextInputRef} />
    <input type="button" value="Focus" onClick={this.focusTextInput} />
    </>);
  }
}

class CustomTextInput extends React.Component {
  render() {
    return (
      <input
        style={{ backgroundColor: "#0d4" }}
        type="text"
        ref={this.props.setTextInputRef}
      />
    );
  }
}
