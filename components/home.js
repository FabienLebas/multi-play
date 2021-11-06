import React, {Component} from 'react';
import {StyleSheet, Text, View } from 'react-native';
import {Button} from 'react-native-elements';

const HomeScreen = ({ navigation }) => {
  return(
    <View style={styles.container}>
      <Text style={styles.intro}>Créé par Tom !</Text>
      <Text style={styles.intro}>Notre tout premier jeu :</Text>
      <Button
        onPress={() => {
          navigation.navigate('Chifoumi')
        }}
        title='CHIFOUMI'
        type='outline'
        style={styles.game}
      />
    </View>
  )
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
  game: {
    padding: 20
  }
});

export default HomeScreen;
