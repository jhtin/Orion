import React, { Component, StyleSheet } from 'react';
import {View, Container, Content, Form, Item, Input, Button, Text, Body, Label, Spinner } from 'native-base';
import { Image } from 'react-native';

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
    fetch("https://dbd562db.ngrok.io/login", {
      method: 'POST',
      headers: {
       Accept: 'application/json',
       'Content-Type': 'application/json',
      },
      body: JSON.stringify({
       Name: this.state.username,
       password: this.state.password,
      }),
     })
     .then((response) => response.json())
     .then((responseJson) => {
       this.setState({loading:false});
       console.log(responseJson)
       if(responseJson != '403'){
         this.props.navigation.navigate('OrionForm', {data: responseJson});
       }
     })
     .catch((error) => {
       console.error(error);
     });
    // this.setState({loading:false});
    // this.props.navigation.navigate('OrionForm', {data: MOCK_DATA});
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
