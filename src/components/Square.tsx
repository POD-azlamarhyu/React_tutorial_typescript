import React from "react";
import {ISquare} from "./Interface";

interface SquareProps{
    onClick: () => void;
    value: ISquare;
}

const Square:React.FC<SquareProps> = ({onClick,value}) => {
  return (
    <button className="square" onClick={onClick}>
      {value}
    </button>
  );
};

export default Square;