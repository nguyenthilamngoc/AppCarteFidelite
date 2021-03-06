/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
'use strict';
import React, { Component } from 'react';
import {
  Platform,
} from 'react-native';
import {
  StackNavigator,
} from 'react-navigation';
import SearchPage from './SearchPage';


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});


const App = StackNavigator({
  Home: { screen: SearchPage },
});
export default App;