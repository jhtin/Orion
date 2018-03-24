import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Login from './src/login';
import TimeCheck from './src/timeCheck';
import OrionForm from './src/form';

const AppNavigator = StackNavigator({
  Login: {
    screen: Login,
  },
  TimeCheck: {
    screen: TimeCheck,
  },
  OrionForm: {
    screen: OrionForm,
  }
});

export default () => (
  <AppNavigator />
);
