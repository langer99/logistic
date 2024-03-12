import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Gateways = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Gateways screen</Text>
    </View>
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

export default Gateways;
