import React, { Component, StyleSheet } from 'react';
import {View, Container, Content, Form, Item, Input, Button, Text, Body, Label, Spinner,
H1, H2, H3, Card, CardItem, Icon, Right } from 'native-base';
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
        <View style= {styles.timeCheckContent}>
          <Image resizeMode="contain" style={styles.logo} source={require('./images/ngo_logo.gif')} />
          <Text style={styles.text}>{this.props.ngoName}</Text>
          <Text style={styles.text}>Aid Programme: {this.props['aidName']}</Text>
          <Text style={styles.text}>Description: {this.props['aidDescription']}</Text>
          <Text style={styles.text}>Opened on Saturday 23rd of March!</Text>
        </View>
        <View style={styles.timeCheckGenForm}>
          <Body style={styles.loginButton}>
            <Button rounded large onPress={() => {this.props.completeSurvey()}}>
              <Text>Complete Survey</Text>
            </Button>
          </Body>
        </View>
      </Container>
    );
  }
}

const styles = {
  timeCheckContent: {
    // backgroundColor: "white",
    // flex: 1,
    marginTop: 20,
  },
  text: {
    textAlign: 'center',
    marginBottom: 10,
    // fontWeight: 'bold',
  },
  timeCheckGenForm: {
    marginTop: 25,
    // flex: 1,
    // backgroundColor: "#446CB3",
    // borderRadius: 32,
    // width: 300,

  },
  logo: {
    height: 100,
    marginBottom: 10,
  },
}
