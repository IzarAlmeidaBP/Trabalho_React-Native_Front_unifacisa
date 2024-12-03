import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import TelaInicio from '../pages/TelaInicio/InicioTela';
import LoginTela from '../pages/LoginTela/TelaLogin';
import ProductScreen from '../pages/ProductScreens/ProductScreen';
import Cart from '../pages/Cart/Cart';
import Chat from '../pages/Chat/Chat';
import TelaCadastro from '../pages/TelaCadastro/TelaCadastro';
import User from '../pages/User/User';

const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="TelaInicio"
        component={TelaInicio}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="LoginTela"
        component={LoginTela}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ProductScreen"
        component={ProductScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Cart"
        component={Cart}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Chat"
        component={Chat}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="TelaCadastro"
        component={TelaCadastro}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="User"
        component={User}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
