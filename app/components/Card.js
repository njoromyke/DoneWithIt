import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import colors from '../config/colors';
import AppText from './AppText/AppText';

const Card = ({ title, subTitle, image }) => {
  return (
    <View style={styles.card}>
      <Image style={styles.image} source={image} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}> {title} </AppText>
        <AppText style={styles.subTitle}> {subTitle} </AppText>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: colors.white,
    marginBottom: 20,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 200,
  },
  detailsContainer: {
    padding: 20,
  },
  title: {
    marginBottom: 7,
  },
  subTitle: {
    color: colors.secondary,
    fontWeight: 'bold',
  },
});
export default Card;
