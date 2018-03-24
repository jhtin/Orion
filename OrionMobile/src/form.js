import React, { Component, StyleSheet } from 'react';
import {View, Container, Content, Form, Item, Input, Button, Text, Body, Label, Spinner } from 'native-base';
import Modal from "react-native-modal";
import TimeCheck from './timeCheck';

export default class OrionForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      timeCheckModal: true,
    }
  }
  static navigationOptions = {
    header:null,
    gesturesEnabled: false
  };

  render() {
    return (
      <View>
        <Modal isVisible={this.state.timeCheckModal}>
          <View style={styles.modalContent}>
            <TimeCheck/>
          </View>
        </Modal>
      </View>
    )
  }
}

const styles = {
  modalContent: {
   backgroundColor: "white",
   padding: 20,
   justifyContent: "center",
   alignItems: "center",
   borderRadius: 4,
   borderColor: "rgba(0, 0, 0, 0.1)",
   height: 300,
 },
}
