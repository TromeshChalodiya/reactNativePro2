import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const NumberContainer = (props) => {
  return (
    <View style={styles.confirmedOutput}>
      <Text style={styles.textColor}>{props.children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  confirmedOutput: {
    marginTop: 20,
    padding: 12,
    backgroundColor: '#a0937d',
    borderColor: '#a0937d',
    borderWidth: 1,
    marginVertical: 10,
    paddingVertical: 15,
    paddingHorizontal: 30,
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

export default NumberContainer;
