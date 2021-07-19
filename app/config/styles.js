import { Platform } from 'react-native';
import colors from './colors';

export default {
  colors,
  text: {
    color: colors.dark,
    fontSize: 18,
    textAlign: 'center',
    fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenir',
  },
};
