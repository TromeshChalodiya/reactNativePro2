import { StyleSheet } from 'react-native';
import colors from '../constants/color';

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
    width: 300,
    maxWidth: '90%',
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around',
    paddingHorizontal: 15,
  },
  resetButton: {
    paddingVertical: 1,
    paddingHorizontal: 15,
    borderRadius: 4,
    borderColor: colors.primary,
    borderWidth: 2,
    marginRight: 60,
  },
  confirmButton: {
    paddingVertical: 1,
    paddingHorizontal: 10,
    borderRadius: 4,
    backgroundColor: colors.primary,
    borderColor: colors.primary,
    borderWidth: 2,
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
