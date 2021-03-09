import React, { useState } from "react";
import Dialog from "./dialog";
const Demo: React.FunctionComponent = (): React.ReactElement => {
  const [x, setx] = useState(true);
  return (
    <React.Fragment>
      <button onClick={() => setx(!x)}>xxx</button>
      <Dialog visable={x}></Dialog>
    </React.Fragment>
  );
};
export default Demo;
