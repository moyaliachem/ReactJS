import React from "react";
import classes from "./Input.module.css";
import { Input, Select, AutoComplete } from "antd";
import "antd/dist/antd.css";

const input = props => {
  let inputElement = null;
  const { Option } = AutoComplete;
  const inputClasses = [classes.InputElement];

  if (props.invalid && props.shouldValidate && props.touched) {
    inputClasses.push(classes.Invalid);
  }
  switch (props.elementType) {
    case "input":
      inputElement = (
        <Input
          className={inputClasses.join(" ")}
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed}
        />
      );
      break;
    case "textarea":
      inputElement = (
        <textarea
          className={inputClasses.join(" ")}
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed}
        />
      );
      break;
    case "select":
      inputElement = (
        <Select className={inputClasses.join(" ")} value={props.value}>
          {props.elementConfig.options.map(option => (
            <Option
              key={option.value}
              value={option.value}
              onChange={props.changed}
            >
              {option.displayValue}
            </Option>
          ))}
        </Select>
      );
      break;
    default:
      inputElement = (
        <Input
          className={inputClasses.join(" ")}
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed}
        />
      );
  }

  return (
    <div className={classes.Input}>
      <label className={classes.Label}>{props.label}</label>
      {inputElement}
    </div>
  );
};

export default input;
