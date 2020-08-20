/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  ScrollView,
  StyleSheet,
} from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Button, Icon, Left, Body, Right,Title, Subtitle} from 'native-base'
import { Drawer } from 'native-base';
import Sidebar from './Sidebar'
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import Cardimage from './Cardimage.js'
import Footertab from './Footertab'


export default class DrawMain extends Component {


  async componentDidMount() {
      await Font.loadAsync({
        Roboto: require('native-base/Fonts/Roboto.ttf'),
        Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
        ...Ionicons.font,
      });
      this.setState({ isReady: true });
    }

  closeDrawer ()  {
      this.drawer._root.close()
    }

  openDrawer () { this.drawer._root.open() }

  render() {
    return (

      <Drawer ref={(ref) => { this.drawer = ref; }}
        content={<Sidebar navigator={this.navigator} />}
        onClose={() => this.closeDrawer()} >

        <Container >
        <Header style={{backgroundColor: '#74B9FF'}}>
          <Left>
            <Button transparent onPress={()=> this.openDrawer()}>
              <Icon name='menu' />
            </Button>
          </Left>
          <Body >
            <Title>Sidebar</Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon name='heart' />
            </Button>
          </Right>
        </Header>
        <FlatList
          data={[{key:'a'},{key:'b'},{key:'c'},{key:'d'}]}
          renderItem={({item})=><Cardimage/>}
        />
      </Container>
      <Footertab/>
        </Drawer>

    );
  }
}
