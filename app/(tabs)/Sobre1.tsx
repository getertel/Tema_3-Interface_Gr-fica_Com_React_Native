// app/(tabs)/Sobre1.tsx
import { useRouter } from 'expo-router';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function Sobre1Screen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>ℹ️ Tela Sobre</Text>
      <Text style={styles.subtitle}>Aqui vão as informações do app.</Text>

      <Button
        title="Ir para Início"
        onPress={() => router.push('/Inicio')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 20, fontWeight: 'bold' },
  subtitle: { fontSize: 16, marginTop: 10 },
});
