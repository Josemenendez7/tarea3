import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';

function VerificacionScreen({ navigation }) {
  const [codigo, setCodigo] = useState('');

  const handleVerificacion = () => {
    
    navigation.navigate('Registro');
  };

  return (
    <View style={styles.container}>
  
      <Image source={require('../imagenes/Starbucks.png')} style={styles.backgroundImage} />


      <View style={styles.content}>
        <Text style={styles.title}>Verificación de Código</Text>

        <TextInput
          style={styles.input}
          placeholder="Código"
          keyboardType="numeric"
          onChangeText={(text) => setCodigo(text)}
        />

        <TouchableOpacity style={styles.button} onPress={handleVerificacion}>
          <Text style={styles.buttonText}>Verificar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundImage: {
    ...StyleSheet.absoluteFillObject,
    width: '100%',
    height: '80%',
    resizeMode: 'cover',
    opacity: 0.5, // Ajusta la opacidad 
  },
  content: {
    width: '80%',
    alignItems: 'center',
    marginTop: '-70%',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    color: '#448A19', // Ajusta el color del texto 
  },
  input: {
    height: 40,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
    backgroundColor: '#fff', // Ajusta el color de fondo 
  },
  button: {
    backgroundColor: '#3F8912',
    padding: 10,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default VerificacionScreen;
