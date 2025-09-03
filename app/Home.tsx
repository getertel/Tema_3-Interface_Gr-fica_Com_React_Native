import * as React from 'react';
import { Button, Text, View } from 'react-native';

export default function HomeScreen({ navigation }: any) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>🏠 Home Screen</Text>
      <Button title="Ir para About" onPress={() => navigation.navigate('About')} />
    </View>
  );
}
