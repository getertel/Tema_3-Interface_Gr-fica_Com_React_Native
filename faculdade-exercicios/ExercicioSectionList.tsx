import React from 'react';
import { Platform, SectionList, StatusBar, StyleSheet, Text, View } from 'react-native';

const DADOS = [
  { titulo: 'Eletrônicos', data: ['TV', 'Caixa de Som', 'Toca-discos Retrô'] },
  { titulo: 'Vestuário', data: ['Camisas', 'Camisetas', 'Casacos'] },
  { titulo: 'Livros', data: ['Ficção', 'Suspense', 'Policiais'] },
  {titulo: 'Chega chora Hinds', data: ['De alegria', 'De emoção', 'No seu coração']},
];

const Item = ({ titulo }: { titulo: string }) => (
  <View style={styles.item}>
    <Text style={styles.titulo}>{titulo}</Text>
  </View>
);

export default function ExercicioSectionList() {
  return (
    <View style={styles.container}>
      <SectionList
        sections={DADOS}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => <Item titulo={item} />}
        renderSectionHeader={({ section: { titulo } }) => (
          <Text style={styles.header}>{titulo}</Text>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? (StatusBar.currentHeight ?? 0) : 0,
    marginHorizontal: 16,
    backgroundColor: '#fff',
  },
  item: {
    backgroundColor: '#fffccc',
    padding: 20,
    marginVertical: 8,
  },
  header: {
    fontSize: 28,
    backgroundColor: '#fff',
    fontWeight: 'bold',
    marginTop: 16,
  },
  titulo: {
    fontSize: 18,
  },
});
