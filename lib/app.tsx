import React, { ReactElement } from "react";
import Icon from "./icon/icon";
const App: React.FunctionComponent = (): ReactElement => {
  return (
    <div>
      <Icon
        name="setting"
        onClick={() => {
          console.log("click");
        }}
      />
      <Icon name="loading" className="aaa bbb ccc" />
      <Icon name="info" />
    </div>
  );
};
export default App;
