const combineClass = (current: string = "", props: string = ""): string => {
  const currentArr: Array<string> = current.split(" ");
  const propsArr: Array<string> = props.split(" ");
  return currentArr
    .concat(propsArr)
    .filter((i) => Boolean(i))
    .join(" ");
};
export default combineClass;
