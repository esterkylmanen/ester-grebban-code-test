import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders h1 text", () => {
  render(<App />);
  const h1Text = screen.getByText("Spela n-pussel!");
  expect(h1Text).toBeInTheDocument();
});

test("renders game board", () => {
  render(<App />);
  const gameBoardElement = screen.getByTestId("game-board-test-id");
  expect(gameBoardElement).toBeInTheDocument();
});

test("renders button", () => {
  render(<App />);
  const buttonElement = screen.getByTestId("button-test-id");
  expect(buttonElement).toBeInTheDocument();
});

test("does not render win text", () => {
  render(<App />);
  const textElement = screen.queryByText("KING! DU VANN!");
  expect(textElement).not.toBeInTheDocument();
});
