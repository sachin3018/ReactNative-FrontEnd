/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

export default class Myform extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TextInput
        style={styles.textdesign}
        placeholder = 'Username'></TextInput>
        <TextInput
        style={styles.textdesign}
        placeholder='Password'
        secureTextEntry={true}></TextInput>
        <TouchableOpacity style={styles.buttoncontainer}>
        <Text style={styles.buttontext}>Log In</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,

  },
  textdesign:{
    height: 40,
    backgroundColor: '#535C68',
    color: '#fff',
    textAlign: 'center',
    fontSize: 20,
    marginBottom: 15,
  },
  buttoncontainer:{
    backgroundColor: "#26ae60",
    paddingVertical: 15
  },
  buttontext:{
    textAlign: 'center',
    color: '#fff',
    fontSize: 15

  },
});
