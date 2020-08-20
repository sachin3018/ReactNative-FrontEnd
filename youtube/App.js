import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, ScrollView, View } from 'react-native';
import Navbar from './Component/Navbar'
import Tab from './Component/Tab.js'
import Body from './Component/Body'
import data from './Component/Image/search.json'
export default function App() {
  return (
    <View style={styles.container}>
      <Navbar/>
      <ScrollView>
        <Body video = {data.items[0]}/>
        <Body video = {data.items[1]}/>
        <Body video = {data.items[2]}/>
        <Body video = {data.items[3]}/>
        <Body video = {data.items[4]}/>
      </ScrollView>
      <Tab/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

}
});
