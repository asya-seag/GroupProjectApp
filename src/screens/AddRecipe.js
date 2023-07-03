import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput } from 'react-native';

export default function AddRecipe({ navigation }) {
  const [cocktails, setCocktails] = useState([]);
  const [cocktailName, setCocktailName] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');

  const addCocktail = () => {
    const newCocktail = {
      cocktailName,
      ingredients,
      instructions,
    };
    setCocktails([...cocktails, newCocktail]);
    setCocktailName('');
    setIngredients('');
    setInstructions('');
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.title}>Let's save some recipes!</Text>
        <Image source={require('../../assets/images/logo.png')} style={styles.logo} />
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

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Instructions"
          value={instructions}
          onChangeText={setInstructions}
        />
      </View>

      <TouchableOpacity style={styles.addButton} onPress={addCocktail}>
        <Text style={styles.buttonText}>Add to My Recipes</Text>
      </TouchableOpacity>

      {cocktails.length > 0 && (
        <View style={styles.noteContainer}>
          {cocktails.map((cocktail, index) => (
            <View key={index} style={[styles.noteContainer, { backgroundColor: '#FFCD29' }]}>
              <Text style={styles.noteText}>Cocktail name: {cocktail.cocktailName}</Text>
              <Text style={styles.noteText}>Ingredients: {cocktail.ingredients}</Text>
              <Text style={styles.noteText}>Instructions: {cocktail.instructions}</Text>
            </View>
          ))}
        </View>
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#FFFFFF', 
    paddingHorizontal: 20,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 40,
    marginBottom: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    flex: 1,
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
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
  noteContainer: {
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    backgroundColor: '#FFCD29',
  },
  noteText: {
    marginVertical: 5,
    fontSize: 16,
    fontWeight: 'normal',
    color: 'black',
  },
});








