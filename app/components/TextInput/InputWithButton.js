import React from 'react';
import { View, Text, TouchableOpacity, TextInput, KeyboardAvoidingView } from 'react-native';

import styles from './styles';


const InputWithButton = props => {
  const {
    editable = false,
    baseCurrency,
    targetCurrency,
    onBasePress,
    onTargetPress,
    onBaseValueChange,
    baseValue,
    targetValue,
  } = props;

  let inputValue;
  if (targetValue) {
    inputValue = `${targetValue}`;
  }
  if (baseValue) {
    inputValue = `${baseValue}`;
  }

  const containerStyle = [styles.container];
  if (!editable) {
    containerStyle.push(styles.containerDisabled);
  }
  return (
    <View style={containerStyle}>
      {baseCurrency && (
        <TouchableOpacity
          testID="baseSelect"
          style={styles.buttonContainer}
          onPress={onBasePress}
        >
          <Text testID="baseSelectText" tyle={styles.buttontext}>{baseCurrency}</Text>
        </TouchableOpacity>
      )}
      {targetCurrency && (
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={onTargetPress}
          testID="targetSelect"
        >
          <Text testID="targetSelectText" style={styles.buttontext}>{targetCurrency}</Text>
        </TouchableOpacity>
      )}
      <View style={styles.border} />
      <TextInput
        style={styles.input}
        onChangeText={text => {
          if (baseCurrency) {
            onBaseValueChange(text);
          }
        }}
        editable={editable}
        value={inputValue}
        {...props}
        testID={`${baseCurrency ? 'base': 'target'}Value`}
      />
    </View>
  );
};

export default InputWithButton;
