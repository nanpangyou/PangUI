import classes from "../className";

describe("ClassNames", () => {
  it("传入一个参数", () => {
    const names: string = classes("a");
    expect(names).toEqual("a");
  });
  it("传入两个参数", () => {
    const names: string = classes("a", "b");
    expect(names).toEqual("a b");
  });
  it("传入undefined", () => {
    const names: string = classes("a", undefined);
    expect(names).toEqual("a");
  });
  it("传入乱七八糟的值", () => {
    const names: string = classes("汉字", "");
    expect(names).toEqual("汉字");
  });
  it("传入空字符串", () => {
    const names: string = classes("");
    expect(names).toEqual("");
  });
});
