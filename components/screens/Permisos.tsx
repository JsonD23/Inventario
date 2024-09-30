import React, { useState } from 'react';
import { View, Text, Button, CheckBox, StyleSheet } from 'react-native';
import AwesomeAlert from 'react-native-awesome-alerts';

const Permisos = ({ navigation }) => {
  const [camaraAceptada, setCamaraAceptada] = useState(false);
  const [datosAceptados, setDatosAceptados] = useState(false);
  const [microfonoAceptado, setMicrofonoAceptado] = useState(false);
  const [ubicacionAceptada, setUbicacionAceptada] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [alertTitle, setAlertTitle] = useState('');

  const manejarAceptar = () => {
    if (camaraAceptada && datosAceptados && microfonoAceptado && ubicacionAceptada) {
      setAlertTitle('Permisos Aceptados');
      setAlertMessage('Has aceptado todos los permisos correctamente.');
      setShowAlert(true);
    } else {
      setAlertTitle('Error');
      setAlertMessage('Debes aceptar todos los permisos.');
      setShowAlert(true);
    }
  };

  const ocultarAlerta = () => {
    setShowAlert(false);
    if (alertTitle === 'Permisos Aceptados') {
      // Navegar de regreso o realizar otra acción
      navigation.goBack();
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Permisos Requeridos</Text>

      <View style={styles.permissionItem}>
        <CheckBox
          value={camaraAceptada}
          onValueChange={setCamaraAceptada}
        />
        <Text style={styles.permissionText}>Permiso para usar la cámara</Text>
      </View>

      <View style={styles.permissionItem}>
        <CheckBox
          value={datosAceptados}
          onValueChange={setDatosAceptados}
        />
        <Text style={styles.permissionText}>Permiso para usar tus datos</Text>
      </View>

      <View style={styles.permissionItem}>
        <CheckBox
          value={microfonoAceptado}
          onValueChange={setMicrofonoAceptado}
        />
        <Text style={styles.permissionText}>Permiso para usar el micrófono</Text>
      </View>

      <View style={styles.permissionItem}>
        <CheckBox
          value={ubicacionAceptada}
          onValueChange={setUbicacionAceptada}
        />
        <Text style={styles.permissionText}>Permiso para acceder a la ubicación</Text>
      </View>

      <Button title="Aceptar" onPress={manejarAceptar} />

      <AwesomeAlert
        show={showAlert}
        showProgress={false}
        title={alertTitle}
        message={alertMessage}
        closeOnTouchOutside={true}
        closeOnHardwareBackPress={false}
        showConfirmButton={true}
        confirmText="OK"
        confirmButtonColor="#DD6B55"
        onConfirmPressed={ocultarAlerta}
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
  permissionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  permissionText: {
    marginLeft: 10,
    fontSize: 16,
  },
});

export default Permisos;
