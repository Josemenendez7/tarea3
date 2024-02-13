/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Inicio from './pantallas/Inicio';
import Detalle from './pantallas/Verificacion';
import login from './pantallas/Login';
import Registro from './pantallas/Registro';
import Pantallainicio from './pantallas/Pantallainicio';




const Stack = createNativeStackNavigator();


const App = () => {
  return( 
    <NavigationContainer>

     <Stack.Navigator>
      <Stack.Screen 
      name='Inicio' 
      component={Inicio} 
      options={{
        title: 'Bienvenido',
      }}
      />


      <Stack.Screen 
      name='Login'
      component={login}
      options= {({route}) =>{
        return {
          title: 'Registro'
        };
      }}
      />

      <Stack.Screen 
      name='Verificacion'
      component={Detalle}
      options= {({route}) =>{
        return {
          title: 'verifica tu cuenta'
        };
      }}
      />

      <Stack.Screen 
      name='Registro'
      component={Registro}
      options= {({route}) =>{
        return {
          title: 'Llena tus datos'
        };
      }}
      />



    <Stack.Screen 
      name='Pantallainicio'
      component={Pantallainicio}
      options= {({route}) =>{
        return {
          title: 'Opciones'
          
        };
      }}
      />

    

    </Stack.Navigator>
     </NavigationContainer> 
  );
};

export default App;
