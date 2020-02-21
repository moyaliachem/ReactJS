import React from "react";
import classes from "./BuildControl.module.css";
import { Button } from "antd";
import "antd/dist/antd.css";

const buildControl = props => (
  <div className={classes.BuildControl}>
    <div className={classes.Label}>{props.label}</div>
    <Button
      className={classes.Less}
      onClick={props.removed}
      disabled={props.disabled}
    >
      Less -
    </Button>
    <Button className={classes.More} onClick={props.added}>
      More +
    </Button>
  </div>
);

export default buildControl;
