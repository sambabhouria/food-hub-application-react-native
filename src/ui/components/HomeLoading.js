import Lottie from 'lottie-react-native';
import React from 'react';
import {StyleSheet, View} from 'react-native';

const HomeLoading = () => {
  return (
    <View style={styles.overlay}>
      <Lottie
        source={require('../../assets/animation/homeLoading.json')}
        autoPlay
        loop
      />
    </View>
  );
};

export default HomeLoading;

const styles = StyleSheet.create({
  overlay: {
    position: 'absolute',
    height: '100%',
    opacity: 0.7,
    width: '80%',
    zIndex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
});
