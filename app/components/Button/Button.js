import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

import Styles from './styles';


const Button = props => {
  const { onPress } = props;
  return (
    <View style={Styles.buttonContainer}>
      <TouchableOpacity style={Styles.button} onPress={onPress}>
        <Text style={Styles.buttonText}>CONVERT</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Button;
