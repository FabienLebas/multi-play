import React, {useState} from 'react';
import {StyleSheet, Text, View } from 'react-native';
import {Button} from 'react-native-elements';

const Computer = (props) => {
  const [computerChoice, setComputerChoice] = useState('');

  const computerChoose = () => {
    const random = Math.random();
    if (random < 0.3){
      setComputerChoice('Pierre');
      props.giveMyChoice('Pierre');
    } else if (random < 0.6){
      setComputerChoice('Feuille');
      props.giveMyChoice('Feuille');
    } else {
      setComputerChoice('Ciseaux');
      props.giveMyChoice('Ciseaux');
    }
  }

  return(
    <View>
      <Text style={styles.player}>Ordinateur</Text>
      <Button
        onPress={computerChoose}
        title="Faire choisir l'ordinateur"
        style={styles.button}
      />
      <Text>Ordinateur : {computerChoice} / Adversaire : {props.opponentChoice}</Text>
    </View>
  )
}

export default Computer;

const styles = StyleSheet.create({
  button: {
    padding: 10
  },
  player: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white'
  }
})
