import React, { useState } from 'react';
import {
  View,
  Text,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from 'react-native';

import Card from '../components/Card';
import Input from '../components/Input';
import styles from './styles';
import NumberContainer from '../components/NumberContainer';

/* TouchableWithoutFeedback take the Keyboard
 API as a arugument and dissmiss the keyboard
*/

const StartGameScreen = (props) => {
  const [enteredValue, setEnteredValue] = useState('');
  const [hasConfirmed, setHasConfirmed] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState();

  const numInputHandler = (inputValue) => {
    setEnteredValue(inputValue.replace(/[^0-9]/g, ''));
  };

  const resetEnterValue = () => {
    setEnteredValue('');
    setHasConfirmed(false);
  };

  const confirmInputHandler = () => {
    const chosenNumber = parseInt(enteredValue);
    if (isNaN(chosenNumber) || chosenNumber <= 0) {
      Alert.alert(
        'Invalid Number!',
        'Number has to be a number between 1 and 99',
        [{ text: 'Okay', style: 'destructive', onPress: resetEnterValue }]
      );
      return;
    }
    setHasConfirmed(true);
    setSelectedNumber(chosenNumber);
    setEnteredValue('');
    Keyboard.dismiss();
  };

  let confirmedOutput;

  if (hasConfirmed) {
    confirmedOutput = (
      <Card style={styles.summuryContainer}>
        <Text>You selected</Text>
        <NumberContainer>{selectedNumber}</NumberContainer>
        <View style={styles.startGame}>
          <Button
            title='START GAME'
            color='white'
            onPress={() => props.onStartGame(selectedNumber)}
          />
        </View>
      </Card>
    );
  }

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.screen}>
        <Text style={styles.title}>Start a New Game!</Text>
        <Card style={styles.inputContainer}>
          <Text>Select a Number</Text>
          <Input
            style={styles.input}
            maxLength={2}
            blurOnSubmit
            autoCapitalize='none'
            autoCompleteType='off'
            autoCorrect={false}
            keyboardType='number-pad'
            onChangeText={numInputHandler}
            value={enteredValue}
          />
          <View style={styles.buttonContainer}>
            <View style={styles.resetButton}>
              <Button title='Reset' onPress={resetEnterValue} />
            </View>
            <View style={styles.confirmButton}>
              <Button
                title='Confirm'
                color='white'
                onPress={confirmInputHandler}
              />
            </View>
          </View>
        </Card>
        <View style={styles.outPutContainer}>{confirmedOutput}</View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default StartGameScreen;
