import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Platform, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function BestIn2023 ({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Best cocktails for summer 2023</Text>
        </View>

        <View style={styles.logoContainer}>
          <Image source={require('../../assets/images/logo.png')} style={styles.logo} />
        </View>
      </View>
    </View>
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
  headerContainer: {
    flexDirection: 'row', 
    alignItems: 'center',
    marginBottom: 20,
  },
  titleContainer: {
    flex: 1, 
    marginRight: 10, 
  }, 
  title: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  logoContainer: {
    marginTop: 20,
    marginBottom: 20,
    alignItems: 'flex-end',
  },
  logo: {
    width: 80,
    height: 80,
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
