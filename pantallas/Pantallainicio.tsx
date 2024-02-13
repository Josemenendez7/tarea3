import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function Pantallainicio ({ route }) {
  const { nombre, correo, numero,} = route.params;

  return (
    <View style={styles.container}>
     
      <View style={styles.userInfo}>
        <Text style={styles.userName}>{nombre}</Text>
        <Text style={styles.userEmail}>{correo}</Text>
        <Text style={styles.userCell}>{numero}</Text>
        
      </View>

  
      <View style={styles.additionalText}>
        <Text>Saved Address</Text>
        <Text>Smart Login</Text>
        <Text>Language</Text>
        <Text>FAQ</Text>
        <Text>Help</Text>
        <Text>Privacy Policy</Text>
        <Text>Terms of Service</Text>
        <Text>Contact Us</Text>
      </View>

  
      <Text style={styles.logOut}>Log Out</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d2b48c', // Color café claro
    padding: 20,
  },
  userInfo: {
    alignItems: 'center',
    marginTop: 30,
  },
  userName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  userEmail: {
    fontSize: 16,
    color: '#555',
  },
  userCell: {
    fontSize: 16,
    color: '#555',
  },
  additionalText: {
    marginTop: 30,
  },
  logOut: {
    marginTop: 'auto', 
    fontSize: 18,
    fontWeight: 'bold',
     
  },
});

export default Pantallainicio;