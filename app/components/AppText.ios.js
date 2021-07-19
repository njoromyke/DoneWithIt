import React from 'react';
import { Text, StyleSheet } from 'react-native';
function AppText({ children }) {
  return <Text style={styles.text}>{children}</Text>;
}

const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
    fontSize: 20,
    fontFamily: 'Avenir',
    color: 'tomato',
  },
});
export default AppText;
