import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Platform, Image, ScrollView } from 'react-native';




export default function NonAlcCocktails({ navigation }) {
  return (
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View>
          <Text style={styles.pageHeader}>Our selection of great non-alcoholic cocktails!</Text>
          <TouchableOpacity style={[styles.buttonStyle, { backgroundColor: '#42DEE1' }]} onPress={() => navigation.navigate('Welcome Page')}>
            <View style={styles.buttonBackground}>
              <Text style={[styles.buttonText, { color: 'black' }]}>Back to Welcome Page!</Text>
            </View>
          </TouchableOpacity>
          <Text style={styles.header}>1. Mango Mule</Text>
          <Image source={require('../../assets/images/nonalc/MangoMule.jpg')} style={styles.image} />
          <Text style={styles.text}>
            Yields 1 serving.{'\n'}
            {'\n'}
            Ingredients{'\n'}
            {'\u2022'} 4 to 5 cucumber slices{'\n'}
            {'\u2022'} 1 ounce honey syrup{'\n'}
            {'\u2022'} 1.5 ounces mango puree{'\n'}
            {'\u2022'} 1.5 ounces fresh lime juice{'\n'}
            {'\u2022'} 1.5 ounces ginger beer{'\n'}
            {'\u2022'} Ice{'\n'}
            {'\n'}
            Instructions{'\n'}
            {'\u2022'} Muddle the cucumber and honey syrup into the bottom of a cocktail shaker.{'\n'}
            {'\u2022'} Add the mango puree and lime juice to the mix, then shake with ice.{'\n'}
            {'\u2022'} Pour the liquid into a copper mug for the iconic touch of a Moscow mule.{'\n'}
            {'\u2022'} Sprinkle in ginger beer and stir.
          </Text>

          
          <Text style={styles.header}>2. Cranberry Basil Sangria</Text>
          <Image source={require('../../assets/images/nonalc/CranberryBasil.jpg')} style={styles.image} />
          <Text style={styles.text}>
            Yields 1 serving.{'\n'}
            {'\n'}
            Ingredients{'\n'}
            {'\u2022'} 4 to 5 cucumber slices{'\n'}
            {'\u2022'} 1 ounce honey syrup{'\n'}
            {'\u2022'} 1.5 ounces mango puree{'\n'}
            {'\u2022'} 1.5 ounces fresh lime juice{'\n'}
            {'\u2022'} 1.5 ounces ginger beer{'\n'}
            {'\u2022'} Ice{'\n'}
            {'\n'}
            Instructions{'\n'}
            {'\u2022'} Muddle the cucumber and honey syrup into the bottom of a cocktail shaker.{'\n'}
            {'\u2022'} Add the mango puree and lime juice to the mix, then shake with ice.{'\n'}
            {'\u2022'} Pour the liquid into a copper mug for the iconic touch of a Moscow mule.{'\n'}
            {'\u2022'} Sprinkle in ginger beer and stir.
          </Text>
        </View>
      </ScrollView>
  );
}
const styles = StyleSheet.create({
buttonStyle: {
  width: 250,
  height: 50,
  borderRadius: 10,
  overflow: 'hidden',
  justifyContent: 'center',
  alignItems: 'center',
  alignSelf: 'center', 
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
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollContainer: {
    flexGrow: 1,
    alignItems: 'center',
    paddingVertical: 20,
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 20,
  },
  pageHeader: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 20,
    marginTop:70,
  },
  image: {
    width: 250,
    height: 250,
    borderRadius: 30,
    marginRight: 20,
    marginLeft: 20,
    marginBottom: 20,
    marginTop: 20,
    alignSelf: 'center', 
  },
  text: {
    fontSize: 18,
    lineHeight: 21,
    fontWeight: 'normal',
    letterSpacing: 0.25,
    color: 'black',
    marginBottom: 15,
    marginTop: 15,
    marginRight: 15,
    marginLeft: 20,
  },

});
