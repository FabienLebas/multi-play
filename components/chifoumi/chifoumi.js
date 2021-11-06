import React, {useState} from 'react';
import {Text, View, Image, TouchableOpacity } from 'react-native';

import Computer from './computer';
import Me from './me';
import calculateVictory from './calculateVictory';

const Chifoumi = () => {
  const [playerChoice, setPlayerChoice] = useState('');
  const [computerChoice, setComputerChoice] = useState('');
  const [winner, setWinner] = useState('');
  const [newGameRequested, setNewGameRequested] = useState(false);
  const getPlayerChoice = (choice) => {
    setPlayerChoice(choice);
    setWinner(calculateVictory(choice, computerChoice));
  }
  const getComputerChoice = (choice) => {
    setComputerChoice(choice);
    setWinner(calculateVictory(playerChoice, choice));
  }
  return(
    <View style={{ flexDirection: "column", flex: 1 }}>
      <View style={{ flex: 30, backgroundColor: "grey" }}>
        <Computer
          giveMyChoice={getComputerChoice}
          winner={winner}
          newGameRequested={newGameRequested}
          setNewGameRequested={setNewGameRequested}
        />
      </View>
      <View style={{ flex: 1, backgroundColor: "black" }}>
      </View>
      <View style={{ flex: 35}}>
        <Me
          giveMyChoice={getPlayerChoice}
          winner={winner}
          setNewGameRequested={setNewGameRequested}
        />
      </View>
    </View>
  )
}

export default Chifoumi;
