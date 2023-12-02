const buttons = document.querySelectorAll(".btn")
let isClickable = false
let pattern = []
let level = 0
let playerPattern = []


function playButton(){  //player turn
buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      if (isClickable) {
      playerPattern.push(btn.id)
   
     if(btn===document.querySelector("#green")){
            var greenSound = new Audio("sounds/green.mp3")
            greenSound.play()
        } 
        else if (btn===document.querySelector("#red")){
            var redSound = new Audio("sounds/red.mp3")
            redSound.play()
        }
        else if (btn===document.querySelector("#yellow")){
            var yellowSound = new Audio("sounds/yellow.mp3")
            yellowSound.play()
        }
        else if (btn===document.querySelector("#blue")){
            var blueSound = new Audio("sounds/blue.mp3")
            blueSound.play()
        }
        else {
            console.log("no sound")
        }
        btn.classList.add("pressed")
          
        setTimeout(() => {
        btn.classList.remove("pressed")
        }, 100);
        checkPattern()
      }
    })
})
}


  function randomButtonPress(){ // to choose random botton when player press any key. 
    var randomButtonIndex= (Math.floor(Math.random() * buttons.length))
    var randomButton= buttons[randomButtonIndex]
   
    if(randomButton===document.querySelector("#green")){
        var greenSound = new Audio("sounds/green.mp3")
        greenSound.play()
    } 
    else if (randomButton===document.querySelector("#red")){
        var redSound = new Audio("sounds/red.mp3")
        redSound.play()
    }
    else if (randomButton===document.querySelector("#yellow")){
        var yellowSound = new Audio("sounds/yellow.mp3")
        yellowSound.play()
    }
    else if (randomButton===document.querySelector("#blue")){
        var blueSound = new Audio("sounds/blue.mp3")
        blueSound.play()
    }
    
    else {
        console.log("no sound")
    }
    randomButton.classList.add("pressed")
             
    setTimeout(() => {
        randomButton.classList.remove("pressed")
    }, 100)
    pattern.push(randomButton.id);
    //console.log(pattern)
}

function randomStart(){  //start the game after player press any key
  if (!isClickable) {
    isClickable = true
    game()
}
}

function game(){
level++
playerPattern=[] // make empty array for player
updateLevel()
setTimeout(() =>{
  randomButtonPress()
}, 1000)
}

function checkPattern() {
  const lastIndex = playerPattern.length - 1

  if (playerPattern[lastIndex] !== pattern[lastIndex]) {
    document.querySelector("h1").innerHTML = "Game Over, Press A Key to Start"
    var wrong = new Audio("sounds/wrong.mp3")
    wrong.play()
    document.body.classList.add("game-over")
    setTimeout(() => {
      document.body.classList.remove("game-over")
    }, 100)
    resetGame()
  } else if (playerPattern.length === pattern.length) {
    setTimeout(() => {
      game()
    }, 1000)
  }
}

function updateLevel(){
  document.querySelector("h1").innerHTML=("Level " + level)
}

function resetGame(){
  pattern = []
  level = 0
  isClickable = false
}

function arraysEqual(arr1, arr2){
  return arr1.every((value, index) => value === arr2[index])
}


function simonGame(){
  document.addEventListener("keydown", randomStart) 
  playButton()
}


simonGame()