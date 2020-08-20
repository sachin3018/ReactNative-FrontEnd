import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import { Container, Header, Left, Right, Body, Button, Icon, Title} from 'native-base'
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';


export default class HeaderCustom extends Component {

  async componentDidMount() {
      await Font.loadAsync({
        Roboto: require('native-base/Fonts/Roboto.ttf'),
        Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
        ...Ionicons.font,
      });
      this.setState({ isReady: true });
    }

  render() {
    return (
              <Header style={{backgroundColor: '#fff'}}>
                  <Left style={{flex:1}}>
                      <Button transparent>
                        <Icon name='menu' style={{color: "#000"}} />
                      </Button>
                  </Left>
                  <Body style={{flex:1,alignItems: 'center',}}>
                      <Title style={{color: '#000'}}>Tinder</Title>
                      <Icon name='heart' style={{color: 'red'}}/>
                  </Body>
                  <Right style={{flex:1}}>
                  <Button transparent>
                    <Icon name='camera' style={{color: "#000"}} />
                  </Button>
                  </Right>
              </Header>
    );
  }
}
