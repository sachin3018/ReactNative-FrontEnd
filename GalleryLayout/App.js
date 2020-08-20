import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Header from './Component/Header'
import Bodysection from './Component/Bodysection'
import Body from './Component/Body'
export default function App() {
  return (
    <View  style={styles.container}>
      <Header/>
      <Bodysection/>
      <Body/>
      <StatusBar style="auto" />
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
