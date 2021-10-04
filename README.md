# Rock-Paper-Scissors-React

**Live Link to Project:** https://mm-rockpaperscissors-react.web.app/

The classic Rock Paper Scissors game made with ReactJS. Play against the computer and the game will keep track of the score. This game has a responsive interface and will work with any screen size. This game is an exact copy of the game I made [here with vanilla JavaSctipt](https://github.com/MichaelMcCann1/Rock-Paper-Scissors). Most of the logic for this version of the game is the same. The only major differences in this version is that variables are kept track of by using the `useState()` hook and images are shown dynamically with conditional rendering. Please refer to this repository for a more in-depth explanation of how the code works.

<img src="https://github.com/MichaelMcCann1/Rock-Paper-Scissors/blob/main/RockPaperScissorsScreenshot.png" height="400px">

## Code Explanation
### Markup

The markup for the images is shown below. Each image is rendered conditionally based on what the player selected. For example if the player selected 'Rock', then only the Rock image will display. The same goes for the computer's selection. There are also two images with an animation defined in their style attribute. These images display every time the player makes a selection and then they disappear after the animation has ended. More information on how this is achieved is give below. 

```HTML
<section className="hands">
    {shaking && <img src="/Images/rock.png" className="humanRock" style={{animation: 'shakePlayer .5s 3'}} alt="rock"></img>}
    {shaking && <img src="/Images/rock.png" className="compRock" style={{animation: 'shakeComp .5s 3'}} alt="rock"></img>}
    {playerSelection === 0 && <img src="/Images/rock.png" className="humanRock" alt="rock"></img>}
    {playerSelection === 1 && <img src="/Images/paper.png" className="humanPaper" alt="paper"></img>}
    {playerSelection === 2 && <img src="/Images/scissors.png" className="humanScissors" alt="scissors"></img>}
    {computerSelection === 0 && <img src="/Images/rock.png" className="compRock" alt="rock"></img>}
    {computerSelection === 1 && <img src="/Images/paper.png" className="compPaper" alt="paper"></img>}
    {computerSelection === 2 && <img src="/Images/scissors.png" className="compScissors" alt="scissors"></img>}
</section>
```

### Starting the game
The game is started when a player makes a selection by clicking one of the buttons. Event listeners are set for each of the buttons and the `playGame()` function is run with the players selection passed as an argument. An example of the markup for the rock button is shown below. 

``` javascript
<button className="rock" onClick={() => playGame(0)}>Rock</button>
```

The `playGame()` function first sets the `shaking` state variable to true. This causes the images with an animation to appear. Next it clears the players selections from the previous round. It then updates the round counter by one. 

Next a `setTimeout()` method is used. The delay on this timeout is set to happen after the animation of the shaking images above. Once the delay happens the shaking images are cleared and the both the `playerSelection` and `computerSelection` state variables are updated. The images of the selections are displayed as a result. Next the winner is calculated by calling the `calcWinner()` function with the player's and computer's selection passed in as arguments. The function then updates the score. The round is now completed and the game waits until the player makes a new selection to start another round.

```javascript
  const playGame = function(selection){
    setPlayerSelection()
    setComputerSelection()
    setShaking(true)
    setRound(round => round + 1)

    setTimeout(() => {
      setShaking(false)
      setPlayerSelection(selection)
      let randomNumber = Math.floor(Math.random() * 3)
      setComputerSelection(randomNumber)
      calcWinner(selection, randomNumber)
    }, 1400)
  }
```

