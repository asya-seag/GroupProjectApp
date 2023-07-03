import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Platform, Image } from 'react-native';
import Sorry from '../screens/Sorry';

export default function About({ navigation }) {

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={require('../../assets/images/logo.png')} style={styles.logo} />
      </View>
      <View style={styles.panelContainer}>
        <View style={styles.panel}>
          <Text style={styles.aboutText}>
            Welcome to Summer Tail - the ultimate cocktail app for refreshing recipes and responsible drinking.
            {'\n'}
            Discover delightful cocktails, store your favorite recipes, and track your alcohol consumption.
            {'\n'}
            Let Summer Tail be your guide to a vibrant and responsible drinking experience.
            {'\n'}
            Cheers to summer!
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  logoContainer: {
    alignItems: 'center',
    marginTop: 40,
    marginBottom: 20,
  },
  logo: {
    width: 150,
    height: 150,
  },
  panelContainer: {
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  panel: {
    backgroundColor: '#FFCD29',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  aboutText: {
    marginVertical: 5,
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
});

