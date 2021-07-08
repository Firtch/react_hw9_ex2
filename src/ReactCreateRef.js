import React from "react";

class ReactCreateRef extends React.Component {

  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }

  componentDidMount() {
    console.log(this.inputRef.current.value);
  }

  render() {
    return <input type="text" ref={this.inputRef} value="testVal" />
  }
}

export default ReactCreateRef;