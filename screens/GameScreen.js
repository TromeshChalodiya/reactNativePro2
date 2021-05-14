import React, { useState, useRef, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Alert,
  Dimensions,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import NumberContainer from '../components/NumberContainer';
import Card from '../components/Card';
import colors from '../constants/color';
import MainButton from '../components/MainButton';

const generateRandomBetween = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
};

const GameScreen = (props) => {
  const initalGuess = generateRandomBetween(1, 100, props.userChoice);
  const [currentGuess, setCurrentGuess] = useState(initalGuess);
  const [pastGuess, setPastGuess] = useState([initalGuess]);

  const currentLow = useRef(1);
  const currentHigh = useRef(100);

  const { userChoice, onGameOver } = props;

  useEffect(() => {
    if (currentGuess === props.userChoice) {
      onGameOver(pastGuess.length);
    }
  }, [currentGuess, userChoice, onGameOver]);

  const nextGuessHandler = (direction) => {
    if (
      (direction === 'lower' && currentGuess < userChoice) ||
      (direction === 'greater' && currentGuess > userChoice)
    ) {
      Alert.alert("Don't lie!", 'You know that this is wrong...', [
        { text: 'Sorry!', style: 'cancel' },
      ]);
    }

    if (direction === 'lower') {
      currentHigh.current = currentGuess;
    } else {
      currentLow.current = currentGuess;
    }

    const nextNumber = generateRandomBetween(
      currentLow.current,
      currentHigh.current,
      currentGuess
    );

    setCurrentGuess(nextNumber);
    setPastGuess((curPastGuess) => [nextNumber, ...curPastGuess]);
  };

  return (
    <View style={styles.screen}>
      <Text>Opponent's Guess</Text>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card style={styles.buttonContainer}>
        <MainButton onPress={nextGuessHandler.bind(this, 'lower')}>
          <Ionicons name='caret-down' size={24} />
          LOWER
        </MainButton>
        <MainButton onPress={nextGuessHandler.bind(this, 'greater')}>
          GREATER
          <Ionicons name='caret-up' size={24} />
        </MainButton>
      </Card>
      <View style={styles.list}>
        <ScrollView>
          {pastGuess.map((guess, index) => (
            <View key={guess} style={styles.textList}>
              <Text style={styles.textStyle}>#{pastGuess.length - index}</Text>
              <Text style={styles.textStyle}>{guess}</Text>
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    padding: 10,
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
    width: 300,
    maxWidth: '80%',
  },
  lowerButton: {
    paddingVertical: 1,
    paddingHorizontal: 15,
    borderRadius: 4,
    borderColor: colors.negative,
    backgroundColor: colors.negative,
    borderWidth: 2,
    marginRight: 60,
  },
  greaterButton: {
    paddingVertical: 1,
    paddingHorizontal: 10,
    borderRadius: 4,
    backgroundColor: colors.primary,
    borderColor: colors.primary,
    borderWidth: 2,
  },
  list: {
    width: Dimensions.get('window').width > 350 ? '60%' : '80%',
    marginVertical: 10,
  },
  textList: {
    padding: 15,
    borderColor: 'black',
    borderWidth: 1,
    backgroundColor: 'white',
    borderRadius: 5,
    marginVertical: 5,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  textStyle: {
    fontFamily: 'open-sans-bold',
    fontSize: 15,
  },
});

export default GameScreen;
