import React from "react";
import { shallow } from "enzyme";
import LayoutSwiper from "./index";
import { checkPropTypes } from "prop-types";

export const findByTestAtrr = (component, attr) => {
  const wrapper = component.find(`[data-test='${attr}']`);
  return wrapper;
};

describe("LayoutSwiper Component", () => {
  describe("Checking PropTypes", () => {
    it("Should NOT throw a warning", () => {
      const expectedProps = {
        layoutType: "lg",
      };
      const propsError = checkPropTypes(
        LayoutSwiper.propTypes,
        expectedProps,
        "layoutToggler",
        LayoutSwiper.name
      );
      expect(propsError).toBeUndefined();
    });
  });

  describe("Render", () => {
    let wrapper;

    it("Should Render a button", () => {
      const props = {
        layoutType: "lg",
      };
      wrapper = shallow(<LayoutSwiper {...props} />);
      const button = findByTestAtrr(wrapper, "layoutSwiperComponent");
      expect(button.length).toBe(1);
    });

    it("should not render a button", () => {
      wrapper = shallow(<LayoutSwiper />);
      const button = findByTestAtrr(wrapper, "layoutSwiperComponent");
      expect(button.length).toBe(0);
    });
  });
});
