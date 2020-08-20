/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import { Container, Header, Content, Footer, FooterTab, Button, Icon, Badge } from 'native-base'
export default class Footertab extends Component {
  render() {
    return (

       <Footer>
         <FooterTab  style={{backgroundColor:'#3498DB'}}>
           <Button badge vertical>
             <Badge><Text>2</Text></Badge>
             <Icon name="apps" />
             <Text>Apps</Text>
           </Button>
           <Button vertical>
             <Icon name="camera" />
             <Text>Camera</Text>
           </Button>
           <Button active badge vertical  style={{backgroundColor:'#3498DB'}}>
             <Badge ><Text>51</Text></Badge>
             <Icon active name="navigate" />
             <Text>Navigate</Text>
           </Button>
           <Button vertical>
             <Icon name="person" />
             <Text>Contact</Text>
           </Button>
         </FooterTab>
       </Footer>
    
    );
  }
}
