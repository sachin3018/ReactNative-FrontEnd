/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
export default class Navbar extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.nvbar}>
          <Image
            source={require('./Image/youtube.png')}
            style={styles.image}/>
            <View style={styles.moveright}>
              <TouchableOpacity>
                <Icon name='search' size={27} style={styles.icons}/>
              </TouchableOpacity>
              <TouchableOpacity>
                <Icon name='account-circle' size={27} style={styles.icons}/>
              </TouchableOpacity>
            </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {

  },
  nvbar:{
    marginTop: 35,
    height: 55,
    elevation: 3,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal:  15,
    backgroundColor: '#fff',

},
image:{
  width: 122,
  height: 27,
},
moveright:{
  flexDirection: 'row',
},
icons:{
  padding: 5,
  marginLeft: 15,
},
});
