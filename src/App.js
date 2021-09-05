import './App.css';
import React, { useState, useEffect } from 'react';

function App() {
  const [round, setRound] = useState(0)
  const [humanScore, setHumanScore] = useState(0)
  const [ties, setTies] = useState(0)
  const [computerScore, setComputerScore] = useState(0)
  const [playerSelection, setPlayerSelection] = useState()
  const [computerSelection, setComputerSelection] = useState()
  const [humanImg, setHumanImg] = useState("Images/rock.png")
  const [computerImg, setComputerImg] = useState("Images/rock.png")
  const [humanImgClass, setHumanImgClass] = useState('humanRock')
  const [compImgClass, setCompImgClass] = useState('compRock')
  const [humanImgStyles, setHumanImgStyles] = useState()
  const [computerImgStyles, setComputerImgStyles] = useState()
  const [firstLoad, setFirstLoad] = useState(true)
  const [gameIsActive, setGameIsActive] = useState(false)

  const updateImgs = function(){
    switch(playerSelection){
      case(0) : 
        setHumanImg("Images/rock.png") 
        setHumanImgClass('humanRock')
        break
      case(1) : 
        setHumanImg("Images/paper.png")
        setHumanImgClass('humanPaper')
        break
      case(2) : 
        setHumanImg("Images/scissors.png")
        setHumanImgClass('humanScissors')
        break
      default: 
        setHumanImg("Images/rock.png") 
        setHumanImgClass('humanRock')
    }

    switch(computerSelection){
      case(0) : 
        setComputerImg("Images/rock.png") 
        setCompImgClass("compRock")
        break
      case(1) : 
        setComputerImg("Images/paper.png")
        setCompImgClass("compPaper")
        break
      case(2) : 
        setComputerImg("Images/scissors.png")
        setCompImgClass("compScissors")
        break
      default: 
        setComputerImg("Images/rock.png") 
        setCompImgClass("compRock")
    }

    setHumanImgStyles({})
    setComputerImgStyles({})
  }

  const shake = function(){
    setHumanImg("Images/rock.png") 
    setHumanImgClass('humanRock')
    setComputerImg("Images/rock.png") 
    setCompImgClass("compRock")
    setHumanImgStyles({animation: 'shakePlayer .5s 3'})
    setComputerImgStyles({animation: 'shakeComp .5s 3'})
  }

  const calcWinner = function(){
    let diff = Math.abs(playerSelection - computerSelection)
    switch(diff){
      case(0): setTies(ties => ties + 1)
        break
      case(1): (playerSelection > computerSelection) ? setHumanScore(score => score + 1) : setComputerScore(score => score + 1)
        break
      default: (playerSelection < computerSelection) ? setHumanScore(score => score + 1) : setComputerScore(score => score + 1)
      }
  }
  
  const playGame = function(){
    if (!firstLoad && playerSelection !== undefined && gameIsActive === false) {
      setGameIsActive(true)
      setRound(round => round + 1)
      setComputerSelection(Math.floor(Math.random() * 3))
      shake()
        
      setTimeout(() => {
        updateImgs()
        calcWinner()
        setGameIsActive(false)
        setPlayerSelection()
      }, 1400)
    }
  }

  useEffect(() => {
    playGame()
    setFirstLoad(false)
  }, [playerSelection])


  return (
    <div className="App">
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
        <img src={humanImg} className={humanImgClass} style={humanImgStyles} alt="rock"></img>
        <img src={computerImg} className={compImgClass} style={computerImgStyles} alt="rock"></img>
      </section>
      <section className="buttons">
        <button className="rock" onClick={() => setPlayerSelection(0)}>Rock</button>
        <button className="paper" onClick={() => setPlayerSelection(1)}>Paper</button>
        <button className="scissors" onClick={() => setPlayerSelection(2)}>Scissors</button>
      </section>
    </div>
  );
}

export default App;