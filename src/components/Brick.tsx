import styled from "styled-components";
import { Button } from "./Button";

interface BrickProps {
  number: number;
  onClick: () => void;
}

const StyledBrick = styled(Button)<{ number: number }>`
  font-size: 32px;
  background-color: ${(props) =>
    props.number === 0 ? "transparent" : "#add8e6"};
  border: ${(props) =>
    props.number === 0 ? "transparent" : "2px solid black"};
`;

function Brick({ number, onClick }: BrickProps) {
  function handleClick() {
    onClick();
  }
  const shownNumber = number !== 0 ? number : "";

  return (
    <StyledBrick onClick={handleClick} className="brick" number={number}>
      {shownNumber}
    </StyledBrick>
  );
}

export default Brick;
