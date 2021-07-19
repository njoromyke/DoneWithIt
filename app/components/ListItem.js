import React from 'react';
import { Image, StyleSheet, TouchableHighlight, View } from 'react-native';
import colors from '../config/colors';
import AppText from './AppText/AppText';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import Swipeable from 'react-native-gesture-handler/Swipeable';

const ListItem = ({
  title,
  subTitle,
  IconComponent,
  image,
  onPress,
  renderRightActions,
}) => {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
        <View style={styles.container}>
          {IconComponent}
          {image && <Image source={image} style={styles.image} />}
          <View style={styles.detailsContainer}>
            <AppText numberOfLines={1} style={styles.title}>
              {title}{' '}
            </AppText>
            {subTitle && (
              <AppText numberOfLines={2} style={styles.subTitle}>
                {subTitle}{' '}
              </AppText>
            )}
          </View>
          <MaterialCommunityIcons
            color={colors.medium}
            name='chevron-right'
            size={25}
          />
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 15,
    backgroundColor: colors.white,
  },
  detailsContainer: {
    marginLeft: 10,
    justifyContent: 'center',
    flex: 1,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  title: {
    fontWeight: '500',
  },
  subTitle: {
    color: colors.medium,
  },
});

export default ListItem;
