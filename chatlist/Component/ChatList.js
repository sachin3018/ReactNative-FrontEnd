import React, { Component } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { List, ListItem } from 'react-native-elements';
import { users } from './Image/data';

const list = [
  {
    name: 'Amy Farha',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    subtitle: 'Vice President'
  },
  {
    name: 'Chris Jackson',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Vice Chairman'
  },
];


export default class ChatList extends Component {
  render() {
    return (
      <ScrollView>
      {users.map((user) =>
     <TouchableOpacity>
       <ListItem
         key={user.login.username}
         roundAvatar
         leftAvatar={{ source: { uri: user.picture.thumbnail } }}
         title={`${user.name.first.toUpperCase()}`}
         subtitle={user.email}
         topDivider
         chevron
          />

     </TouchableOpacity>

   )}
      </ScrollView>
);
}
}

ChatList.defaultProps = { ...users }
