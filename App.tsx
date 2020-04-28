import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TestDb } from './components/testDb';

export default function App() {
  return (
    <View style={styles.container}>
      <TestDb />
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
});
