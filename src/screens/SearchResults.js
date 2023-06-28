import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
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
    <View>
      {results.map((drink) => (
        <View key={drink.idDrink}>
          <Text>{drink.strDrink}</Text>
          <Text>{drink.strInstructions}</Text>
          <Text>{drink.strIngredient1}</Text>
          <Text>{drink.strIngredient2}</Text>
          <Text>{drink.strIngredient3}</Text>
          <Text>{drink.strIngredient4}</Text>
          {/* Add more Text components for additional ingredients */}
        </View>
      ))}
    </View>
  );
};

export default ResultsScreen;
