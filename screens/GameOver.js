import React from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';

const GameOver = (props) => {
  return (
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
      <Text>Number of rounds: {props.roundsNumber}</Text>
      <Text>Number was: {props.userNumber}</Text>
      <Button title='New Game' onPress={props.onRestart} />
    </View>
  );
};

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
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 2,
    overflow: 'hidden',
    borderColor: 'black',
    marginVertical: 20,
  },
  image: {
    width: '100%',
    height: '100%',
  },
});

export default GameOver;
