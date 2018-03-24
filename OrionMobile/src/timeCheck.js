import React, { Component, StyleSheet } from 'react';
import {View, Container, Content, Form, Item, Input, Button, Text, Body, Label, Spinner,
H1, H2, H3 } from 'native-base';
import { Image } from 'react-native';

export default class TimeCheck extends Component {
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
        <Content style= {styles.timeCheckContent}>
          <H1 style={styles.H1}>Survey for [AID PROGRAM] opens at [TIME]</H1>
        </Content>
      </Container>
    );
  }
}

const styles = {
  timeCheckContent: {
    marginTop: 20,
  },
  H1: {
    textAlign: 'center'
  },
}
