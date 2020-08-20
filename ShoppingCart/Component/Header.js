/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  Dimensions,
  StyleSheet,
} from 'react-native';

export default class Header extends Component {
  render() {
    return (
      <View style={styles.header}>
        <Image
          source = {require('./Image/img1.png')}
          style={styles.logo}
        />
        <Text style={styles.title}>Shopping Cart</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    height: 80,
    marginTop: 20,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 4,
    borderBottomColor: '#ccc',
    padding: 20,
    width: Dimensions.get('window').width,
  },
  logo :{
    marginTop: 20,
    width: 40,
    height: 40,

  },
  title : {
    textAlign: 'center',
    color: "#616C6F",
    fontWeight: 'bold',
    fontSize: 17,
    fontStyle: 'italic',
    marginLeft: 10,
    marginTop: 20,
  },
});
