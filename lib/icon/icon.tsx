import React from "react";
import "../icon-svgs";
import "./icon.scss";
import combineClass from "../util/className";
interface IIconProps extends React.SVGAttributes<SVGElement> {
  name: string;
}
const Icon: React.FunctionComponent<IIconProps> = ({
  name,
  className,
  ...rest
}): React.ReactElement => {
  return (
    <svg className={combineClass("pang-icon", className)} {...rest}>
      <use xlinkHref={`#${name}`}></use>
    </svg>
  );
};
export default Icon;
