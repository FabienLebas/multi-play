import React, {Component} from 'react';
import {StyleSheet, Text, View } from 'react-native';
import {Button} from 'react-native-elements';

export default class App extends Component {
  render(){
    return (
      <View style={styles.container}>
        <Text>Créé par Tom !</Text>
        <Text>Notre tout premier jeu :</Text>
          <Button
            onPress={() => {
              alert('Ouvrir chifoumi ')
            }}
            title="Chi-fou-mi / Pierre-feuille-ciseau"
          />
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
  button: {
    backgroundColor: '#00aeef',
    borderRadius: 5
  },
});
