import React from 'react';
import {
  View,
  ScrollView,
  Text
} from 'react-native';

import Item from './Item';

const ListItem = (props) => {
  return (
    <View>
      <ScrollView>
    {props.items.length === 0 && <Text>Loading...</Text>}

      { props.items.map((item, index) => {
        // console.log(item);
        return (
        <Item key={index} itemName={item.name} itemId={index + 1} ></Item>
        )

      })
      }
      </ScrollView>
    </View>
  )
}

export default ListItem;
