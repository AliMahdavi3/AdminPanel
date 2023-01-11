import React from "react";
import Input from "./Input";
import Switch from "./Switch";


function AuthFormControl(props) {
  switch (props.control) {
    case "input":
      return <Input {...props} />;
    case "switch":
      return <Switch {...props} />;
    default:
      return null;
  }
}

export default AuthFormControl;
