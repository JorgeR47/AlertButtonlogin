import React, { useRef } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, Animated } from 'react-native';

export default function App() {
  const scaleAnim = useRef(new Animated.Value(1)).current;

  const generateAlert = () => {
    Alert.alert('¿Segur@ que quieres enviar este formulario?', 'Esta acción no se podrá deshacer', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      { text: 'OK', onPress: () => console.log('OK Pressed') },
    ]);
  };

  const handlePressIn = () => {
    Animated.spring(scaleAnim, {
      toValue: 0.9,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(scaleAnim, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View style={styles.container}>
      <Text>Ingresar número de identificación:</Text>

      <TextInput
        style={styles.input}
        placeholder="ejemplo: 0123456789"
        keyboardType="numeric"
      />

      <Animated.View style={{ transform: [{ scale: scaleAnim }] }}>
        <TouchableOpacity
          style={styles.button}
          onPress={generateAlert}
          onPressIn={handlePressIn}
          onPressOut={handlePressOut}
        >
          <Text style={styles.buttonText}>Continuar</Text>
        </TouchableOpacity>
      </Animated.View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#000',
    width: 200,
    margin: 15,
    borderRadius: 10,
    textAlign: 'center', 
  },
  button: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#FF5733',
    width: 100,
    margin: 15,
    alignItems: 'center',
    borderRadius: 30,
    backgroundColor: '#FF5733',
  },
  buttonText: {
    color: '#fff',
  },
});
