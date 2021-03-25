import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { configure, getStorybookUI } from "@storybook/react-native";
import Button  from './stories/Button';
import Card from './stories/Card';

// configure(() => {
//   // Since require.context doesn't exist in metro bundler world, we have to
//   // manually import files ending in *.stories.js
//   require("./stories");
// }, module);

// export default getStorybookUI();

export default function App() {
  return (
    <View style={styles.container}>
      <Button title="asdssssss"  onPress={() => alert(1)}/>
      <Card />
      <Text>Open up App.tsx to start working on your app!</Text>
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
});
