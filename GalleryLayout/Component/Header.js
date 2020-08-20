/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  Dimensions,
  StyleSheet,
} from 'react-native';
export default class Header extends Component {
  render() {
    return (
      <ImageBackground
        source = {require('./Image/background.jpeg')}
        style = {styles.background}>

        <View style={styles.headercontainer}>
          <View style={styles.profilecontainer}>
            <Image
              source = {require('./Image/profile.jpg')}
              style={styles.photo}
            />
          </View>
          <Text style={styles.text}>Sachin Singh</Text>
          <Text style={styles.oneline}>Android and ios</Text>
        </View>

      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  background:{
    flex :1,
    width: null,
    alignSelf: 'stretch',
  },
  headercontainer:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: 'rgba(0,0,0,0.4)'
  },
  profilecontainer:{
    width: 150,
    height: 150,
    marginTop: 100
  },
  photo:{
    flex: 1,
    width: null,
    alignSelf: 'stretch',
    borderRadius: 90,
    borderColor: '#fff',
    borderWidth: 3,
  },
  text:{
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 10,
  },
  oneline:{
    fontSize: 15,
    fontWeight: '100',
    fontStyle: 'italic',
    color: '#DAE0E2',
    marginTop: 5,
  },
});
