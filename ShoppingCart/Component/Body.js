/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import Getimage from './Getimage.js'
export default class Body extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.colume1}>
          <Getimage imageSource={require('./Image/img3.jpeg')}/>
        </View>
        <View style={styles.colume2}>
          <Getimage imageSource={require('./Image/img4.jpg')}/>
        </View>
        <View style={styles.full}>
          <Getimage imageSource={require('./Image/img5.jpeg')}/>
        </View>


        <View style={styles.full}>
          <Getimage imageSource={require('./Image/img6.jpeg')}/>
        </View>
        <View style={styles.full}>
          <Getimage imageSource={require('./Image/img2.jpeg')}/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'row',
    padding: 4,
    flexWrap: 'wrap',
    backgroundColor: '#3b5998'
  },
  colume1:{
      flex:1,
      padding:2,
  },
  colume2:{
      flex:1,
      padding: 2,
  },
  full:{
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 2,
  },
});
