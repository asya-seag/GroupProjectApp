import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput } from 'react-native';

export default function AddRecipe({ navigation }) {
  const [cocktails, setCocktails] = useState([]);
  const [cocktailName, setCocktailName] = useState('');
  const [ingredients, setIngredients] = useState('');

  const addCocktail = () => {
    const newCocktail = {
      cocktailName,
      ingredients,
    };
    setCocktails([...cocktails, newCocktail]);
    setCocktailName('');
    setIngredients('');
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Let's save some recipes!</Text>
        </View>

        <View style={styles.logoContainer}>
          <Image source={require('../../assets/images/logo.png')} style={styles.logo} />
        </View>
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Cocktail name"
          value={cocktailName}
          onChangeText={setCocktailName}
        />
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Ingredients"
          value={ingredients}
          onChangeText={setIngredients}
        />
      </View>

      <TouchableOpacity style={styles.addButton} onPress={addCocktail}>
        <Text style={styles.buttonText}>Add to My Recipes</Text>
      </TouchableOpacity>

      <View style={styles.noteContainer}>
        {cocktails.map((cocktail, index) => (
          <View key={index} style={styles.noteContainer}>
            <Text style={styles.noteText}>Cocktail name: {cocktail.cocktailName}</Text>
            <Text style={styles.noteText}>Ingredients: {cocktail.ingredients}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
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
  inputContainer: {
    width: '100%',
    marginBottom: 15,
  },
  input: {
    width: '95%',
    borderWidth: 2,
    borderColor: '#CCCCCC',
    borderRadius: 5,
    padding: 8,
  },
  addButton: {
    backgroundColor: '#FFCD29',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  noteContainer: {
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  noteText: {
    marginVertical: 5,
    fontSize: 16,
    fontWeight: 'normal',
    color: 'black',
  },
});
