// app/_layout.tsx
import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';

export default function RootLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#222',
          height: 70,
          paddingBottom: 10,
        },
        tabBarActiveTintColor: '#FFD700',
        tabBarInactiveTintColor: '#aaa',
        tabBarLabelStyle: { fontSize: 14, fontWeight: 'bold' },
      }}
    >
      <Tabs.Screen
        name="Inicio"
        options={{
          title: 'Início',
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons
              name={focused ? 'home' : 'home-outline'}
              color={color}
              size={size + 4}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="Sobre1"
        options={{
          title: 'Sobre',
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons
              name={focused ? 'information-circle' : 'information-circle-outline'}
              color={color}
              size={size + 4}
            />
          ),
        }}
      />
    </Tabs>
  );
}
