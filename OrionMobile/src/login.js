import React, { Component, StyleSheet } from 'react';
import {View, Container, Content, Form, Item, Input } from 'native-base';
import { Image } from 'react-native';

export default class Login extends Component {
  static navigationOptions = {
    header:null,
    gesturesEnabled: false
  };
  render() {
    return (
      <Container>
      <View style={styles.loginContainer}>
          <Image resizeMode="contain" style={styles.logo} source={require('./images/orionLogo.png')} />
        </View>
        <Content>
          <Form style={styles.formContainer}>
            <Item>
              <Input placeholder="Username" />
            </Item>
            <Item last>
              <Input placeholder="Password" />
            </Item>
          </Form>
        </Content>
      </Container>
    );
  }
}

const styles = {
  formContainer: {
    padding: 20
  },
  logo: {
    position: 'absolute',
    height: 250,
  },
  loginContainer:{
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center'
  },
}
