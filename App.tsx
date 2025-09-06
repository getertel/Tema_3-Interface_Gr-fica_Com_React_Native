import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import * as React from 'react';

// Importa as telas
import InicioScreen from './screens/Inicio';
import Sobre1Screen from './screens/Sobre1';

// Tipagem das rotas
export type RootTabParamList = {
  Inicio: undefined;
  Sobre1: undefined;
};

const Tab = createBottomTabNavigator<RootTabParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: { backgroundColor: '#eee', height: 60 }, // 👈 força a barra aparecer
        }}
      >
        <Tab.Screen name="Inicio" component={InicioScreen} />
        <Tab.Screen name="Sobre1" component={Sobre1Screen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
