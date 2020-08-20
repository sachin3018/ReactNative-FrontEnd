import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Container } from 'native-base';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import HeaderCustom from './Component/HeaderCustom'
import SwipCard from './Component/SwipCard'



export default function App() {
  return (
    <View style={styles.container}>
      <HeaderCustom/>
      <SwipCard/>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
