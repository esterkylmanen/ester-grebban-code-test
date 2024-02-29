import { useState } from "react";
import "./App.css";
import GameBoard from "./components/GameBoard/GameBoard";
import { shuffleArray } from "./utils/shuffleArray";
import { Button } from "./components/Button/Button";

function App() {
  const rows: number = 4;
  const columns: number = 3;

  const bricksArray = Array.apply(null, Array(rows * columns)).map(function (
    _,
    i
  ) {
    return i;
  });

  const [shuffledArray, setShuffledArray] = useState(shuffleArray(bricksArray));
  const [win, setWin] = useState(false);

  function handleShuffle() {
    const newShuffledArray = shuffleArray(bricksArray);
    setShuffledArray(newShuffledArray);
  }

  function handleRestart() {
    setWin(false);
  }

  return (
    <div className="App">
      {!win && (
        <>
          <h1>Spela n-pussel!</h1>
          <GameBoard
            shuffledArray={shuffledArray}
            sortedArray={bricksArray}
            setWin={setWin}
            columns={columns}
          />
          <Button data-testid="button-test-id" onClick={() => handleShuffle()}>Slumpa</Button>
        </>
      )}
      {win && (
        <>
          <div data-testid="win-text-test-id">KING! DU VANN!</div>
          <Button onClick={() => handleRestart()}>Igen!</Button>
        </>
      )}
    </div>
  );
}

export default App;
