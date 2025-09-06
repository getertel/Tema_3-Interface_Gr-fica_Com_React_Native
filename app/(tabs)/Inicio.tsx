// app/(tabs)/Inicio.tsx
import { useRouter } from 'expo-router';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function InicioScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>📱 Tela Início</Text>
      <Text style={styles.subtitle}>Bem-vindo ao app!</Text>

      <Button
        title="Ir para Sobre"
        onPress={() => router.push('/Sobre1')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 20, fontWeight: 'bold' },
  subtitle: { fontSize: 16, marginTop: 10 },
});
