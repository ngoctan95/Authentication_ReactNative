/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Header from './src/components/common/header';
import {styles} from './style/styleSheet'
import firebase from 'firebase';
import LoginForm from './src/components/Login/LoginForm';
import Logout from './src/components/Logout/Logout';
export default class App extends Component {
  state ={
    isLoggedIn : false
  }
componentWillMount(){
  firebase.initializeApp({
    apiKey: "AIzaSyDp3OznL6zkBtsC7H8NWSoy-Q-9EfsQ-q4",
    authDomain: "test-1e152.firebaseapp.com",
    databaseURL: "https://test-1e152.firebaseio.com",
    projectId: "test-1e152",
    storageBucket: "test-1e152.appspot.com",
    messagingSenderId: "832931310283"
  });
  firebase.auth().onAuthStateChanged((user)=>{
    console.log(user)
   this.setState({
     isLoggedIn: user?true:false
   })
  })
}
  render() {
    console.log(this.state.isLoggedIn)
    return (
      <View style={{flex:1}}>
        <Header title="Auth" style={styles.container}/>
        {
          !this.state.isLoggedIn?<LoginForm />:<Logout/>
        }
      </View>
    );
  }
}
