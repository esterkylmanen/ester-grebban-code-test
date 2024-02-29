import React from "react";
import { render, screen } from "@testing-library/react";
import GameBoard from "./GameBoard";

const mockFn = jest.fn();

test("renders bricks", async () => {
  render(
    <GameBoard
      columns={2}
      shuffledArray={[2, 1, 3, 4, 5, 0]}
      sortedArray={[1, 2, 3, 4, 5, 0]}
      setWin={mockFn}
    />
  );
  const bricks = await screen.findAllByTestId("brick-test-id");
  expect(bricks.length).toBe(6);
});


test("renders game board", async () => {
    render(
      <GameBoard
        columns={2}
        shuffledArray={[2, 1, 3, 4, 5, 0]}
        sortedArray={[1, 2, 3, 4, 5, 0]}
        setWin={mockFn}
      />
    );
    const gameBoardElement = screen.getByTestId("game-board-test-id");
    expect(gameBoardElement).toBeInTheDocument();
  });
