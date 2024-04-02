import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

function Settings (props) {
  return (
    <TouchableOpacity  onPress={()=>props.navigation.navigate("ViewSensors")} style={styles.container}>
      <Text style={styles.text}>list Sensors screen</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    textAlign: 'center',
  },
});

export default Settings;
