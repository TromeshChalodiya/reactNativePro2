import React, { useState } from 'react';
import { TextInput, StyleSheet } from 'react-native';

const Input = (props) => {
  return <TextInput {...props} style={{ ...styles.input, ...props.style }} />;
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    paddingVertical: 5,
    borderRadius: 4,
    borderColor: 'grey',
    borderBottomWidth: 2.5,
    marginVertical: 30,
    borderWidth: 2,
    fontSize: 20,
  },
});

export default Input;
