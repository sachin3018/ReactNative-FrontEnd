import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Header from './Component/Header.js'
import Heroimage from './Component/Heroimage.js'
import Body from './Component/Body.js'
export default function App() {
  return (
    <ScrollView style={styles.container}>
      <Header/>
      <Heroimage/>
      <Body/>
      <StatusBar style="auto" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
