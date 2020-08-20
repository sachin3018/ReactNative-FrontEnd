/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Button, Icon, Left, Body, Right } from 'native-base'
export default class Cardimage extends Component {
  render() {
    return (

      <Content>
        <Card>
          <CardItem>
            <Left>
              <Thumbnail source={require('./profile.jpg')} />
              <Body>
                <Text>Sachin Singh</Text>
                <Text note>Profile pic</Text>
              </Body>
            </Left>
          </CardItem>
          <CardItem cardBody>
            <Image source={require('./profile.jpg')}
            style={{height: 200, width: null, flex: 1, borderRadius : 10, overflow : 'hidden'}}/>
          </CardItem>
          <CardItem>
            <Left>
              <Button transparent>
                <Icon active name="thumbs-up" />
                <Text>12 Likes</Text>
              </Button>
            </Left>
            <Body>
              <Button transparent>
                <TouchableOpacity>
                  <Icon active name="chatbubbles" />
                  </TouchableOpacity>
                <Text>4 Comments</Text>
              </Button>

            </Body>
            <Right>
              <Text>11h ago</Text>
            </Right>
          </CardItem>
        </Card>
      </Content>

    );
  }
}
