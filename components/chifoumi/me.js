import React, {useState} from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import {Button} from 'react-native-elements';

const Me = (props) => {
  const [playerChoice, setChoice] = useState('');
  const choose = (choice) => {
    setChoice(choice);
    props.giveMyChoice(choice)
  }
  const reStart = () => {
    return(
      <Button
        title='Nouvelle partie'
        onPress={() => {
          setChoice('');
          props.giveMyChoice('');
          props.setNewGameRequested(true);
        }}
        style={styles.button}
      />
    )
  }
  if (props.winner === '' || playerChoice === ''){
    return(
      <View style={{ flex: 1, flexDirection: "column" }}>
        <View style={{ flex: 1}}>
          <Text style={styles.me}>Moi</Text>
        </View>
        <View style={{ flex: 5, flexDirection: "row"}}>
          <View style={{ flex: 1}}>
            <TouchableOpacity
              onPress={() => {choose('rock')}}
            >
              <Image
                source={require('./images/rock.png')}
                style={styles.hand}
              />
            </TouchableOpacity>
          </View>
          <View style={{ flex: 1}}>
            <TouchableOpacity
              onPress={() => {choose('paper')}}
            >
              <Image
                source={require('./images/paper.png')}
                style={styles.hand}
              />
            </TouchableOpacity>
          </View>
          <View style={{ flex: 1}}>
            <TouchableOpacity
              onPress={() => {choose('scissors')}}
            >
              <Image
                source={require('./images/scissors.png')}
                style={styles.scissors}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    )
  } else if (props.winner === playerChoice){
      return(
        <View>
          <Text style={styles.result}>Gagné ! 🎉</Text>
          {reStart()}
        </View>
      )
  } else if (props.winner === 'draw'){
      return(
        <View>
          <Text style={styles.result}>Match nul</Text>
          {reStart()}
        </View>
      )
  } else {
    return(
      <View>
        <Text style={styles.result}>Perdu ! 😒</Text>
        {reStart()}
      </View>
    )
  }
}

export default Me;

const styles = StyleSheet.create({
  me: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'grey'
  },
  hand: {
    width: 90,
    height: 90
  },
  scissors: {
    width: 80,
    height: 100
  },
  button: {
    padding: 10
  },
  result: {
    fontSize: 20,
    padding: 10
  }
})
