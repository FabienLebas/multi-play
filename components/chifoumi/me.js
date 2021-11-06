import React, {useState} from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

const Me = (props) => {
  const [playerChoice, setChoice] = useState('');
  const choose = (choice) => {
    setChoice(choice);
    props.giveMyChoice(choice)
  }
  return(
    <View style={{ flex: 1, flexDirection: "column" }}>
      <View style={{ flex: 1}}>
        <Text style={styles.me}>Moi</Text>
      </View>
      <Text>Moi : {playerChoice} / Adversaire : {props.opponentChoice}</Text>
      <View style={{ flex: 5, flexDirection: "row"}}>
        <View style={{ flex: 1}}>
          <TouchableOpacity
            onPress={() => {choose('Pierre')}}
          >
            <Image
              source={require('./images/rock.png')}
              style={styles.hand}
            />
          </TouchableOpacity>
        </View>
        <View style={{ flex: 1}}>
          <TouchableOpacity
            onPress={() => {choose('Feuille')}}
          >
            <Image
              source={require('./images/paper.png')}
              style={styles.hand}
            />
          </TouchableOpacity>
        </View>
        <View style={{ flex: 1}}>
          <TouchableOpacity
            onPress={() => {choose('Ciseaux')}}
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
  }
})
