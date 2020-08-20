/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
} from 'react-native';
import {  Container, Header, Content, Button, } from 'native-base';
export default class Sidebar extends Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.text}>Side Menu</Text>
        <Image source={require('./profile.jpg')} style={styles.picture}  />
         <Button block light style={styles.button} >
           <Text>Light</Text>
         </Button>
         <Button block  style={styles.button}>
           <Text>Primary</Text>
         </Button>
         <Button block success  style={styles.button}>
           <Text>Success</Text>
         </Button>
         <Button block info  style={styles.button}>
           <Text>Info</Text>
         </Button>
         <Button block warning  style={styles.button}>
           <Text>Warning</Text>
         </Button>
         <Button block danger  style={styles.button}>
           <Text>Danger</Text>
         </Button>
         <Button block dark  style={styles.button}>
           <Text>Dark</Text>
         </Button>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    marginRight: 5,
    marginBottom: 5
  },
  text:{
    color: '#fff',
    marginTop: 5,
    marginLeft: 10,
  },
  picture:{
    width: '100%',
    height: 100,
    opacity: 0.7,
    margin: 10,
  },
  button:{
    marginTop: 5,
    marginRight: 10,
    marginLeft: 10,
    marginBottom: 5,
  },
});
