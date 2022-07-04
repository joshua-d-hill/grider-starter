import React from 'react'
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native'

const HomeScreen = (props) => {
  console.log(props);
  return <View>
    <Text style={styles.text}>Greetings, adventurer!</Text>
    <Button 
      title="Components Bag"
      onPress={() => console.log('Components bag button pressed')}
    />
    <TouchableOpacity onPress={() => console.log('List pressed')}>
      <Text>Go to List Demo</Text>
    </TouchableOpacity>
  </View>
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    padding: 5
  },
});

export default HomeScreen;
