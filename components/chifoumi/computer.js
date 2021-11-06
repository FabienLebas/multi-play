import React, {useState} from 'react';
import {StyleSheet, Text, View } from 'react-native';
import {Button} from 'react-native-elements';

const Computer = (props) => {
  const [computerChoice, setComputerChoice] = useState('');

  const computerChoose = () => {
    const random = Math.random();
    if (random < 0.3){
      setComputerChoice('rock');
      props.giveMyChoice('rock');
    } else if (random < 0.6){
      setComputerChoice('paper');
      props.giveMyChoice('paper');
    } else {
      setComputerChoice('scissors');
      props.giveMyChoice('scissors');
    }
  }

  if (props.newGameRequested === true && computerChoice !== ''){
    setComputerChoice('');
    props.giveMyChoice('');
    props.setNewGameRequested(false);
  }
  if (computerChoice !== ''){
    return(
      <View>
        <Text style={styles.player}>Ordinateur</Text>
        <Button
          onPress={computerChoose}
          title="L'ordinateur a choisi"
          style={styles.button}
          disabled
        />
      </View>
    )
  } else {
    return(
      <View>
        <Text style={styles.player}>Ordinateur</Text>
        <Button
          onPress={computerChoose}
          title="Faire choisir l'ordinateur"
          style={styles.button}
        />
      </View>
    )
  }
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
