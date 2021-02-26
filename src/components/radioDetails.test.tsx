import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import RadioDetail from "./radioDetail";


let container: any = null;

beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("should render URL prop information", () => {
  
  act(() => {
    render(
      <RadioDetail
        coverUrl="https://testlink"
      />,
      container
    );
  });

  expect(
    container.querySelector("[data-testid='url']").getAttribute("src")
  ).toEqual("https://testlink");

 
});