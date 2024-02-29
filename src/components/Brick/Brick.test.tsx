import React from "react";
import { render, screen } from "@testing-library/react";
import Brick from "./Brick";

const mockFn = jest.fn();

test("renders brick number", () => {
  render(<Brick number={1} onClick={mockFn} />);
  const h1Text = screen.getByText("1");
  expect(h1Text).toBeInTheDocument();
});

test("click function is called", async () => {
  render(<Brick number={1} onClick={mockFn} />);
  const brickElement = screen.getByRole("button");
  brickElement.click();
  expect(mockFn).toHaveBeenCalled();
});
