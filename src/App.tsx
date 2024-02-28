import { useState } from "react";
import "./App.css";
import GameBoard from "./components/GameBoard";
import { shuffleArray } from "./utils/shuffleArray";
import { Button } from "./components/Button";

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
    setWin(false)
  }

  return (
    <div className="App">
      {!win && (
        <>
          <GameBoard
            shuffledArray={shuffledArray}
            sortedArray={bricksArray}
            setWin={setWin}
            columns={columns}
          />
          <Button onClick={() => handleShuffle()}>Slumpa</Button>
        </>
      )}
      {win && (
        <>
          <div>KING! DU VANN!</div>
          <Button onClick={() => handleRestart()}>Igen!</Button>
        </>
      )}
    </div>
  );
}

export default App;
