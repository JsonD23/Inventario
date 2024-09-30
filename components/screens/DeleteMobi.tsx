import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import axios from 'axios';
import AwesomeAlert from 'react-native-awesome-alerts';

const DeleteMobi = ({ navigation }) => {
  const [id, setId] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [alertType, setAlertType] = useState('success'); // 'success' or 'error'

  const eliminarMobiliario = async () => {
    if (!id) {
      setAlertMessage('Por favor ingrese un ID válido');
      setAlertType('error');
      setShowAlert(true);
      return;
    }

    try {
      const response = await axios.delete(
        `http://localhost/Inventario1.0/codeigniter3-rest-controller-main/index.php/Api/Mobiliario/${id}`
      );

      // Verifica si la respuesta tiene el campo 'status' y si es 'ok'
      if (response.data && response.data.status === 'ok') {
        setAlertMessage(`Mobiliario con ID: ${id} eliminado correctamente`);
        setAlertType('success');
        setId('');
        navigation.goBack();
      } 
    } catch (error) {
      console.error(error);
      setAlertMessage('Ocurrió un error al eliminar el mobiliario');
      setAlertType('error');
    } finally {
      setShowAlert(true);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Eliminar Mobiliario</Text>

      <Text>ID del Mobiliario:</Text>
      <TextInput
        value={id}
        onChangeText={setId}
        placeholder="Ingrese el ID del mobiliario"
        style={styles.input}
        keyboardType="numeric"
      />

      <Button title="Eliminar Mobiliario" onPress={eliminarMobiliario} />

      <AwesomeAlert
        show={showAlert}
        title={alertType === 'success' ? 'Se eliminó correctamente' : 'Error'}
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

export default DeleteMobi;
