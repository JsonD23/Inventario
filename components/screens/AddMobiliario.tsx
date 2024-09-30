import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet } from 'react-native';
import axios from 'axios';

const obtenerFechaActual = () => {
  const fecha = new Date();
  const año = fecha.getFullYear();
  const mes = String(fecha.getMonth() + 1).padStart(2, '0');
  const dia = String(fecha.getDate()).padStart(2, '0');
  const horas = String(fecha.getHours()).padStart(2, '0');
  const minutos = String(fecha.getMinutes()).padStart(2, '0');
  const segundos = String(fecha.getSeconds()).padStart(2, '0');

  return `${año}-${mes}-${dia} ${horas}:${minutos}:${segundos}`;
};

const AgregarMobiliario = ({ navigation }) => {
  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [tipo, setTipo] = useState('');
  const [estado, setEstado] = useState('');
  const [activo, setActivo] = useState('');
  const [codigo, setCodigo] = useState('');

  const agregarMobiliario = async () => {
    if (!nombre || !descripcion || !tipo || !estado || !activo || !codigo) {
      Alert.alert('Error', 'LLene todos los campos ');
      return;
    }

    // Obtener la fecha actual formateada
    const fechaRegistro = obtenerFechaActual();

    try {
      const response = await axios.post(
        'http://localhost/Inventario1.0/codeigniter3-rest-controller-main/index.php/Api/Mobiliario', 
        {
          nombre,
          descripcion,
          tipo,
          estado,
          fecha_registro: fechaRegistro,
          activo,
          codigo,
        }
      );

      if (response.data.status === 'ok') {
        Alert.alert('Éxito', 'Mobiliario agregado correctamente');
        
        // Limpiar los campos
        setNombre('');
        setDescripcion('');
        setTipo('');
        setEstado('');
        setActivo('');
        setCodigo('');
        
        // Navegar de regreso al menú o realizar otra acción
        navigation.goBack();
      } else {
        Alert.alert('Error', 'No se pudo agregar el mobiliario');
      }
    } catch (error) {
      console.error(error);
      Alert.alert('Error', 'Ocurrió un error al agregar el mobiliario');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Agregar Mobiliario</Text>

      <Text>Nombre:</Text>
      <TextInput
        value={nombre}
        onChangeText={setNombre}
        placeholder="Ingrese el nombre"
        style={styles.input}
      />

      <Text>Descripción:</Text>
      <TextInput
        value={descripcion}
        onChangeText={setDescripcion}
        placeholder="Ingrese la descripción"
        style={styles.input}
      />

      <Text>Tipo:</Text>
      <TextInput
        value={tipo}
        onChangeText={setTipo}
        placeholder="Ingrese el tipo"
        style={styles.input}
      />

      <Text>Estado:</Text>
      <TextInput
        value={estado}
        onChangeText={setEstado}
        placeholder="Ingrese el estado"
        style={styles.input}
      />

      <Text>Activo:</Text>
      <TextInput
        value={activo}
        onChangeText={setActivo}
        placeholder="Ingrese si está activo"
        style={styles.input}
      />

      <Text>Código:</Text>
      <TextInput
        value={codigo}
        onChangeText={setCodigo}
        placeholder="Ingrese el código"
        style={styles.input}
      />

      <Button title="Agregar Mobiliario" onPress={agregarMobiliario} />
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

export default AgregarMobiliario;
