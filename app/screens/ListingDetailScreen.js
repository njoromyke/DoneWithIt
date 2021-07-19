import React from 'react';
import { Image, View, StyleSheet } from 'react-native';
import AppText from '../components/AppText/AppText';
import ListItem from '../components/ListItem';
import colors from '../config/colors';

const ListingDetailScreen = () => {
  return (
    <View>
      <Image style={styles.image} source={require('../assets/jacket.jpg')} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}> Red jacket for sale </AppText>
        <AppText style={styles.price}> $100 </AppText>
        <View style={styles.userContainer}>
          <ListItem
            image={require('../assets/mosh.jpg')}
            title='Michael'
            subTitle='5 Listings'
          />
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 300,
  },
  detailsContainer: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: '500',
  },
  price: {
    color: colors.secondary,
    fontWeight: 'bold',
    fontSize: 20,
    marginVertical: 10,
  },
  userContainer: {
    marginVertical: 40,
  },
});

export default ListingDetailScreen;
