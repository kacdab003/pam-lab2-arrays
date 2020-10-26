import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const array = [];
  let sum = 0;
  for (let i = 0; i < 10; i++) {
    array[i] = Number(Math.random() * 100);
    sum += array[i];
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Tablica</Text>
      <Text style={styles.text}>{array.map((i) => `${i.toFixed(2)}; `)}</Text>
      <Text>Minimalna</Text>
      <Text>{Math.min(...array).toFixed(2)}</Text>
      <Text>Maksymalna</Text>
      <Text>{Math.max(...array).toFixed(2)}</Text>
      <Text>Średnia</Text>
      <Text>{(sum / 10).toFixed(2)}</Text>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    textAlign: 'center',
  },
});
