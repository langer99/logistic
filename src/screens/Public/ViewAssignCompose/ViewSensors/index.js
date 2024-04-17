import React from 'react';
import { View, TouchableOpacity, StyleSheet,Text } from 'react-native';
import { useSelector } from 'react-redux';

function About() {
  const SensorSeleced = useSelector((state) => state.sensorReducer);


  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={()=>console.log("heernew",SensorSeleced)} style={styles.text}>

        <Text>View Sensors screen</Text>
      </TouchableOpacity>
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

export default About;
