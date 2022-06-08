/* eslint-disable no-undef */
// trying to use vitest
import "@testing-library/jest-dom/extend-expect";
import renderer from "react-test-renderer";
import Button from "./index";
import React from "react";

function toJson(component: renderer.ReactTestRenderer) {
  const result = component.toJSON();
  expect(result).toBeDefined();
  expect(result).not.toBeInstanceOf(Array);
  return result as renderer.ReactTestRendererJSON;
}

test("renders button", () => {
  const component = renderer.create(<Button color="blue" text="something" />);

  const tree = toJson(component);

  expect(tree).toMatchSnapshot();
});
