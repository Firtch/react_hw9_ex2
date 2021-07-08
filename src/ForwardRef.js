import React from "react";

const CustomButton = React.forwardRef((props, ref) => (
    <button ref={ref} className="CustomBtn">
      {props.children}
    </button>
  ))

  class ForwardRef extends React.Component {

    constructor(props) {
        super(props);
        this.ref = React.createRef();
    }

    componentDidMount() {
        this.ref.current.focus();
    }

    render() {
        return (
            <CustomButton ref={this.ref}>
                <strong>SEND</strong>
            </CustomButton>
        );
    }

  }

  export default ForwardRef;