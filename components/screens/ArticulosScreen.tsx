import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, Button, Alert } from 'react-native';
import axios from 'axios';

const MobiliarioList = ({ navigation }) => {
  const [mobiliario, setMobiliario] = useState([]);

  useEffect(() => {
    obtenerMobiliario();
  }, []);

  const obtenerMobiliario = async () => {
    try {
      const response = await axios.get(
        'http://localhost/Inventario1.0/codeigniter3-rest-controller-main/index.php/Api/Mobiliario'
      );
      console.log(response.data); 
      setMobiliario(response.data); 
    } catch (error) {
      console.error(error);
      Alert.alert('Error', 'Ocurrió un error al obtener el mobiliario');
    }
  };

  const eliminarMobiliario = async (id_mobiliario) => {
    try {
      const response = await axios.delete(
        `http://localhost/Inventario1.0/codeigniter3-rest-controller-main/index.php/Api/Mobiliario/${id_mobiliario}`
      );
      if (response.data.status === 'ok') {
        Alert.alert('Éxito', 'Mobiliario eliminado correctamente');
        obtenerMobiliario(); 
      } else {
        Alert.alert('Error', 'No se pudo eliminar el mobiliario');
      }
    } catch (error) {
      console.error(error);
      Alert.alert('Error', 'Ocurrió un error al eliminar el mobiliario');
    }
  };

  const renderItem = ({ item }) => (
    <View style={styles.row}>
      <Text style={styles.cell}>{item.nombre}</Text>
      <Text style={styles.cell}>{item.descripcion}</Text>
      <Text style={styles.cell}>{item.tipo}</Text>
      <Text style={styles.cell}>{item.estado}</Text>
      <Button title="Eliminar" onPress={() => eliminarMobiliario(item.id_mobiliario)} />
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Reportes de Mobiliario </Text>

      <View style={styles.tableHeader}>
        <Text style={styles.headerCell}>Nombre</Text>
        <Text style={styles.headerCell}>Descripción</Text>
        <Text style={styles.headerCell}>Tipo</Text>
        <Text style={styles.headerCell}>Estado</Text>
        <Text style={styles.headerCell}>Acciones</Text>
      </View>

      <FlatList
        data={mobiliario}
        keyExtractor={(item) =>
          item.id_mobiliario ? item.id_mobiliario.toString() : Math.random().toString()
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

export default MobiliarioList;
