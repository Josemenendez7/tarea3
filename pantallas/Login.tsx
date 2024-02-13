import React, { useState } from 'react';
import { View, Button, Text, TextInput, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";

function Login({ navigation, route }) {
  
    const params = route.params;

    const handleOnPress = ()=> {
        navigation.navigate('Verificacion');
    };

  return (
    <View style={styles.container}>
        <Image source={require('../imagenes/Starbucks.png')}style={styles.logo} />
      <Text style={styles.title}>Ingresa con tu correo</Text>

      <TextInput
        style={styles.input}
        placeholder="Correo"

      />

      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        secureTextEntry
     
      />

 
    <Button title="Continuar" onPress={handleOnPress}/>
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 16,
    marginBottom: 10,
    color: '#3F8912',
  },
  input: {
    height: 40,
    width: '100%',
    borderColor: '#6FE726',
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
  },
  logo: {
    width: 100, // Ajusta el ancho de la imagen 
    height: 100, // Ajusta la altura de la imagen 
    marginBottom: 20,
  },
  button: {
    backgroundColor: 'blue',
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

export default Login;
