import React from "react";

class CallbackRefs extends React.Component {

  constructor(props) {
    super(props);
    this.setTextInputRef = element => this.textInput = element;
  }

  focusTextInput = _ => {
    if(this.textInput)
    this.textInput.focus();
  }

  componentDidMount() {
    this.focusTextInput();
  }

  

  render() {
    return (
      <>      
      <input type="text" ref={this.setTextInputRef} />
      <input type="button" value="focus" onClick={this.focusTextInput} />
      </>
    );
  }
}

export default CallbackRefs;