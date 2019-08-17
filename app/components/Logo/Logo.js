import React from 'react';
import { View, ImageBackground, Image, Text } from 'react-native';

import Styles from './styles';

const Logo = () => (
  <View style={Styles.container}>
    <ImageBackground
      style={Styles.containerImage}
      resizeMode="contain"
      source={require('./images/background.png')}>
      <Image source={require('./images/logo.png')} style={Styles.logo} resizeMode="contain" />
    </ImageBackground>
    <Text style={Styles.text}>Currency Converter</Text>
  </View>
);

export default Logo;
