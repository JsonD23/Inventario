import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const Inventario = ({ navigation }) => {
  const navegarAPermisos = () => {

    navigation.navigate('Permisos'); 
  };

  const navegarAEscanear = () => {

    navigation.navigate('Escanear'); 
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Inventario</Text>
      <View style={styles.buttonContainer}>
        <Button title="Permisos" onPress={navegarAPermisos} />
        <Button title="Escanear" onPress={navegarAEscanear} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  buttonContainer: {
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
});

export default Inventario;
