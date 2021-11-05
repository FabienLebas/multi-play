import React, {Component} from 'react';
import {StyleSheet, Text, View } from 'react-native';
import {Button} from 'react-native-elements';
import Chifoumi from './components/chifoumi';
import NumberOfPlayers from './components/numberOfPlayers'

export default class App extends Component {
  render(){
    return (
      <View style={styles.container}>
        <NumberOfPlayers/>
        <Text style={styles.intro}>Créé par Tom !</Text>
        <Text style={styles.intro}>Notre tout premier jeu :</Text>
        <Text style={styles.gameTitle}>CHIFOUMI</Text>
        <Chifoumi/>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  intro: {
    fontSize: 20
  },
  gameTitle: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
    padding: 20
  }
});
