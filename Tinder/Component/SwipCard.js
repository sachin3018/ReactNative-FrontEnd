/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
} from 'react-native';
import { Container, Header, DeckSwiper, Card, CardItem, Thumbnail,Left, Body, Icon } from 'native-base';

const cards = [
  {
    text : 'Naman',
    name : '150k',
    image : require('./Image/Naman.jpg')
  },
  {
    text : 'Pradeep',
    name : '200k',
    image : require('./Image/pradeep.jpg')
  },
];


export default class SwipCard extends Component {
  render() {
    return (
      <Container style={styles.container}>
       <View>
         <DeckSwiper
           dataSource={cards}
           
           renderItem={item =>
             <Card style={{ elevation: 3 }}>
               <CardItem>
                 <Left>
                   <Thumbnail source={item.image} />
                   <Body>
                     <Text>{item.text}</Text>
                   </Body>
                 </Left>
               </CardItem>
               <CardItem cardBody>
                 <Image style={{ height: 550, flex: 1 }} source={item.image} />
               </CardItem>
               <CardItem>
                 <Icon name="heart" style={{ color: '#ED4A6A' }} />
                 <Text>{item.name}</Text>
               </CardItem>
             </Card>
           }
         />
       </View>
     </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
