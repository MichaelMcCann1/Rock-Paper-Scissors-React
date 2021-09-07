# Rock-Paper-Scissors-React

The classic Rock Paper Scissors game made with ReactJS. Play against the computer and the game will keep track of the score. This game has a responsive interface and will work with any screen size. This game is an exact copy of the game I made [here with vanilla JavaSctipt](https://github.com/MichaelMcCann1/Rock-Paper-Scissors). Most of the logic for this version of the game is the same. The only major differences in this version is that variables are kept track of by using the `useState()` hook and functions are run with the `useEffect()` hook. Please refer to this repository for a more in-depth explanation of how the code works.

<img src="https://github.com/MichaelMcCann1/Rock-Paper-Scissors/blob/main/RockPaperScissorsScreenshot.png" height="400px">

## Code Explanation
The game is started when a player makes a selection by clicking one of the buttons. Event listeners are set for each of the buttons and a function is run to update `PlayerSelection`. An example of the markup for the rock button is shown below. 

``` javascript
<button className="rock" onClick={() => setPlayerSelection(0)}>Rock</button>
```

The `useEffect` hook with a dependency array containing `playerSelection` is used to run the `playGame()` function. This function first makes sure that it is not the initial render, the player has actually made a selection, and that the game is currently active. If all of that is true, then the function updates the round number, gets the computers selection, and then starts the shaking animation for the fists. 

``` javascript
const playGame = function(){
    if (!firstLoad && playerSelection !== undefined && gameIsActive === false) {
      setGameIsActive(true)
      setRound(round => round + 1)
      setComputerSelection(Math.floor(Math.random() * 3))
      shake()  
      .
      .
      .
  }
```

Then `setTimeout()` is used to wait until the animation is completed before it updates the images and then calculates who won the game and updates the scores. The round is now over so `gameIsActive` is set to `false` and `playerSelection` is cleared. This completes the round and the game waits for the player to make another selection.

``` javasctipt
setTimeout(() => {
    updateImgs()
    calcWinner()
    setGameIsActive(false)
    setPlayerSelection()
  }, 1400)
```
