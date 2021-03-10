import React from "react";
import classes from "../util/className";
interface IProps {
  type?: "default" | "primary" | "dashed" | "danger";
  htmlType?: "button" | "submit" | "reset";
}
const Button: React.FC<IProps> = (props): React.ReactElement => {
  console.log(props);
  const { children, type, htmlType, ...restProps } = props;
  return (
    <button type={htmlType} className={classes(type)} {...restProps}>
      {children}
    </button>
  );
};
Button.defaultProps = {
  type: "default",
  htmlType: "button"
};
export default Button;
