import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import axios from 'axios';
import AwesomeAlert from 'react-native-awesome-alerts';

const DeleteUbi = ({ navigation }) => {
  const [id, setId] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [alertType, setAlertType] = useState('success'); 

  const eliminarUbicacion = async () => {
    if (!id) {
      setAlertMessage('Por favor ingrese un ID válido');
      setAlertType('error');
      setShowAlert(true);
      return;
    }

    try {
      const response = await axios.delete(
        `http://localhost/Inventario1.0/codeigniter3-rest-controller-main/index.php/Api/Ubicacion/${id}`
      );

      if (response.data && response.data.status === 'ok') {
        setAlertMessage(`Ubicación con ID: ${id} eliminada correctamente`);
        setAlertType('success');
        setId(''); 
        navigation.goBack(); 
      } else {
        setAlertMessage(`Se eliminó la ubicación con ID: ${id}`);
        setAlertType('success');
      }
    } catch (error) {
      console.error(error);
      setAlertMessage('Ocurrió un error al eliminar la ubicación');
      setAlertType('error');
    } finally {
      setShowAlert(true);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Eliminar Ubicación</Text>

      <Text>ID de la Ubicación:</Text>
      <TextInput
        value={id}
        onChangeText={setId}
        placeholder="Ingrese el ID de la ubicación"
        style={styles.input}
        keyboardType="numeric"
      />

      <Button title="Eliminar Ubicación" onPress={eliminarUbicacion} />

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

export default DeleteUbi;
