import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Platform, Image } from 'react-native';


export default function Sorry({ navigation }) {
    const handleSorryPress = () => {
        navigation.navigate('Sorry');
      };
    return (

    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={require('../../assets/images/SorrySnail.png')}  style={styles.image} />
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.header}>Opps!</Text>
        <Text style={styles.header}>We're sorry. Please come back when you reach 18 years old.</Text>
        <View style={styles.buttonWrapper}>
          <TouchableOpacity style={[styles.buttonStyle, { backgroundColor: '#42DEE1' }]} onPress={() => navigation.navigate('Welcome Page')}>
            <View style={styles.buttonBackground}>
              <Text style={[styles.buttonText, { color: 'black' }]}>Have a look at our selection of best non-alcoholic cocktails!</Text>
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
    backgroundColor: '#EEF5B2',
    paddingHorizontal: 20, 
  },
  imageContainer: {
    marginTop: 70,
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
    marginTop: -80,
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

