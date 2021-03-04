import React from "react";
import "../icon-svgs";
import "./icon.scss";
import combineClass from "../util/className";
interface IIconProps extends React.SVGAttributes<SVGElement> {
  name: string;
}
const Icon: React.FunctionComponent<IIconProps> = (
  props
): React.ReactElement => {
  const { name, className, ...rest } = props;
  return (
    <svg className={combineClass("pang-icon", className)} {...rest}>
      <use xlinkHref={`#${name}`}></use>
    </svg>
  );
};
export default Icon;
