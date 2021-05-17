import { StyleSheet } from 'react-native';
import colors from '../constants/color';
import { Dimensions, Platform } from 'react-native';

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 50,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
    fontFamily: 'open-sans-bold',
  },
  inputContainer: {
    width: '80%',
    minWidth: 300,
    maxWidth: '95%',
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around',
    paddingHorizontal: 15,
  },
  resetButton: {
    width: Dimensions.get('window').width / 3.5,
    paddingVertical: 1,
    marginRight: 60,
  },
  confirmButton: {
    width: Dimensions.get('window').width / 3.5,
    paddingVertical: 1,
    borderRadius: 4,
    borderWidth: 0,
  },
  input: {
    width: 60,
    textAlign: 'center',
  },
  outPutContainer: {
    paddingTop: 40,
  },
  startGame: {
    paddingVertical: 2,
    paddingHorizontal: 10,
    borderRadius: 4,
    backgroundColor: colors.primary,
    borderColor: colors.primary,
    borderWidth: 2,
    marginTop: 15,
  },
  summuryContainer: {
    width: 300,
    maxWidth: '85%',
    alignItems: 'center',
    marginTop: 20,
  },
});

export default styles;
