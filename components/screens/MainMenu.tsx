import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Text, Appbar } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import InventarioScreen from '../screens/InventarioScreen';
import ArticulosScreen from '../screens/ArticulosScreen';
import UbicacionesScreen from '../screens/ArticulosScreen';
import ReportesScreen from '../screens/ReporteScreen';

const MainMenu = () => {
  const navigation = useNavigation(); // Para manejar la navegación

  return (
    <View style={styles.container}>
      {/* AppBar para el título de la pantalla */}
      <Appbar.Header>
        <Appbar.Content title="Menú Principal" />
      </Appbar.Header>

      <View style={styles.menuContainer}>
        <Text style={styles.title}>Elige una opción</Text>

        {/* Botones para las opciones del menú */}
        <Button
          mode="contained"
          style={styles.button}
          onPress={() => navigation.navigate('Inventario')}
        >
          Inventario
        </Button>

        <Button
          mode="contained"
          style={styles.button}
          onPress={() => navigation.navigate('Artículos')}
        >
          Artículos
        </Button>

        <Button
          mode="contained"
          style={styles.button}
          onPress={() => navigation.navigate('Ubicaciones')}
        >
          Ubicaciones
        </Button>

        <Button
          mode="contained"
          style={styles.button}
          onPress={() => navigation.navigate('Reportes')}
        >
          Reportes
        </Button>
      </View>
    </View>
  );
};

// Estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  menuContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
  button: {
    width: '100%',
    marginVertical: 10,
  },
});

export default MainMenu;
