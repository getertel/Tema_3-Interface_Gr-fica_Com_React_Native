import { StyleSheet, Text, View } from 'react-native';

export default function Exercicio02() {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>👋 Olá! Este é o Exercício 02</Text>
      <Text style={styles.subtexto}>Aqui você poderá testar seus primeiros códigos.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e6f7ff',
    padding: 20,
  },
  texto: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#005580',
    marginBottom: 10,
  },
  subtexto: {
    fontSize: 16,
    color: '#333',
  },
});
