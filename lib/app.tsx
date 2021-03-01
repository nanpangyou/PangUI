import React, { ReactElement } from "react";
import Icon from "./icon/icon";
const App: React.FunctionComponent = (): ReactElement => {
  return (
    <div>
      <Icon name="setting" />
      <Icon name="loading" />
      <Icon name="info" />
    </div>
  );
};
export default App;
