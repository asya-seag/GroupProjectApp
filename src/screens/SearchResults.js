import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, ImageBackground } from 'react-native';
import axios from 'axios';
const ResultsScreen = ({ route }) => {
  const [results, setResults] = useState([]);
  useEffect(() => {
    const fetchResults = async () => {
      try {
        const response = await axios.get(
          `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${route.params.searchQuery}`
        );
        const { drinks } = response.data;
        setResults(drinks);
      } catch (error) {
        console.error('Error searching drinks:', error);
      }
    };
    fetchResults();
  }, [route.params.searchQuery]);
  return (
    <ImageBackground
      source={require('../../assets/images/cocktail2.jpg')}
      style={styles.backgroundImage}
    >
    <ScrollView contentContainerStyle={styles.container}>
      {results.map((drink) => (
        <View key={drink.idDrink} style={styles.drinkContainer}>
          <Text style={styles.drinkName}>{drink.strDrink}</Text>
          <View style={styles.infoContainer}>
            <View style={styles.squareContainer}>
              <Text style={styles.instructionstitle}>Instructions</Text>
              <Text style={styles.instructions}>{drink.strInstructions}</Text>
            </View>
          <View style={styles.squareContainer}>
            <Text style={styles.ingredienttitle}>Ingredients</Text>
            <Text style={styles.ingredient}>{drink.strIngredient1}</Text>
            <Text style={styles.ingredient}>{drink.strIngredient2}</Text>
            <Text style={styles.ingredient}>{drink.strIngredient3}</Text>
            <Text style={styles.ingredient}>{drink.strIngredient4}</Text>
          </View>
          {/* Add more Text components for additional ingredients */}
        </View>
        </View>
      ))}
    </ScrollView>
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  infoContainer:{
    flexDirection:'column',
    justifyContent:'space-between'
  },
  squareContainer:{
    flex:1,
    backgroundColor:'white',
    padding:16,
    marginBottom:16,
    borderRadius:50,
  },
  backgroundImage:{
    flex:1,
    resizeMode:'cover',
    opacity:0.8,
  },
  container:{
    flexGrow:1,
    paddingVertical: 20,
    paddingHorizontal:16,
    marginTop: 40
  },
  drinkContainer:{
    marginBottom:16
  },
  drinkName:{
    fontSize:40,
    fontWeight:'bold',
    marginBottom:8,
    color:'#42DEE1'
  },
  instructionstitle:{
    fontSize:20,
    fontWeight:'bold',
    color: '#FFCD29',
    marginBottom:10
  },
  ingredienttitle:{
    fontSize:20,
    fontWeight:'bold',
    color: '#FFCD29',
    marginBottom:10
  },
  ingredient:{
    marginBottom:8,
    fontSize:18,
    color:'#42DEE1',
  },
  instructions:{
    marginBottom:8,
    fontSize:16,
    color:'#42DEE1',
  },
}
)
export default ResultsScreen;