/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import { Container, Header, Content, Button, Icon, } from 'native-base';


export default class Main extends Component {
  render() {
    return (
      <Container>
          <Header />
          <Content>
            <Button disabled>
                <Text>Default</Text>
              </Button>
              <Button disabled bordered>
                <Text>Outline</Text>
              </Button>
              <Button disabled rounded>
                <Text>Rounded</Text>
              </Button>
              <Button disabled large>
                <Text>Custom</Text>
              </Button>
              <Button disabled iconRight>
                <Text>Icon Button</Text>
                <Icon name="home" />
              </Button>
              <Button disabled block>
                <Text>Block</Text>
              </Button>
          </Content>
        </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
