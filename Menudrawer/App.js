import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Drawer } from 'native-base';
import DrawMain from './Components/DrawMain'



export default function App() {
  return (

      <DrawMain/>

);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
});
