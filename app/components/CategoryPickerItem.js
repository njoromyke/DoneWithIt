import React from 'react';
import { StyleSheet, View } from 'react-native';
import AppText from './AppText/AppText';
import Icon from './Icon';

const CategoryPickerItem = ({ item, onPress }) => {
  return (
    <View style={styles.container}>
      <Icon backgroundColor={item.backgroundColor} name={item.icon} size={80} />
      <AppText style={styles.label}> {item.label} </AppText>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    marginTop: 3,
    paddingHorizontal: 30,
    paddingHorizontal: 15,
    alignItems: 'center',
    width: '33%',
  },
  label: {
    marginTop: 5,
    textAlign: 'center',
  },
});

export default CategoryPickerItem;
