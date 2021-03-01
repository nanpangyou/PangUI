import React from "react";
import "../icon-svgs";
interface IIconProps {
  name: string;
}
const Icon: React.FunctionComponent<IIconProps> = (
  props
): React.ReactElement => {
  console.log(props);
  return (
    <svg fill="red">
      <use xlinkHref={`#${props.name}`}></use>
    </svg>
  );
};
export default Icon;
