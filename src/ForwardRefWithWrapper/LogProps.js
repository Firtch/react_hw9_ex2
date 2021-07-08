import React from "react";

function logProps(WrappedComponent) {
  class LogProps extends React.Component {
    componentDidMount(prevProps) {
      console.log("old props: ", prevProps);
      console.log("new props: ", this.props);
    }

    render() {
      const { forwardedRef, ...rest } = this.props;
      return <WrappedComponent ref={forwardedRef} {...rest} />;
    }
  }
  //   return LogProps;
  return React.forwardRef((props, ref) => {
    return <LogProps {...props} forwardedRef={ref} />;
  });
}

export default logProps;
