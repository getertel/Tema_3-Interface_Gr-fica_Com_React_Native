import React from 'react';
import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text } from 'react-native';

const Lista = () => {
  return (
	<SafeAreaView style={styles.safecontainer}>
	  <ScrollView style={styles.containerScrollView}>
		<Text style={styles.text}>
		  Chega chora de emoçao.
					Dentro do seu???.
					chega chora todo dia de alegria.
					Dentro do seu?.
					Complete a frase...
					Resposta correta = "Coração".
					sit amet pretium.
					Praesent odio nisl, semper vitae purus a, elementum ultrices arcu.
					Praesent blandit lectus et aliquet posuere.
					Nulla dictum, nisi id feugiat suscipit, mi sem maximus turpis,
					vel aliquet massa ex sit amet sem.
					Sed ullamcorper enim non elit vestibulum, feugiat euismod elit
					consectetur. In et pulvinar eros.
		</Text>
	  </ScrollView>
	</SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safecontainer: {
	flex: 1,
	paddingTop: StatusBar.currentHeight,
  },
  containerScrollView: {
	backgroundColor: 'blue',
	marginHorizontal: 20,
  },
  text: {
	fontSize: 26,
  },
});

export default Lista;