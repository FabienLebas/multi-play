export default function calculateVictory(choicePlayer1, choicePlayer2){
    if ((choicePlayer1 === choicePlayer2) && (choicePlayer1 !== '')){
      return 'draw'
    } else if (choicePlayer1 === 'rock'){
        switch (choicePlayer2){
          case 'scissors':
            return (choicePlayer1)
            break;
          case 'paper':
            return (choicePlayer2)
            break;
          default:
            return '';
        }
    } else if (choicePlayer1 === 'paper'){
        switch (choicePlayer2){
          case 'scissors':
            return (choicePlayer2)
            break;
          case 'rock':
            return (choicePlayer1)
            break;
          default:
            return '';
      }
    } else if (choicePlayer1 === 'scissors'){
        switch (choicePlayer2){
          case 'paper':
            return (choicePlayer1)
            break;
          case 'rock':
            return (choicePlayer2)
            break;
          default:
            return '';
        }
    } else {
      return '';
    }
  }
