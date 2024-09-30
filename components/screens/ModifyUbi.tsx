import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import axios from 'axios';
import AwesomeAlert from 'react-native-awesome-alerts';

const ModifyLocation = ({ navigation }) => {
  const [id, setId] = useState('');
  const [edificio, setEdificio] = useState('');
  const [departamento, setDepartamento] = useState('');
  const [area, setArea] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [alertType, setAlertType] = useState('success'); // 'success' or 'error'

  const obtenerUbicacion = async (id: string) => {
    try {
      const response = await axios.get(
        `http://localhost/Inventario1.0/codeigniter3-rest-controller-main/index.php/Api/Ubicacion/${id}`
      );
      if (response.data && response.data.status === 'ok') {
        const { edificio, departamento, area } = response.data.data;
        setEdificio(edificio);
        setDepartamento(departamento);
        setArea(area);
      } else {
        setAlertMessage('Ubicación no encontrada');
        setAlertType('error');
        setShowAlert(true);
      }
    } catch (error) {
      console.error(error);
      setAlertMessage('Ocurrió un error al obtener la ubicación');
      setAlertType('error');
      setShowAlert(true);
    }
  };

  const modificarUbicacion = async () => {
    if (!id || !edificio || !departamento || !area) {
      setAlertMessage('Por favor llene todos los campos');
      setAlertType('error');
      setShowAlert(true);
      return;
    }

    try {
      const response = await axios.put(
        `http://localhost/Inventario1.0/codeigniter3-rest-controller-main/index.php/Api/Ubicacion/${id}`,
        {
          edificio,
          departamento,
          area,
        }
      );

      if (response.data && response.data.status === 'ok') {
        setAlertMessage(`Ubicación con ID: ${id} modificada correctamente`);
        setAlertType('success');
        navigation.goBack(); // Navegar de regreso al menú
      } 
    } catch (error) {
      console.error(error);
      setAlertMessage('Ocurrió un error al modificar la ubicación');
      setAlertType('error');
    } finally {
      setShowAlert(true);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Modificar Ubicación</Text>

      <Text>ID de la Ubicación:</Text>
      <TextInput
        value={id}
        onChangeText={setId}
        placeholder="Ingrese el ID de la ubicación"
        style={styles.input}
        keyboardType="numeric"
        onBlur={() => id && obtenerUbicacion(id)} // Obtener ubicación al perder el foco
      />

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

      <Button title="Modificar Ubicación" onPress={modificarUbicacion} />

      <AwesomeAlert
        show={showAlert}
        title={alertType === 'success' ? 'Éxito' : 'Error'}
        message={alertMessage}
        closeOnTouchOutside={true}
        closeOnHardwareBackPress={false}
        showCancelButton={false}
        showConfirmButton={true}
        confirmText="Aceptar"
        confirmButtonColor={alertType === 'success' ? '#1B5E20' : '#D32F2F'}
        onConfirmPressed={() => {
          setShowAlert(false);
        }}
      />
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

export default ModifyLocation;
