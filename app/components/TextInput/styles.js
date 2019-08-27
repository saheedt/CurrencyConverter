import EStyleSheet from 'react-native-extended-stylesheet';
import { StyleSheet } from 'react-native';
const INPUT_HEIGHT = 48;
const BORDER_RADIUS = 4;
export default EStyleSheet.create({
  container: {
    height: INPUT_HEIGHT,
    width: '90%',
    backgroundColor: '$white',
    alignItems: 'center',
    flexDirection: 'row',
    marginVertical: 11,
    borderRadius: BORDER_RADIUS
  },
  buttonContainer: {
    // width: '30%',
    height: INPUT_HEIGHT,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '$white',
    borderTopLeftRadius: BORDER_RADIUS,
    borderBottomLeftRadius: BORDER_RADIUS,
    // borderRightWidth: 1,
    // borderRightColor: '$lightgrey'
  },
  input: {
    // width: '70%',
    height: INPUT_HEIGHT,
    flex: 1,
    fontSize: 18,
    paddingHorizontal: 8,
    color: '$inputText'
  },
  buttontext: {
    fontWeight: '600',
    fontSize: 20,
    paddingHorizontal: 16,
    color: '$primaryBlue',
  },
  border: {
    height: INPUT_HEIGHT,
    width: StyleSheet.hairlineWidth,
    backgroundColor: '$border',
  },
  containerDisabled: {
    backgroundColor: '$disabledGrey',
  }
});
