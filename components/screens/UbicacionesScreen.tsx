import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, Button, Alert } from 'react-native';
import axios from 'axios';

const UbicacionesList = ({ navigation }) => {
  const [ubicaciones, setUbicaciones] = useState([]);

  useEffect(() => {
    obtenerUbicaciones();
  }, []);

  const obtenerUbicaciones = async () => {
    try {
      const response = await axios.get(
        'http://localhost/Inventario1.0/codeigniter3-rest-controller-main/index.php/Api/Ubicacion'
      );
      console.log(response.data); 
      setUbicaciones(response.data); 
    } catch (error) {
      console.error(error);
      Alert.alert('Error', 'Ocurrió un error al obtener las ubicaciones');
    }
  };

  const eliminarUbicacion = async (id) => {
    try {
      const response = await axios.delete(
        `http://localhost/Inventario1.0/codeigniter3-rest-controller-main/index.php/Api/Ubicacion/${id}`
      );
      if (response.data.status === 'ok') {
        Alert.alert('Éxito', 'Ubicación eliminada correctamente');
        obtenerUbicaciones();
      } else {
        Alert.alert('Error', 'No se pudo eliminar la ubicación');
      }
    } catch (error) {
      console.error(error);
      Alert.alert('Error', 'Ocurrió un error al eliminar la ubicación');
    }
  };

  const renderItem = ({ item }) => (
    <View style={styles.row}>
      <Text style={styles.cell}>{item.edificio}</Text>
      <Text style={styles.cell}>{item.departamento}</Text>
      <Text style={styles.cell}>{item.area}</Text>
      <Button title="Eliminar" onPress={() => eliminarUbicacion(item.id)} />
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de Ubicaciones</Text>

      <View style={styles.tableHeader}>
        <Text style={styles.headerCell}>Edificio</Text>
        <Text style={styles.headerCell}>Departamento</Text>
        <Text style={styles.headerCell}>Área</Text>
        <Text style={styles.headerCell}>Acciones</Text>
      </View>

      <FlatList
        data={ubicaciones}
        keyExtractor={(item) =>
          item.id ? item.id.toString() : Math.random().toString()
        } 
        renderItem={renderItem}
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
  tableHeader: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  headerCell: {
    flex: 1,
    fontWeight: 'bold',
  },
  row: {
    flexDirection: 'row',
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingBottom: 10,
  },
  cell: {
    flex: 1,
  },
});

export default UbicacionesList;
