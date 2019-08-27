import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
  buttonContainer: {
    height: 40,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 11,
    // backgroundColor: 'red',
    // paddingHorizontal: 8,
  },
  button: {
    height: 40,
    width: '100%',
    backgroundColor: '$white',
    padding: 5,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    paddingHorizontal: 8,
  },
  buttonText: {
    fontSize: 18,
    paddingHorizontal: 8,
    fontWeight: '600',
    color: '$primaryBlue',
  }
});
