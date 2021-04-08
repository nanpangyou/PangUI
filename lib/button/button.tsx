import React from "react";
import classes from "../util/className";
import "./button.scss";
interface IProps {
  name?: string;
  type?: "default" | "primary" | "dashed" | "danger";
  htmlType?: "button" | "submit" | "reset";
  onClick?: React.MouseEventHandler;
  onMouseEnter?: React.MouseEventHandler;
  onMOuseLeave?: React.MouseEventHandler;
  onFocus?: React.FocusEventHandler;
}
const Button: React.FC<IProps> = (props): React.ReactElement => {
  const { children, type, htmlType, ...restProps } = props;
  return (
    <button
      type={htmlType}
      className={classes("pang-button", type)}
      {...restProps}
    >
      {children}
    </button>
  );
};
Button.defaultProps = {
  name: "Pang-Button",
  type: "default",
  htmlType: "button"
};
export default Button;
