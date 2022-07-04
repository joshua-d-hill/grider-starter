import React from 'react'
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native'

const HomeScreen = ({ navigation }) => {

  return <View>
    <Text style={styles.text}>Greetings, adventurer!</Text>
    <Button 
      title="Components Bag"
      onPress={() => navigation.navigate('Components')}
    />
    <Button
      title="Party List"
      onPress={() => navigation.navigate('List')}
    />
        <Button
      title="Realms of Algathara"
      onPress={() => navigation.navigate('Image')}
    />
  </View>
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    padding: 5
  },
});

export default HomeScreen;
