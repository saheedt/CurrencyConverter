import React from 'react';

import Home from './screens/Home';

import EStyleSheet from 'react-native-extended-stylesheet';

EStyleSheet.build({
  $primaryBlue: '#4F6D7A',
  $white: '#FFFFFF',
  $lightgrey: '#d3d3d3',
  $border: '#E2E2E2',
  $inputText: '#797979',
  $disabledGrey: '#F0F0F0',
});

export default () => <Home />;
