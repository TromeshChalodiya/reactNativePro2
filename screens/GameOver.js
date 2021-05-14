import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  Dimensions,
} from 'react-native';

import colors from '../constants/color';
import MainButton from '../components/MainButton';

const GameOver = (props) => {
  return (
    <ScrollView>
      <View style={styles.screen}>
        <Text style={styles.title}>The Game is over!</Text>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={require('../assets/photo-1573335553610-a871dfd95bf5.webp')}
            /*
          when we are fetching image from web directly it will not load immediately
          but it will fade as we set time in fadeDuration and that will cache the
          image so next time when page will redner it will pull the image from the 
          cache and page will rednder fast

          fadeDuration={300}
          source={{
            uri: 'https://pbs.twimg.com/profile_images/438756755397300224/kp8rmJes.jpeg',
          }}
          */
          />
        </View>
        <Text
          style={styles.outputDecoration}
        >{`Your phone needed ${props.roundsNumber} rounds to guess the number ${props.userNumber}`}</Text>
        <MainButton onPress={props.onRestart}>New Game</MainButton>
      </View>
    </ScrollView>
  );
};

let width = Dimensions.get('window').width * 0.7;
let height = Dimensions.get('window').height;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 100,
  },
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 16,
    marginBottom: 10,
  },
  imageContainer: {
    width: width * 0.7,
    height: width * 0.7,
    borderRadius: (width * 0.7) / 2,
    borderWidth: 2,
    overflow: 'hidden',
    borderColor: 'black',
    marginVertical: height / 20,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  outputDecoration: {
    fontSize: height < 400 ? 16 : 20,
    paddingHorizontal: 10,
    textAlign: 'center',
    marginVertical: 20,
  },
  newGame: {
    paddingVertical: 2,
    paddingHorizontal: 10,
    borderRadius: 4,
    backgroundColor: colors.primary,
    borderColor: colors.primary,
    borderWidth: 2,
    marginTop: 15,
  },
});

export default GameOver;
