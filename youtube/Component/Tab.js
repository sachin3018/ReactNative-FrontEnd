/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import Icons from 'react-native-vector-icons/MaterialIcons'

export default class Tab extends Component {
  render() {
    return (
      <View style={styles.tabbar}>
        <TouchableOpacity style={styles.touchable}>
          <Icons name='home' size={27}/>
          <Text style={styles.label}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.touchable}>
          <Icons name='explore' size={27}/>
          <Text style={styles.label}>Explore</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.touchable}>
          <Icons name='subscriptions' size={27}/>
          <Text style={styles.label}>Subscriptions</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.touchable}>
          <Icons name='mail' size={27}/>
          <Text style={styles.label}>Inbox</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.touchable}>
          <Icons name='video-library' size={27}/>
          <Text style={styles.label}>Library</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  tabbar: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    height : 60,
    borderTopWidth:2,
    borderColor : '#e5e5e5',
    justifyContent: 'space-around'
  },
  touchable:{
    alignItems:'center',
    justifyContent:'center',
  },
  label:{
    fontSize : 14,
    textAlign : 'center',
    paddingTop : 2,
    color : 'rgb(50,50,50)'
  },
});
