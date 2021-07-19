import React, { useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import ListItem from '../components/ListItem';

import Constants from 'expo-constants';
import Screen from '../components/Screen';
import ListItemSeparator from '../components/ListItemSeparator';
import ListItemDelete from '../components/ListItemDelete';

const initalMessages = [
  {
    id: 1,
    title: 'T1',
    description: 'D1',
    image: require('../assets/mosh.jpg'),
  },

  {
    id: 2,
    title: 'T2',
    description: 'D2',
    image: require('../assets/mosh.jpg'),
  },
];

const MessagesScreen = () => {
  const [messages, setMessages] = useState(initalMessages);
  const [resfreshing, setRefreshing] = useState(false);
  const handleDelete = (message) => {
    const newMessages = messages.filter((m) => m.id !== message.id);
    setMessages(newMessages);
  };
  return (
    <Screen style={styles.screen}>
      <FlatList
        refreshing={resfreshing}
        onRefresh={() => {
          setMessages([
            {
              id: 2,
              title: 'T2',
              description: 'D2',
              image: require('../assets/mosh.jpg'),
            },
          ]);
        }}
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => console.log('Message selected', item)}
            renderRightActions={() => (
              <ListItemDelete onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
      />
    </Screen>
  );
};
const styles = StyleSheet.create({});

export default MessagesScreen;
