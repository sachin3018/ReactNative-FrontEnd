/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

export default class Bodysection extends Component {
  render() {
    return (
      <View style={[styles.mid]}>
        <View style={[styles.outerview,styles.leftbar]}>
          <Text style={styles.textone}>25 +</Text>
          <Text style={styles.texttwo}>Photos</Text>
        </View>
        <View style={styles.outerview}>
          <Text style={styles.textone}>100 +</Text>
          <Text style={styles.texttwo}>Likes</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mid: {
    flexDirection: 'row',
    backgroundColor: '#B83227',
    borderTopColor: '#fff',
    borderTopWidth: 8,
    marginBottom: 8,
  },
  outerview:{
    flex: 1,
    padding: 20,
    alignItems: 'center',

  },
  textone:{
    fontSize: 18,
    fontWeight:'bold',
    color: '#fff',
  },
  texttwo:{
    fontSize: 15,
    color: '#fff',
  },
  leftbar:{
    borderRightWidth: 3,
    borderRightColor: '#fff'
  },
});
