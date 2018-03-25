import React, { Component, StyleSheet } from 'react';
import {View, Container, Content, Form, Item, Input, Button, Text, Body, Label, Spinner,
H1, H2, H3, Card, CardItem, Icon, Right} from 'native-base';
import { Image } from 'react-native';
import Tts from 'react-native-tts';

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

  speech(){
    let speech = "Hello this is the " + this.props.ngoName + ". You are about to fill out a survey for " + this.props['aidName'] + ".";
    Tts.addEventListener('tts-start', (event) => console.log("start", event));
    Tts.addEventListener('tts-finish', (event) => console.log("finish", event));
    Tts.addEventListener('tts-cancel', (event) => console.log("cancel", event));
    Tts.setDefaultRate(0.4);
    Tts.speak(speech, { iosVoiceId: 'com.apple.ttsbundle.Samantha-compact', quality:500});
  }

  render() {
    return (
      <Container>
        <View style= {styles.timeCheckContent}>
          <Image resizeMode="contain" style={styles.logo} source={require('./images/ngo_logo.gif')} />
          <Text style={styles.text}><Text style={{fontWeight: 'bold'}}>{this.props.ngoName}</Text></Text>
          <Text style={styles.text}> {this.props['aidName']}</Text>
        </View>
        <View style={styles.timeCheckGenForm}>
          <Body>
            <Button iconLeft rounded success onPress={() => {this.speech()}}>
              <Icon name="md-mic"/>
              <Text>Speech Assist     </Text>
            </Button>
            <Button iconLeft style={{marginTop: 5}} rounded onPress={() => {this.props.completeSurvey()}}>
              <Icon name="md-list-box"/>
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
    alignItems: 'center',
    // marginTop: 25,
    // flex: 1,
    // backgroundColor: "#446CB3",
    // borderRadius: 32,
    // width: 300,

  },
  logo: {
    height: 100,
    marginBottom: 10,
  },
  loginButton:{
    // marginTop: 10,
    justifyContent: "center"
  }
}
