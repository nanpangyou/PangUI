import * as React from "react";
import * as renderer from "react-test-renderer";
import { mount } from "enzyme";
import Icon from "../icon";
describe("icon组件", () => {
  it("icon存在", () => {
    expect(Icon).toBeTruthy;
  });
  it("icon渲染 successfully", () => {
    const json = renderer.create(<Icon name="loading"></Icon>).toJSON();
    expect(json).toMatchSnapshot();
  });
  it("icon的onclick事件", () => {
    const fn = jest.fn();
    const component = mount(<Icon name="setting" onClick={fn}></Icon>);
    component.find("svg").simulate("click");
    expect(fn).toBeCalled();
  });
});
