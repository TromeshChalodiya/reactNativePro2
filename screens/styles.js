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
  },
  inputContainer: {
    width: 300,
    maxWidth: '80%',
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
  confirmedOutput: {
    padding: 12,
    backgroundColor: '#a0937d',
    borderColor: '#a0937d',
    borderWidth: 1,
    marginVertical: 20,
    paddingVertical: 10,
    borderRadius: 4,
    shadowColor: '#a0937d',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowRadius: 6,
    shadowOpacity: 0.26,
  },
  textColor: {
    color: 'white',
    fontSize: 19,
  },
});

export default styles;
