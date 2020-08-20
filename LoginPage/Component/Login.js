/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  Dimensions,
  KeyboardAvoidingView,
  StyleSheet,
} from 'react-native';
import Myform from "./Myform.js"

export default class Login extends Component {
  render() {
    return (
      <KeyboardAvoidingView behavior='padding' style={styles.container}>
        <View style={styles.logocontainer}>
        <Image
        style = {styles.logo}
        source={require('./image/logo.png')}
        />
        <Text style={styles.title}>Simple Login Page</Text>
        </View>
        <View style={styles.myform}>
          <Myform/>
        </View>

      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: Dimensions.get('window').width,
    backgroundColor: '#2C3335'
  },
  logocontainer :{
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo:{
    width: 100,
    height: 100,
 },
myform :{
  flex: 1
},
title:{
  marginTop: 10,
  color: '#fff',
  fontSize: 15,
},
details:{
  color: '#fff',
  textAlign: 'center',
  fontSize: 20

}
});
