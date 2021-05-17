import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
  ScrollView,
  KeyboardAvoidingView,
  Dimensions,
  Platform,
} from 'react-native';

import Card from '../components/Card';
import Input from '../components/Input';
import styles from './styles';
import NumberContainer from '../components/NumberContainer';
import MainButton from '../components/MainButton';

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

  /*
  
  Below logic can work as well when you pass state to the button style as
  style={{width: buttonWidth}} the only diffrence here is that when phone
  change the orientation then componentDidUpdate method fire which
  is over useEffect method and then it will reset the orientation so 
  we will not running into button style issue for our app but 
  it can work for other Dynamic functionality as well!

  const [buttonWidth, setButtonWidth] = useState(
    Dimensions.get('window').width / 3.5
  );

  useEffect(() => {
    const updateLayout = () => {
      setButtonWidth(Dimensions.get('window').width / 3.5);
    };

    Dimensions.addEventListener('change', updateLayout);

    return () => {
      Dimensions.removeEventListener('change', updateLayout);
    };
  });

  */

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
        <MainButton onPress={() => props.onStartGame(selectedNumber)}>
          START GAME
        </MainButton>
      </Card>
    );
  }

  return (
    <ScrollView>
      <KeyboardAvoidingView behavior='position'>
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
                    color={Platform.OS === 'ios' ? '#1477D7' : 'red'}
                    onPress={confirmInputHandler}
                  />
                </View>
              </View>
            </Card>
            <View style={styles.outPutContainer}>{confirmedOutput}</View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

export default StartGameScreen;
