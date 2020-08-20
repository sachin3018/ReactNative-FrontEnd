/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  Dimensions,
  StyleSheet,
} from 'react-native';

export default class Body extends Component {
  render() {
    return (
      <ScrollView style={{flex: 1}}>
        <View style={styles.bigview}>
          <View style={styles.smallview}>
          <Image
          source={require('./Image/img1.jpeg')}
          style={styles.myimg}/>
          </View>
          <View style={styles.smallview}>
          <Image
          source={require('./Image/img1.jpeg')}
          style={styles.myimg}/>
          </View>
          <View style={styles.smallview}>
          <Image
          source={require('./Image/img1.jpeg')}
          style={styles.myimg}/>
          </View>
          <View style={styles.smallview}>
          <Image
          source={require('./Image/img1.jpeg')}
          style={styles.myimg}/>
          </View>
          <View style={styles.smallview}>
          <Image
          source={require('./Image/img1.jpeg')}
          style={styles.myimg}/>
          </View>
          <View style={styles.smallview}>
          <Image
          source={require('./Image/img1.jpeg')}
          style={styles.myimg}/>
          </View>
          <View style={styles.smallview}>
          <Image
          source={require('./Image/img1.jpeg')}
          style={styles.myimg}/>
          </View>
          <View style={styles.smallview}>
          <Image
          source={require('./Image/img1.jpeg')}
          style={styles.myimg}/>
          </View>
          <View style={styles.smallview}>
          <Image
          source={require('./Image/img1.jpeg')}
          style={styles.myimg}/>
          </View>
          <View style={styles.smallview}>
          <Image
          source={require('./Image/img1.jpeg')}
          style={styles.myimg}/>
          </View>
          <View style={styles.smallview}>
          <Image
          source={require('./Image/img1.jpeg')}
          style={styles.myimg}/>
          </View>
          <View style={styles.smallview}>
          <Image
          source={require('./Image/img1.jpeg')}
          style={styles.myimg}/>
          </View>
          <View style={styles.smallview}>
          <Image
          source={require('./Image/img1.jpeg')}
          style={styles.myimg}/>
          </View>
          <View style={styles.smallview}>
          <Image
          source={require('./Image/img1.jpeg')}
          style={styles.myimg}/>
          </View>
          <View style={styles.smallview}>
          <Image
          source={require('./Image/img1.jpeg')}
          style={styles.myimg}/>
          </View>
          <View style={styles.smallview}>
          <Image
          source={require('./Image/img1.jpeg')}
          style={styles.myimg}/>
          </View>
          </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  bigview: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  smallview:{
    margin: 2,
    height: 100,
    width: (Dimensions.get('window').width / 2)-4,
  },
 myimg:{
   flex: 1,
   width: null,
   alignSelf: 'stretch',

 }
});
