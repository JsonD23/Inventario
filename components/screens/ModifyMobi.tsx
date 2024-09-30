import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import axios from 'axios';
import AwesomeAlert from 'react-native-awesome-alerts';

const ModifyMobi = ({ navigation }) => {
  const [id, setId] = useState('');
  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [tipo, setTipo] = useState('');
  const [estado, setEstado] = useState('');
  const [activo, setActivo] = useState('');
  const [codigo, setCodigo] = useState('');


  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [alertType, setAlertType] = useState('success'); 
  

  const obtenerMobi = async (id: string) => {
    try {
      const response = await axios.get(
        `http://localhost/Inventario1.0/codeigniter3-rest-controller-main/index.php/Api/Mobiliario/${id}`
      );
      if (response.data && response.data.status === 'ok') {
        const { nombre, descripcion, tipo,estado,activo,codigo } = response.data.data;
        setNombre(nombre);
        setDescripcion(descripcion);
        setTipo(tipo);
        setEstado(estado);
        setActivo(activo);
        setCodigo(codigo);
      } else {
        setAlertMessage('Id de mobiliario no encontrado ');
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

  const modificarMobi = async () => {
    if (!id || !nombre || !descripcion || !tipo|| !estado|| !activo || !codigo) {
      setAlertMessage('Por favor llene todos los campos');
      setAlertType('error');
      setShowAlert(true);
      return;
    }

    try {
      const response = await axios.put(
        `http://localhost/Inventario1.0/codeigniter3-rest-controller-main/index.php/Api/Mobiliario/${id}`,
        {
          nombre,
          descripcion,
          tipo,
          estado,
          activo,
          codigo
        }
      );

      if (response.data && response.data.status === 'ok') {
        setAlertMessage(`Mobiliario  con ID: ${id} modificada correctamente`);
        setAlertType('success');
        navigation.goBack(); 
      } 
    } catch (error) {
      console.error(error);
      setAlertMessage('Ocurrió un error al modificar mobiliario ');
      setAlertType('error');
    } finally {
      setShowAlert(true);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Modificar Mobiliario </Text>

      <Text>ID de Mobiliario :</Text>
      <TextInput
        value={id}
        onChangeText={setId}
        placeholder="Ingrese el ID de mobiliario"
        style={styles.input}
        keyboardType="numeric"
        onBlur={() => id && obtenerMobi(id)} 
      />

      <Text>Nombre</Text>
      <TextInput
        value={nombre}
        onChangeText={setNombre }
        placeholder="Ingrese el nombre "
        style={styles.input}
      />

      <Text>Descripcion</Text>
      <TextInput
        value={descripcion}
        onChangeText={setDescripcion}
        placeholder="Ingrese la descripcion"
        style={styles.input}
      />

      <Text>Tipo</Text>
      <TextInput
        value={tipo}
        onChangeText={setTipo}
        placeholder="Ingrese el tipo "
        style={styles.input}
      />
 <Text>Estado</Text>
      <TextInput
        value={estado}
        onChangeText={setEstado}
        placeholder="Ingrese el estado "
        style={styles.input}
      />


 <Text>Activo</Text>
      <TextInput
        value={activo}
        onChangeText={setActivo}
        placeholder="Ingrese el activo  "
        style={styles.input}
      />

 <Text>Codigo</Text>
      <TextInput
        value={codigo}
        onChangeText={setCodigo}
        placeholder="Ingrese el codigo   "
        style={styles.input}
      />

      <Button title="Modificar Ubicación" onPress={modificarMobi} />

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

export default ModifyMobi;

