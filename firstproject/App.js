import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Sachin from "./component/Sachin.js"
import Red from "./component/Red.js"
import Blue from "./component/Blue"
import Green from "./component/Green"
export default function App() {
  return (
    <View style={styles.container}>
      <Red/>
      <Blue/>
      <Green/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50
  },
  myText: {
    color: '#000'
  },
});
