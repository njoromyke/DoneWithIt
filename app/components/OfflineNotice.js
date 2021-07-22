import React from 'react';

import { StyleSheet, View } from 'react-native';
import colors from '../config/colors';
import AppText from './AppText/AppText';
import Constants from 'expo-constants';
import { useNetInfo } from '@react-native-community/netinfo';
function OfflineNotice() {
  const netInfo = useNetInfo();
  if (netInfo.type !== 'unknown' && netInfo.isInternetReachable === false)
    return (
      <View style={styles.container}>
        <AppText style={styles.text}> No Internet Connection </AppText>
      </View>
    );

  return null;
}

export default OfflineNotice;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    height: 50,
    width: '100%',
    position: 'absolute',
    zIndex: 1,
    top: Constants.statusBarHeight,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: colors.white,
  },
});
