import React, { Fragment } from "react";
import Icon from "../icon/icon";
import "./dialog.scss";
interface Props {
  visable?: boolean;
}
const Dialog: React.FunctionComponent<Props> = (props): React.ReactElement => {
  return props.visable ? (
    <Fragment>
      <div className="pang-dialog-model"></div>
      <div className="pang-dialog">
        <div className="pang-dialog-close">
          <Icon name="close" />
        </div>
        <div className="pang-dialog-header"></div>
        <div className="pang-dialog-main">{props.children}</div>
        <div className="pang-dialog-footer">
          <button>ok</button>
          <button>cancel</button>
        </div>
      </div>
    </Fragment>
  ) : null;
};
export default Dialog;
