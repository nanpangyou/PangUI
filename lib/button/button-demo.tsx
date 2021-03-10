import React, { Fragment } from "react";
import Button from "./button";
const ButtonDemo: React.FunctionComponent = (): React.ReactElement => {
  return (
    <Fragment>
      <Button>Button</Button>
      <Button type="primary">Button</Button>
    </Fragment>
  );
};
export default ButtonDemo;
