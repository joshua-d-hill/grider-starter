import React from "react";
import { View, Text, Button, StyleSheet, TouchableOpacity } from "react-native";

const TrialScreen = () => {
  return (
    <View>
      <Text style={styles.text}>Hi there!</Text>
      <Button title='Go to Components Demo' />
      
      <TouchableOpacity>
        <Text>Go to List Demo</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({});

export default TrialScreen;