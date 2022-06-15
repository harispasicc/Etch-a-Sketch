import { useEffect, useRef, useState } from "react";

function Game() {
  const boardRef = useRef(null);

  const [gridSize, setGridSize] = useState(16);
  const [color, setColor] = useState("black");
  const [randomColor, setRandomColor] = useState();

  const resetBoard = e => {
    let div = [];
    const squares = document.querySelectorAll(".square");
    squares.forEach(square => {
      square.style.backgroundColor = "white";
    });
    div.splice(0, div.length);
    let enteredGridSize = prompt("Enter a number in range from 16 to 100!");
    if (enteredGridSize !== null) {
      enteredGridSize = parseInt(enteredGridSize);
      if (
        enteredGridSize < 16 ||
        enteredGridSize > 100 ||
        Number.isNaN(enteredGridSize)
      ) {
        alert("Please enter a number in range from 16 to 100!");
      } else {
        setGridSize(enteredGridSize);
      }
    }
  };

  useEffect(() => {
    boardRef.current.style.setProperty("--grid-size", gridSize);
  }, [gridSize]);

  const clearBoard = () => {
    let div = [];
    const squares = document.querySelectorAll(".square");
    squares.forEach(square => {
      square.style.backgroundColor = "white";
    });
    div.splice(0, div.length);
  };

  const Black = e => {
    e.target.style.backgroundColor = "black";
  };

  const randomC = e => {
    e.target.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
  };

  const randomColors = () => {
    setRandomColor(true);
    setColor(false);
  };
  const blackColor = () => {
    setColor(true);
    setRandomColor(false);
  };

  const squares = () => {
    let div = [];
    for (let i = 0; i < gridSize * gridSize; i++) {
      div.push(
        <div
          className="square"
          onMouseOver={color ? Black : randomColor ? randomC : ""}
          key={i}
        ></div>
      );
    }
    return div;
  };

  return (
    <div className="wrapper">
      <div className="buttons">
        <button id="button" onClick={resetBoard}>
          Reset Board
        </button>
        <button id="button" onClick={blackColor}>
          Black
        </button>
        <button id="button" onClick={randomColors}>
          Random Color
        </button>
        <button id="button" onClick={clearBoard}>
          Clear Board
        </button>
      </div>
      <div className="container">
        <div ref={boardRef} className="board">
          {squares()}
        </div>
      </div>
    </div>
  );
}

export default Game;
