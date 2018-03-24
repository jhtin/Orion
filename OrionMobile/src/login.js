import React, { Component, StyleSheet } from 'react';
import {View, Container, Content, Form, Item, Input, Button, Text, Body, Label, Spinner } from 'native-base';
import { Image } from 'react-native';

const LOGIN_URL = 'https://mywebsite.com/endpoint/';
const MOCK_DATA = {
    "userID": 2,
    "Name": "Grace",
    "email": "test",
    "ngoName": "United Nations Development Programme",
    "aidID": 2,
    "aidName": "help rich ppl",
    "aidDescription": "first world problems",
    "form": [
    {
        "qID": 3,
        "aidID": 2,
        "description": "Do you own a car?",
        "qaID": 6,
        "qAnswers": "Yes"
    },
    {
        "qID": 3,
        "aidID": 2,
        "description": "Do you own a car?",
        "qaID": 7,
        "qAnswers": "No"
    },
    {
        "qID": 4,
        "aidID": 2,
        "description": "are you cool?",
        "qaID": 8,
        "qAnswers": "Yes"
    },
    {
        "qID": 4,
        "aidID": 2,
        "description": "are you cool?",
        "qaID": 9,
        "qAnswers": "No"
    }]
}
export default class Login extends Component {
  constructor(props){
    super(props);
    this.state = {
      username:"",
      password: "",
      loading: false,
    }
  }
  static navigationOptions = {
    header:null,
    gesturesEnabled: false
  };
  onLogin(){
    this.setState({loading:true});
    console.log("login")
    console.log("password:", this.state.username)
    console.log("password:", this.state.password)
    // fetch(LOGIN_URL, {
    //   method: 'POST',
    //   headers: {
    //     Accept: 'application/json',
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({
    //     username: this.state.username,
    //     password: this.state.password,
    //   }),
    // })
    // .then((response) => response.json())
    // .then((responseJson) => {
    //   this.setState({loading:false});
    //   this.props.navigation.navigate('TimeCheck', {data: responseJson});
    // })
    // .catch((error) => {
    //   console.error(error);
    // });
    this.setState({loading:false});
    this.props.navigation.navigate('OrionForm', {data: MOCK_DATA});
  }

  render() {
    return (
      <Container>
      <View style={styles.loginContainer}>
        <Image resizeMode="contain" style={styles.logo} source={require('./images/orionLogo.png')} />
      </View>
        <Content>
          <Form style={styles.formContainer}>
            <Item floatingLabel>
              <Label>Username</Label>
              <Input onChangeText={(username) => this.setState({ username })}
              value={this.state.username}/>
            </Item>
            <Item floatingLabel>
              <Label>Password</Label>
              <Input secureTextEntry={true} onChangeText={(password) => this.setState({ password })}
              value={this.state.password}/>
            </Item>
            {this.state.loading ?
            <View>
              <Spinner color='blue' />
            </View> :
            <Body style={styles.loginButton}>
              <Button rounded onPress={this.onLogin.bind(this)}>
                <Text>Login</Text>
              </Button>
            </Body>}
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
    height: 200,
  },
  loginContainer:{
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center'
  },
  loginButton:{
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "center"
  }
}
