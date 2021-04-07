import React, { Fragment } from "react";
import Button from "./button";
const ButtonDemo: React.FunctionComponent = (): React.ReactElement => {
  const fn = () => {
    console.log(12);
  };
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        height: "100%"
      }}
    >
      <Button>Button</Button>
      <Button type="primary" onClick={fn}>
        Button
      </Button>
      <Button type="dashed">Button</Button>
      <Button type="danger">Button</Button>
    </div>
  );
};
export default ButtonDemo;
