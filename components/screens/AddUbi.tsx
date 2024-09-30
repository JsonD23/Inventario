import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet } from 'react-native';
import axios from 'axios';

const AddUbi = ({ navigation }) => {
  const [edificio, setEdificio] = useState('');
  const [departamento, setDepartamento] = useState('');
  const [area, setArea] = useState('');

  const agregarUbicacion = async () => {
    if (!edificio || !departamento || !area) {
      Alert.alert('Error', 'Llena todos los campos');
      return;
    }

    try {
      const response = await axios.post(
        'http://localhost/Inventario1.0/codeigniter3-rest-controller-main/index.php/Api/Ubicacion',
        {
          edificio,
          departamento,
          area,
        }
      );

      if (response.data.status === 'ok') {
        Alert.alert('Éxito', 'Ubicación agregada correctamente');
        
        // Limpiar los campos
        setEdificio('');
        setDepartamento('');
        setArea('');
        
        // Navegar de regreso o realizar otra acción
        navigation.goBack();
      } else {
        Alert.alert('Error', 'No se pudo agregar la ubicación');
      }
    } catch (error) {
      console.error(error);
      Alert.alert('Error', 'Ocurrió un error al agregar la ubicación');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Agregar Ubicación</Text>

      <Text>Edificio:</Text>
      <TextInput
        value={edificio}
        onChangeText={setEdificio}
        placeholder="Ingrese el edificio"
        style={styles.input}
      />

      <Text>Departamento:</Text>
      <TextInput
        value={departamento}
        onChangeText={setDepartamento}
        placeholder="Ingrese el departamento"
        style={styles.input}
      />

      <Text>Área:</Text>
      <TextInput
        value={area}
        onChangeText={setArea}
        placeholder="Ingrese el área"
        style={styles.input}
      />

      <Button title="Agregar Ubicación" onPress={agregarUbicacion} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 20,
    padding: 10,
  },
});

export default AddUbi;
