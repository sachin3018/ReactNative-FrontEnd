import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,ScrollView,TouchableOpacity, } from 'react-native';
import { ListItem,List } from 'react-native-elements';
import ChatList from './Component/ChatList'
export default function App() {
  return (
    <View style={styles.container}>
       <ChatList />
     </View>
);
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    backgroundColor: '#fff',

  },
});
