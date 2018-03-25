import React, { Component, StyleSheet } from 'react';
import { Alert } from 'react-native';
import {View, Container, Content, Form, Item, Input, Button, Text, Body, Label, Spinner,
ListItem, CheckBox, Icon, Right, Badge } from 'native-base';
import Modal from "react-native-modal";
import TimeCheck from './timeCheck';
import Tts from 'react-native-tts';
import moment from 'moment';

export default class OrionForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      timeCheckModal: true,
      genForm: null,
      formState: {},
      updateForm: false,
      loading: false,
      dayOffset: 0,
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
      formState[formData[i].qID] = {
        qAnswers: formData[i].qAnswers,
        qaID: formData[i].qaID,
      };
    }
    console.log("init formstate:", formState);
    this.setState({formState:formState});
  }

  setForm(qid, qAnswers){
    this.questionToSpeech(qAnswers);
    console.log("setForm:", qid, qAnswers)
    let formData = Object.assign({}, this.state.formState );
    console.log(formData);
    formData[qid].qAnswers = qAnswers;
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
            checked={this.state.formState[formData[i].qID].qAnswers == formData[i].qAnswers}/>
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
    Tts.speak(string, { iosVoiceId: 'com.apple.ttsbundle.Samantha-compact'});
  }

  genPostForm(){
    let formPost = []
    for(let key in this.state.formState){
      formPost.push({
        "qID": key,
        "qaID": this.state.formState[key].qaID,
      })
    }
    console.log("form post:", formPost)
    return formPost
  }

  submitSurvey(){
    this.setState({loading:true});
    let form = this.genPostForm();
    console.log("User id:", this.props.navigation.state.params.data.userID)
    fetch("https://dbd562db.ngrok.io/form", {
      method: 'POST',
      headers: {
       Accept: 'application/json',
       'Content-Type': 'application/json',
      },
      body: JSON.stringify({
       userID: this.props.navigation.state.params.data.userID,
       form: form,
       time: moment().add(this.state.dayOffset, 'days').format('DD_MM_YYYY HH:MM'),
      }),
     })
     .then((response) => response.json())
     .then((responseJson) => {
       console.log("offset,", this.state.dayOffset)
       this.setState({loading:false, dayOffset: this.state.dayOffset+1});
       Alert.alert("Survey Completed!");
       console.log(responseJson)
     })
     .catch((error) => {
       this.setState({loading:false});
       console.error(error);
     });
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
        {this.state.loading ?
          <View>
            <Spinner color='blue' />
          </View> :
          <View style={{marginTop: 30, marginBottom: 30}}>
            <Button style={styles.submitButton} iconLeft rounded onPress={() => {this.submitSurvey()}}>
              <Icon name="md-checkbox"/>
              <Text>Submit Survey</Text>
            </Button>
          </View>}
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
 },
 submitButton:{
   // marginBottom: 30,
   alignSelf:'center'
 }
}
