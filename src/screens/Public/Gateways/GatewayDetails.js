
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const GatewayDetails = ({ route }) => {
  const { gateway } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Name: {gateway.name}</Text>
      <Text style={styles.text}>Type: {gateway.type}</Text>
      <Text style={styles.text}>IP Address: {gateway.address_ip}</Text>
      <Text style={styles.text}>MAC Address: {gateway.address_mac}</Text>
      {/* Affichez d'autres détails de la passerelle si nécessaire */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 18,
    marginBottom: 10,
  },
});

export default GatewayDetails;
