import React, {Component} from 'react';
import {StyleSheet, Text, View } from 'react-native';
import {Button} from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack' ;

import HomeScreen from './components/home';
import Chifoumi from './components/chifoumi';

const Stack = createNativeStackNavigator();

export default class App extends Component {
  render(){
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Lobby"
            component={HomeScreen}
          />
          <Stack.Screen
            name="Chifoumi"
            component={Chifoumi}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
