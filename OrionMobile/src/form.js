import React, { Component, StyleSheet } from 'react';
import {View, Container, Content, Form, Item, Input, Button, Text, Body, Label, Spinner,
ListItem, CheckBox, Icon, Right, Badge } from 'native-base';
import Modal from "react-native-modal";
import TimeCheck from './timeCheck';
import Tts from 'react-native-tts';

export default class OrionForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      timeCheckModal: true,
      genForm: null,
      formState: {},
      updateForm: false,
    }
  }
  static navigationOptions = {
    header:null,
    gesturesEnabled: false
  };

  genFormData(){
    let formData = this.props.navigation.state.params.data.form;
    let formState = {};
    for(let i=0; i < formData.length; i++){
      formState[formData[i].qID] = formData[i].qAnswers;
    }
    console.log("init formstate:", formState);
    this.setState({formState:formState});
  }

  setForm(qid, qAnswers){
    this.questionToSpeech(qAnswers);
    console.log("setForm:", qid, qAnswers)
    let formData = Object.assign({}, this.state.formState );
    console.log(formData);
    formData[qid] = qAnswers;
    console.log(formData);
    this.setState({formState: formData, updateForm: true});
  }

  genForm(){
    this.setState({timeCheckModal:false});
    let formData = this.props.navigation.state.params.data.form;
    let listItem = [];
    let current_qID = "";

    for(let i=0; i < formData.length; i++){
      if (formData[i].qID == current_qID){
        listItem.push(
          <ListItem key={i} style={styles.listItem}>
            <CheckBox onPress={() => {this.setForm(formData[i].qID, formData[i].qAnswers)}}
            checked={this.state.formState[formData[i].qID] == formData[i].qAnswers}/>
            <Body>
              <Text>{formData[i].qAnswers}</Text>
            </Body>
          </ListItem>
        )
      }else{
        let description = formData[i].description
        listItem.push(
          <Button block iconLeft rounded small info style={styles.button} key={i.toString()+"-lable"}
          onPress = {() => {this.questionToSpeech(description)}}>
            <Icon style={{paddingTop: 5, paddingBottom: 5, color: 'white'}} name="md-mic"/>
            <Text style={{paddingTop: 5, paddingBottom: 5, color: 'white'}}>{description}</Text>
          </Button>);
        current_qID = formData[i].qID;
        i--;
      }
    }
    let genForm = (
      <Content>
        {listItem}
      </Content>
    );
    this.setState({genForm: genForm});
  }

  questionToSpeech(string){
    Tts.stop();
    Tts.addEventListener('tts-start', (event) => console.log("start", event));
    Tts.addEventListener('tts-finish', (event) => console.log("finish", event));
    Tts.addEventListener('tts-cancel', (event) => console.log("cancel", event));
    Tts.setDefaultRate(0.4);
    Tts.speak(string, { iosVoiceId: 'com.apple.ttsbundle.Daniel-compact'});
  }

  componentDidMount(){
    this.genFormData();
  }

  componentDidUpdate(){
    if(this.state.updateForm){
      this.genForm();
      this.setState({updateForm: false});
    }
  }

  render() {
    return (
      <Container>
        <Content style={{marginTop: 20}}>
          {this.state.genForm}
        </Content>
      <Modal isVisible={this.state.timeCheckModal}>
        <View style={styles.modalContent}>
          <TimeCheck
          {...this.props.navigation.state.params.data}
          completeSurvey={() => {this.genForm()}}/>
        </View>
      </Modal>
      </Container>
    )
  }
}

const styles = {
  modalContent: {
   backgroundColor: "white",
   padding: 20,
   justifyContent: "center",
   alignItems: "center",
   borderRadius:32,
   borderColor: "rgba(0, 0, 0, 0.1)",
   height: 400,
 },
 listItem: {
   paddingBottom: 10,
   paddingTop: 10,
 },
 button: {
   marginBottom: 10,
   marginTop: 10,
   // fontWeight: 'bold',
   marginLeft: 5,
   marginRight: 5,
   paddingBottom: 30,
   paddingTop: 30,
 }
}
