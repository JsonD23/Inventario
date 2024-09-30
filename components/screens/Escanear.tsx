import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, ActivityIndicator } from 'react-native';

const Escanear = () => {
  const [isScanning, setIsScanning] = useState(false);
  const [result, setResult] = useState('');

  const manejarEscaneo = () => {
    setIsScanning(true);
    setResult(''); // Limpiar resultado anterior

    // Simular un escaneo con un retraso
    setTimeout(() => {
      const simulatedResult = 'D5, TICS, laboratorio 211'; // Resultado simulado
      setResult(simulatedResult);
      setIsScanning(false);
    }, 3000); // Simular un escaneo que tarda 3 segundos
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Escanear</Text>

      <View style={styles.scanner}>
        {isScanning ? (
          <ActivityIndicator size="large" color="#0000ff" />
        ) : (
          <Text style={styles.scannerText}>Escanea un código QR</Text>
        )}
      </View>

      <Button title="Iniciar Escaneo" onPress={manejarEscaneo} />

      {result ? (
        <View style={styles.resultContainer}>
          <Text style={styles.resultTitle}>Resultado del Escaneo:</Text>
          <Text style={styles.resultText}>{result}</Text>
        </View>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  scanner: {
    width: '100%',
    height: 200,
    borderColor: '#ccc',
    borderWidth: 2,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  scannerText: {
    fontSize: 18,
    color: '#999',
  },
  resultContainer: {
    marginTop: 20,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    backgroundColor: '#f9f9f9',
    width: '100%',
  },
  resultTitle: {
    fontWeight: 'bold',
  },
  resultText: {
    fontSize: 16,
  },
});

export default Escanear;
