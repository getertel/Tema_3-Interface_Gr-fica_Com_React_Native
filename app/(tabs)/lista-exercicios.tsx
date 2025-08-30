import { useRouter } from 'expo-router';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function ListaExercicios() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>📚 Lista de Exercícios</Text>

      <TouchableOpacity
        style={styles.botao}
        onPress={() => router.push('/exercicio01')}
      >
        <Text style={styles.textoBotao}>Exercício 01</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.botao}
        onPress={() => router.push('/exercicio02')}
      >
        <Text style={styles.textoBotao}>Exercício 02</Text>
      </TouchableOpacity>

      <TouchableOpacity
  style={styles.botao}
  onPress={() => router.push('/exercicioTextoAninhado')}
>
  <Text style={styles.textoBotao}>Exercício Texto Aninhado</Text>
</TouchableOpacity>

<TouchableOpacity
  style={styles.botao}
  onPress={() => router.push('/exercicioVirtualizedList')}
>
  <Text style={styles.textoBotao}>Exercício VirtualizedList</Text>
</TouchableOpacity>

<TouchableOpacity
  style={styles.botao}
  onPress={() => router.push('/exercicioSectionList')}
>
  <Text style={styles.textoBotao}>Exercício SectionList</Text>
</TouchableOpacity>

<TouchableOpacity
  style={styles.botao}
  onPress={() => router.push('/ExercicioFlatList')}
>
  <Text style={styles.textoBotao}>Exercício FlatList</Text>
</TouchableOpacity>



    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  botao: {
    backgroundColor: '#007BFF',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginVertical: 8,
    width: 200,
    alignItems: 'center',
  },
  textoBotao: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
