import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Square from './Square';
import Restart from './Restart';

//Calculate winner by all possible permutations
function calculateWinner(squares) {
  //Array of possible combinations necessary for win
  const possibleWin = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
    //Inspect array if all lines are X or O - with For loop
  for (let i = 0; i < possibleWin.length; i++) {
    // array destruction - all possibilites in 3 letter combination
    const [a, b, c] = possibleWin[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
function Game({ score }) {
/*  State of initial array - 1st element is the variable we want to keep track and 2nd is a
    function that lets us change the state of this variable and also notify React that the
    state of the component has changed
    and it needs to be re-rendered */
  const [squares, setSquares] = useState(Array(9).fill(null));
  //Who is next track - state true defines that X is always first
  const [isNext, setIsNext] = useState(true);
  // Wrap who is next into variable to reduce repetition
  const nextPlayer = isNext ? 'X' : 'O';
  //wrap calculate of winner into const
  const winner = calculateWinner(squares);


  // renderSquare defines logic of rendering a square
  function renderSquare(i) {
    //initial state should be null and each click should change between X and O
    return (
      <Square
        // variable with value
        value={squares[i]}
        // arrow function to set X as starting value
        onClick={() => {
          //Ignore click if winner is know and if square is already clicked
          if (squares[i] != null || winner != null) {
            return;
          }
          //mutating (copying with slice) nextSquares as it is not a part of initial state and
          //we will use it for changing array
          const nextSquares = squares.slice();
          nextSquares[i] = nextPlayer;
          //using setSquares squares are changed
          setSquares(nextSquares);
          // Changing turn
          setIsNext(!isNext);
        }}
      />
    );
  }

  //Check if board is full withouth winner
  function isBoardFull() {
    for (let i = 0; i < squares.length; i++) {
      if (squares[i] == null) {
        return false;
      }
    }
    return true;
  }

  //Game status - winner or draw
  function getStatus() {
    if (winner) {
      return `Winner is ${winner}.`;
    } if (isBoardFull(squares)) {
      return 'It is a draw.';
    }
    return `Next player is ${nextPlayer}.`;
  }

  //Restart button should change state of the Game
  function renRestartButt() {
    return (
      <Restart
        onClick={() => {
          setSquares(Array(9).fill(null));
          setIsNext(true);
          score(winner);
        }}
      />
    );
  }

  return ( //return of Game function
  // Game board
    <div className="container">
      <div className="game">
        <div className="game-board">
          <div clasName="board-row">
            {renderSquare(0)}
            {renderSquare(1)}
            {renderSquare(2)}
          </div>
          <div clasName="board-row">
            {renderSquare(3)}
            {renderSquare(4)}
            {renderSquare(5)}
          </div>
          <div clasName="board-row">
            {renderSquare(6)}
            {renderSquare(7)}
            {renderSquare(8)}
          </div>
        </div>
        <div className="game-info">{getStatus()}</div>
        <div className="restart-button">{renRestartButt()}</div>
      </div>
    </div>
  );
}

Game.propTypes = {
  score: PropTypes.func,
};

export default Game;
