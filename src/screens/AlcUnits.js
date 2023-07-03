import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';

const AlcoholUnitCalculatorScreen = () => {
  const [alcoholVolume, setAlcoholVolume] = useState('');
  const [alcoholPercentage, setAlcoholPercentage] = useState('');
  const [alcoholUnits, setAlcoholUnits] = useState(0);

  const calculateAlcoholUnits = () => {
    const volume = parseFloat(alcoholVolume);
    const percentage = parseFloat(alcoholPercentage);

    if (isNaN(volume) || isNaN(percentage)) {
      setAlcoholUnits("Please enter valid input");
      return;
    }

    const units = (volume * percentage) / 1000;
    setAlcoholUnits(units.toFixed(2));
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.title}>Alcohol Unit Calculator</Text>
        <Image source={require('../../assets/images/logo.png')} style={styles.logo} />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Alcohol Volume (ml)</Text>
        <TextInput
          style={styles.input}
          value={alcoholVolume}
          onChangeText={setAlcoholVolume}
          keyboardType="numeric"
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Alcohol Percentage (%)</Text>
        <TextInput
          style={styles.input}
          value={alcoholPercentage}
          onChangeText={setAlcoholPercentage}
          keyboardType="numeric"
        />
      </View>

      <TouchableOpacity style={styles.addButton} onPress={calculateAlcoholUnits}>
        <Text style={styles.buttonText}>Calculate</Text>
      </TouchableOpacity>

      <Text style={styles.result}>Alcohol Units: {alcoholUnits}</Text>
    </View>
  );
};

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
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    flex: 1,
  },
  logo: {
    width: 80,
    height: 80,
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#CCCCCC',
    borderRadius: 5,
    padding: 10,
    width: 200,
  },
  result: {
    fontSize: 18,
    marginTop: 20,
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
});

export default AlcoholUnitCalculatorScreen;
