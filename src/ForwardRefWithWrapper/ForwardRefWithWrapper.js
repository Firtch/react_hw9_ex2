import React from "react";
import CustomBtn from "./CustomBtn";

class ForwardRefWithWrapper extends React.Component {

    constructor(props) {
        super(props);
        this.ref = React.createRef();
    }

    componentDidMount() {
        console.log("ForwardRefWithWrapper: ", this.ref.current);
        setTimeout(() => {
            this.ref.current.changeSendingStatus();
        }, 2000);
    }

    render() {
        return (
            <>
            <CustomBtn ref={this.ref}>
                SENDING...
            </CustomBtn>
            </>
        )
    }



}

export default ForwardRefWithWrapper;