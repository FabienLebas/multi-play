import React, {Component, useState} from 'react';
import {StyleSheet, Text, View } from 'react-native';
import {Button} from 'react-native-elements';

const Chifoumi = () => {
  const [playerChoice, setChoice] = useState('');

  const [opponentChoice, setOpponentChoice] = useState('')
  const computerChoose = () => {
    const random = Math.random();
    if (random < 0.3){
      setOpponentChoice('Pierre')
    } else if (random < 0.6){
      setOpponentChoice('Feuille')
    } else {
      setOpponentChoice('Ciseaux')
    }
  }

  const [result, setResult] = useState('');
  const calculateResult = (playerChoice, opponentChoice) => {
     
  }

  return(
    <View>
      <Text>Fais ton choix : {playerChoice}</Text>
      <Button
        onPress={() => {setChoice('Pierre')}}
        title='Pierre'
        type='outline'
      />
      <Button
        onPress={() => {setChoice('Feuille')}}
        title='Feuille'
        style={styles.button}
        type='outline'
      />
      <Button
        onPress={() => {setChoice('Ciseaux')}}
        title='Ciseaux'
        type='outline'
      />
      <Button
        onPress={computerChoose}
        title="Faire choisir l'ordinateur"
        style={styles.button}
      />
      <Text>{opponentChoice}</Text>
    </View>
  )
}

export default Chifoumi;

const styles = StyleSheet.create({
  button: {
    padding: 10
  },
  buttonSelected: {
    backgroundColor: 'green'
  }
})
