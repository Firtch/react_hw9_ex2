import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import StringRefs from "./StringRefs";
import reportWebVitals from "./reportWebVitals";
import CallbackRefs from "./CallbackRefs";
import ReactCreateRef from "./ReactCreateRef";

import {Parent} from "./RefAsPropsToChild";
import {Parent2} from "./ReactCreateRefToChild";
import ForwardRef from "./ForwardRef";
import ForwardRefWithWrapper from "./ForwardRefWithWrapper/ForwardRefWithWrapper";

function MyTextInput(props) {
  const textInput = React.createRef();
  const handleClick = _ => textInput.current.focus();
  return (
    <>
    <input type="text" ref={textInput} />
    <button onClick={handleClick}>Focus</button>
    </>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <h1>Legacy API: String Refs</h1>
    <StringRefs />
    <hr />
    <h1>Callback Refs</h1>
    <CallbackRefs />
    <hr />
    <h1>React.createRef</h1>
    <ReactCreateRef />
    <hr />
    <h1>Ref to Child</h1>
    <Parent />
    <hr />
    <h1>React.createRef to Child</h1>
    <Parent2 />
    <hr />
    <h1>Ref in function</h1>
    <MyTextInput />
    <hr />
    <h1>Forward Ref</h1>
    <ForwardRef />
    <hr />
    <br />
    <h1>Forward Ref With Wrapper</h1>
    <ForwardRefWithWrapper />
    <hr />
    <br />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
