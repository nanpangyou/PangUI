const combineClass = (...classes: (string | undefined)[]): string => {
  return classes.filter((i) => Boolean(i)).join(" ");
};
export default combineClass;
