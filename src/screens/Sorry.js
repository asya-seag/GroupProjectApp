import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Platform, Image } from 'react-native';


export default function Sorry({ navigation }) {
    const handleSorryPress = () => {
        navigation.navigate('Sorry');
      };
    return (

    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={require('../../assets/images/Sorry.png')}  style={styles.image} />
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.title}>Opps!</Text>
        <Text style={styles.header}>We're sorry, but you haven't reached the age of 18 yet. How about exploring our delightful assortment of non-alcoholic Mocktails instead?</Text>
        <View style={styles.buttonWrapper}>
          <TouchableOpacity style={[styles.buttonStyle, { backgroundColor: '#42DEE1' }]} onPress={() => navigation.navigate('Non Alcoholic Cocktails')}>
            <View style={styles.buttonBackground}>
              <Text style={[styles.buttonText, { color: 'black' }]}>Press for mocktails</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  header: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
    marginBottom: 15,
    textAlignVertical: 'center', 
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
    marginBottom: 15,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    paddingHorizontal: 20, 
  },
  imageContainer: {
    marginTop: 120,
    marginLeft:-20
  },
  image: {
    width: 250,
    height: 250,
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -160,
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
    colour: '#42DEE1',
  },
  buttonText: {
    fontSize: 16,
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

