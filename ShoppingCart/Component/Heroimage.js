/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
} from 'react-native';
import HeroText from './HeroText'

export default class Heroimage extends Component {
  render() {
    return (
        <ImageBackground
          source={require('./Image/img2.jpeg')}
          style={styles.hero}
        >
          <HeroText textSource='Laptops'/>
        </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  hero :{
    width: '100%',
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',

  },
});
