import React from 'react';
import ListItem from '../components/ListItem';
import Screen from '../components/Screen';
import { FlatList, StyleSheet, View } from 'react-native';
import colors from '../config/colors';
import Icon from '../components/Icon';
import ListItemSeparator from '../components/ListItemSeparator';
const menuItems = [
  {
    title: 'My listings',
    icon: {
      name: 'format-list-bulleted',
      backgroundColor: colors.primary,
    },
  },
  {
    title: 'My Messages',
    icon: {
      name: 'email',
      backgroundColor: colors.secondary,
    },
  },
];
const AccountScreen = () => {
  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <ListItem
          title='Michael njoroge'
          subTitle='mykesoftware@gmail.com'
          image={require('../assets/mosh.jpg')}
        />
      </View>
      <View style={styles.container}>
        <FlatList
          ItemSeparatorComponent={ListItemSeparator}
          data={menuItems}
          keyExtractor={(menuItem) => menuItem.title}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              IconComponent={
                <Icon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
            />
          )}
        />
      </View>
      <ListItem
        title='Logout'
        IconComponent={<Icon name='logout' backgroundColor='#ffe66d' />}
      />
    </Screen>
  );
};
const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  screen: {
    backgroundColor: colors.light,
  },
});

export default AccountScreen;
