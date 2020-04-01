import React, { useState } from 'react';
import Game from "./components/Game";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  //Keeping score
  const [scoreA, setScoreA] = useState({ name: 'Game A', countX: 0, countO: 0 });
  const [scoreB, setScoreB] = useState({ name: 'Game B', countX: 0, countO: 0 });

  function score(winner, score, setScore) {
    if (winner === "X") {
        setScore({ ...score, countX: score.countX + 1 });
      } else if (winner === "O") {
        setScore({ ...score, countO: score.countO + 1 });
    }
  }

  function onScoreA(winner) {
    score(winner, scoreA, setScoreA);
  }

  function onScoreB(winner) {
    score(winner, scoreB, setScoreB);
  }

  return(
  <div>
    <div>
      <Header scoreA={scoreA} scoreB={scoreB} />
    </div>
    <div className="justify">
      <Game score={onScoreA} />
      <Game score={onScoreB} />
    </div>
    <div>
      <Footer />
    </div>
  </div>)  
  
}

export default App;
