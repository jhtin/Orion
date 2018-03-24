import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Login from './src/login';
import TimeCheck from './src/timeCheck';

const AppNavigator = StackNavigator({
  Login: {
    screen: Login,
  },
  TimeCheck: {
    screen: TimeCheck,
  }
});

export default () => (
  <AppNavigator />
);
