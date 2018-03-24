import React, { Component, StyleSheet } from 'react';
import {View, Container, Content, Form, Item, Input, Button, Text, Body, Label, Spinner,
ListItem, CheckBox } from 'native-base';
import Modal from "react-native-modal";
import TimeCheck from './timeCheck';

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
    let current_qID = formData[0].qID;

    for(let i=0; i < formData.length; i++){
      // if (formData[i].qID == current_qID){
        // current_qID = formData[i].qID;

        listItem.push(
          <ListItem key={i}>
            <CheckBox onPress={() => {this.setForm(formData[i].qID, formData[i].qAnswers)}}
            checked={this.state.formState[formData[i].qID] == formData[i].qAnswers}/>
            <Body>
              <Text>{formData[i].description}</Text>
            </Body>
          </ListItem>
        )
        console.log(formData[i].description)
      // }
    }
    let genForm = (
      <Content>
        {listItem}
      </Content>
    );
    this.setState({genForm: genForm});
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
}
