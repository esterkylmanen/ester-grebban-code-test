import React from "react";
import { render, screen } from "@testing-library/react";
import { Button } from "./Button";

const mockFn = jest.fn();

test("renders brick number", async () => {
  render(<Button onClick={mockFn} />);
  const brickElement = screen.getByRole("button");
  brickElement.click();
  expect(mockFn).toHaveBeenCalled();
});
