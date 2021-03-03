import React from "react";
import "../icon-svgs";
import "./icon.scss";
interface IIconProps extends React.SVGAttributes<SVGAElement> {
  name: string;
}
const Icon: React.FunctionComponent<IIconProps> = (
  props
): React.ReactElement => {
  console.log(props);
  return (
    <svg className="icon">
      <use xlinkHref={`#${props.name}`}></use>
    </svg>
  );
};
export default Icon;
