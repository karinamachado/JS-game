const getUserChoice = userInput =>{

    userInput = userInput.toLowerCase();
    
    if(userInput === 'rock' || userInput ==='paper' || userInput ==='scissors'){
      return userInput
    }else{
      console.log("Error");
    }
  
  }
  
  // console.log(getUserChoice('rock'));
  
  const getComputerChoice = () =>{
    const randomNumber =
   (Math.floor(Math.random() * 3));
  
  switch(randomNumber){
    case 0:
    return 'rock';
  
    case 1:
    return 'paper';
  
    case 2:
    return 'scissors';
  
    }
  
  };
  
  // console.log(getComputerChoice());
  // console.log(getComputerChoice());
  // console.log(getComputerChoice());
  
  
  
  const determineWinner = (userChoice,computerChoice) =>{
  
    if(userChoice === computerChoice){
      return "Game was a tie"; 
  }
  
  if(userChoice === 'rock'){
    if(computerChoice === 'paper') {
      return "Sorry, computer won!";
    }else {
      return "Congratulations, user won!";
    }
  }
  
  if(userChoice === 'paper'){
    if(computerChoice === 'scissors'){
      return " Sorry, Computer won!";
    }else{
      return "Congratulations, you won!";
    }
  }
  
  if(userChoice === 'scissors'){
    if(computerChoice === 'rock'){
      return " Congratulatios the computer winner";
    }else{
      return " congratulatiosn, you won!";
    }
  }
  
  };
  
  // console.log( determineWinner('rock' , 'scissors'));
  // console.log( determineWinner('paper' , 'scissors'));
  // console.log( determineWinner('rock' , 'rock'))
  
  const playGame = () => {
  
    const userChoice = getUserChoice('paper');
    const computerChoice = getComputerChoice();
    console.log('You threm: ' + userChoice);
    console.log('computer threm: ' + computerChoice);
  
    console.log(determineWinner(userChoice, computerChoice));
  }
  
  playGame();