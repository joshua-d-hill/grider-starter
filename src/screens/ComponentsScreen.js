import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ComponentsScreen = () => {
/*
  const greeting = 'Hail, traveler!'
  const stats = <Text style={styles.componentStyle}>Health: 120hp</Text>

  return <View> 
    <Text style={styles.textStyle}>Bag of component holding</Text>
    <Text style={styles.componentStyle}>{greeting}</Text>
    <Text style={styles.componentStyle}>No components at present...</Text>
    {stats}
  </View>
*/

const name = 'Joshua H'

return <View>
  <Text style={styles.textStyle}>Getting started with React Native!</Text>
  <Text style={styles.textStyle2}>My name is {name}</Text>
</View>
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 45
  },
  textStyle2: {
    fontSize: 20
  },
  componentStyle: {
    paddingTop: 15,
    paddingLeft: 15
  }
});

export default ComponentsScreen;