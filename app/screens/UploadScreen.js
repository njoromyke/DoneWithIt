import React from 'react';
import { Modal, StyleSheet, View } from 'react-native';
import AppText from '../components/AppText/AppText';
import ProgressBar from 'react-native-progress/Bar';
import colors from '../config/colors';
import LottieView from 'lottie-react-native';
const UploadScreen = ({ progress = 0, visible = false, onDone }) => {
  return (
    <Modal visible={visible}>
      <View style={styles.container}>
        {progress < 1 ? (
          <ProgressBar color={colors.primary} width={200} progress={progress} />
        ) : (
          <LottieView
            autoPlay={true}
            loop={false}
            source={require('../assets/animations/done.json')}
            style={styles.animation}
            onAnimationFinish={onDone}
          />
        )}
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  animation: {
    width: 150,
  },
});

export default UploadScreen;
