import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Login from './src/login';

const AppNavigator = StackNavigator({
  Login: {
    screen: Login,
  },
});

export default () => (
  <AppNavigator />
);
