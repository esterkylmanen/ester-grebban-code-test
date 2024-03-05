import styled from "styled-components";
import { useEffect, useState } from "react";
import Brick from "../Brick/Brick";
import { listToMatrix } from "../../utils/listToMatrix";
import { swapElements } from "../../utils/swapElements";
import { arraysEqual } from "../../utils/arraysEqual";

interface GameBoardProps {
  columns: number;
  shuffledArray: any[];
  sortedArray: any[];
  setWin: (v: boolean) => void;
}

const StyledGameBoard = styled.div<{ columns: number }>`
  display: grid;
  grid-template-columns: repeat(${(props) => props.columns}, minmax(0, 1fr));
  column-gap: 0.5rem;
  row-gap: 0.5rem;
  width: 100%;
  background-color: lightgray;
  padding: 1rem;
  border-radius: 2rem;
`;

function GameBoard({
  columns,
  shuffledArray: array,
  sortedArray,
  setWin,
}: GameBoardProps) {
  const [shuffledArray, setShuffledArray] = useState(array);

  useEffect(() => {
    setShuffledArray(array);
  }, [array]);

  function move(brick: number) {
    const matrix = listToMatrix(shuffledArray, columns);

    const brickRow = matrix.find((r) => r.includes(brick)) as any[];
    const zeroRow = matrix.find((r) => r.includes(0)) as any[];

    const brickRowIndex = matrix.indexOf(brickRow);
    const zeroRowIndex = matrix.indexOf(zeroRow);

    const brickCol = brickRow.indexOf(brick);
    const zeroCol = zeroRow.indexOf(0);

    const zeroIndex = shuffledArray.indexOf(0);
    const valIndex = shuffledArray.indexOf(brick);

    const newShuffledArray = [...shuffledArray];

    if (brickCol === zeroCol) {
      if (brickRowIndex < zeroRowIndex) {
        for (let step = 1; zeroIndex - step * columns >= valIndex; step++) {
          let z = newShuffledArray.indexOf(0);
          swapElements(zeroIndex - step * columns, z, newShuffledArray);
        }
      }

      if (brickRowIndex > zeroRowIndex) {
        for (let step = 1; zeroIndex + step * columns <= valIndex; step++) {
          let z = newShuffledArray.indexOf(0);
          swapElements(zeroIndex + step * columns, z, newShuffledArray);
        }
      }
    } else if (brickRowIndex === zeroRowIndex) {
      if (brickCol < zeroCol) {
        for (let step = 1; zeroIndex - step >= valIndex; step++) {
          let z = newShuffledArray.indexOf(0);
          swapElements(zeroIndex - step, z, newShuffledArray);
        }
      }

      if (brickCol > zeroCol) {
        for (let step = 1; zeroIndex + step <= valIndex; step++) {
          let z = newShuffledArray.indexOf(0);
          swapElements(zeroIndex + step, z, newShuffledArray);
        }
      }
    }

    setShuffledArray(newShuffledArray);

    if (newShuffledArray[newShuffledArray.length - 1] === 0) {
      let array = [...newShuffledArray];
      array.sort(function (a, b) {
        return a - b;
      });

      if (arraysEqual(array, sortedArray)) {
        setWin(true);
      }
    }
  }

  return (
    <StyledGameBoard columns={columns} data-testid="game-board-test-id">
      {shuffledArray.flat().map((brick) => {
        return <Brick key={brick} onClick={() => move(brick)} number={brick} />;
      })}
    </StyledGameBoard>
  );
}

export default GameBoard;
