import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Platform, Image } from 'react-native';
import Sorry from '../screens/Sorry';

export default function HomePage({ navigation }) {
  const handleSorryPress = () => {
    navigation.navigate('Sorry');
  };

  const handleAboutPress = () => {
    navigation.navigate('About');
  }; 

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={require('../../assets/images/logo.png')}  style={styles.image} />
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.header}>Are you over 18?</Text>
        <View style={styles.buttonWrapper}>
          <TouchableOpacity style={[styles.buttonStyle, { backgroundColor: '#FFCD29' }]} onPress={() => navigation.navigate('About')}>
            <View style={styles.buttonBackground}>
              <Text style={[styles.buttonText, { color: 'black' }]}>Yes</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonWrapper}>
          <TouchableOpacity style={[styles.buttonStyle, { backgroundColor: '#FFCD29' }]} onPress={() => navigation.navigate('Sorry')}>
            <View style={styles.buttonBackground}>
              <Text style={[styles.buttonText, { color: 'black' }]}>No</Text>
            </View>
          </TouchableOpacity>
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
    marginVertical: 10,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  imageContainer: {
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 10,
  },
  image: {
    width: 150,
    height: 150,
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonWrapper: {
    marginBottom: 10,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
      },
      android: {
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
  buttonBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
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
