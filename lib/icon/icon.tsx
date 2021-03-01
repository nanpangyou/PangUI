import React from "react";
import setting from "../icon-svgs/settings.svg";
console.log(setting);
interface Props {
  name: string;
}
const Icon: React.FunctionComponent<Props> = (props): React.ReactElement => {
  return <span id={`${props.name}`}></span>;
};
export default Icon;
