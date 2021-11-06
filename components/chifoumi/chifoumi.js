import React, {useState} from 'react';
import {Text, View, Image, TouchableOpacity } from 'react-native';

import Computer from './computer';
import Me from './me';

const Chifoumi = () => {
  const [playerChoice, setPlayerChoice] = useState('');
  const [computerChoice, setComputerChoice] = useState('');
  const getPlayerChoice = (choice) => {
    setPlayerChoice(choice)
  }
  const getComputerChoice = (choice) => {
    setComputerChoice(choice)
  }
  return(
    <View style={{ flexDirection: "column", flex: 1 }}>
      <View style={{ flex: 30, backgroundColor: "grey" }}>
        <Computer
          giveMyChoice={getComputerChoice}
          opponentChoice={playerChoice}
        />
      </View>
      <View style={{ flex: 1, backgroundColor: "black" }}>
      </View>
      <View style={{ flex: 35}}>
        <Me
          giveMyChoice={getPlayerChoice}
          opponentChoice={computerChoice}
        />
      </View>
    </View>
  )
}

export default Chifoumi;
