import './App.css';
import React, { useState, useEffect } from 'react';

let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

function App() {
  const [round, setRound] = useState(0)
  const [humanScore, setHumanScore] = useState(0)
  const [ties, setTies] = useState(0)
  const [computerScore, setComputerScore] = useState(0)
  const [playerSelection, setPlayerSelection] = useState(0)
  const [computerSelection, setComputerSelection] = useState(0)
  const [shaking, setShaking] = useState(false)

  const calcWinner = function(player, comp){
    let diff = Math.abs(player - comp)
    switch(diff){
      case(0): setTies(ties => ties + 1)
        break
      case(1): (player > comp) ? setHumanScore(score => score + 1) : setComputerScore(score => score + 1)
        break
      default: (player < comp) ? setHumanScore(score => score + 1) : setComputerScore(score => score + 1)
      }
  }

  const playGame = function(selection){
    setShaking(true)
    setPlayerSelection()
    setComputerSelection()
    setRound(round => round + 1)

    setTimeout(() => {
      setShaking(false)
      setPlayerSelection(selection)
      let randomNumber = Math.floor(Math.random() * 3)
      setComputerSelection(randomNumber)
      calcWinner(selection, randomNumber)
    }, 1400)
  }

  return (
    <div className="App">
      <a className="githubLink" href="https://github.com/MichaelMcCann1/Rock-Paper-Scissors-React"><img src="Images/GitHub.svg"></img></a>
      <section className="round">
        <h1 className="roundNumber">{`Round ${round}`}</h1>
      </section>
      <section className="scores">
        <div className="human">
          <h2>Player</h2>
          <p className="humanCounter">{humanScore}</p>
        </div>
        <div className="ties">
          <h2>Ties</h2>
          <p className="tiesCounter">{ties}</p>
        </div>
        <div className="computer">
          <h2>Computer</h2>
          <p className="computerCounter">{computerScore}</p>
        </div>
      </section>
      <section className="hands">
        {shaking && <img src="/Images/rock.png" className="humanRock" style={{animation: 'shakePlayer .5s 3'}} alt="rock"></img>}
        {shaking && <img src="/Images/rock.png" className="compRock" style={{animation: 'shakeComp .5s 3'}} alt="rock"></img>}
        {playerSelection === 0 && <img src="/Images/rock.png" className="humanRock" alt="rock"></img>}
        {playerSelection === 1 && <img src="/Images/paper.png" className="humanPaper" alt="rock"></img>}
        {playerSelection === 2 && <img src="/Images/scissors.png" className="humanScissors" alt="rock"></img>}
        {computerSelection === 0 && <img src="/Images/rock.png" className="compRock" alt="rock"></img>}
        {computerSelection === 1 && <img src="/Images/paper.png" className="compPaper" alt="rock"></img>}
        {computerSelection === 2 && <img src="/Images/scissors.png" className="compScissors" alt="rock"></img>}
      </section>
      <section className="buttons">
        <button className="rock" onClick={() => playGame(0)}>Rock</button>
        <button className="paper" onClick={() => playGame(1)}>Paper</button>
        <button className="scissors" onClick={() => playGame(2)}>Scissors</button>
      </section>
    </div>
  );
}

export default App;