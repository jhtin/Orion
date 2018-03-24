import React, { Component, StyleSheet } from 'react';
import {View, Container, Content, Form, Item, Input, Button, Text, Body, Label, Spinner } from 'native-base';
import { Image } from 'react-native';

const LOGIN_URL = 'https://mywebsite.com/endpoint/';
const MOCK_DATA = {
  timeInterval: "something here",
}
export default class Login extends Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }
  static navigationOptions = {
    header:null,
    gesturesEnabled: false
  };

  render() {
    return (
      <Container>
        <Text>test</Text>
      </Container>
    );
  }
}
