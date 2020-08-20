/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
} from 'react-native';

export default class Body extends Component {
  render() {
    let video = this.props.video;
    return (
      <View style={styles.container}>
        <Image source={{uri : video.snippet.thumbnails.medium.url}}
          style={{height: 200,borderRadius: 5,}}/>
          <View style={styles.textcontainers}>
            <Image source={{uri : video.snippet.thumbnails.medium.url}} style={styles.picture}/>
            <View style={styles.innercontainer}>
              <Text style={styles.text}>{video.snippet.title}</Text>
              <Text style={styles.videostat}>{video.snippet.channelTitle} 250k Views</Text>
            </View>
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 14,
    backgroundColor: '#000',
  },
  textcontainers:{
    flexDirection: 'row',
    marginLeft: 10,
    paddingRight: 5,
    paddingTop: 15
  },
  picture:{
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: '#fff',
  },
  text:{
    fontSize: 14,
    color: '#fff',
    fontWeight: 'bold',
    marginRight: 5,

  },
  innercontainer:{
    marginLeft: 10,
    padding: 10,
  },
  videostat:{
    fontSize: 12,
    color: '#fff',
    marginTop: 5,
  },
});
