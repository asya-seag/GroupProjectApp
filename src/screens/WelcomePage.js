import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Platform } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function HomePage({ navigation }) {
  return (
    <LinearGradient
      colors={['#6DECB9', '#EEF5B2']}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 1}}
      style={styles.container}
    >
      <Text style={styles.header}>Welcome to Summer-Tails</Text>
      <Text style={styles.textStyle}>Are you 18+?</Text>

      <View style={styles.buttonWrapper}>
        <TouchableOpacity style={styles.buttonStyle} onPress={() => navigation.navigate('About')}>
          <LinearGradient colors={['#3FC5F0', '#3FC5F0', '#42DEE1']} style={styles.gradient}>
            <Text style={styles.buttonText}>YES</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>

      <View style={styles.buttonWrapper}>
        <TouchableOpacity style={styles.buttonStyle} onPress={() => navigation.navigate('Search')}>
          <LinearGradient colors={['#3FC5F0', '#42DEE1']} style={styles.gradient}>
            <Text style={styles.buttonText}>NO</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 20,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonWrapper: {
    marginBottom: 10,
    ...Platform.select({ // Specific properties for each platform
      ios: { // Shadow properties for iOS
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
      },
      android: { // Elevation for Android
        elevation: 5,
      },
    }),
  },
  buttonStyle: {
    width: 250,
    height: 50,
    borderRadius: 10,
    overflow: 'hidden',
  },
  gradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  textStyle: {
    fontSize: 20,
    lineHeight: 21,
    fontWeight: 'normal',
    letterSpacing: 0.25,
    color: 'black',
    marginBottom: 10,
  },
});
