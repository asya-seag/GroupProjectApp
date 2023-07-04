import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomePage from '../screens/WelcomePage';
import About from '../screens/About';
import LoginScreen from '../screens/LoginPage';
import Search from '../screens/Search';
import AlcoholUnitCalculatorScreen from '../screens/AlcUnits';
import AddRecipe from '../screens/AddRecipe';
import SearchResults from '../screens/SearchResults';
import Sorry from '../screens/Sorry';
import NonAlcCocktails from '../screens/NonAlcCocktails';
import Register from '../screens/Register'


const HomePageName = 'Welcome Page';
const AboutName = 'About';
const LoginScreenName = 'Login';
const SearchName = 'Search';
const AlcUnitsName = 'Alcohol Units';
const AddRecipeName = 'Add Recipe';
const SearchResultsName = 'Search Results';
const SorryName='Sorry';
const NonAlcCocktailsName='Non Alcoholic Cocktails';
const RegisterName = 'Register';


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainTabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName={HomePageName}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let rn = route.name;

          if (rn === HomePageName) {
            iconName = focused ? 'home' : 'home-outline';
          } else if (rn === AboutName) {
            iconName = focused ? 'information-circle' : 'information-circle-outline';
          } else if (rn === LoginScreenName) {
            iconName = focused ? 'person-circle' : 'person-circle-outline'
          } else if (rn === SearchName) {
            iconName = focused ? 'search' : 'search-outline';
          } else if (rn === AlcUnitsName) {
            iconName = focused ? 'star' : 'star-outline';
          } else if (rn === AddRecipeName) {
            iconName = focused ? 'add' : 'add-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: '#42DEE1',
        inactiveTintColor: '#FFCD29',
        style: {
          backgroundColor: '#FFFFFF',
          padding: 10,
          height: 70,
        },
        labelStyle: {
          paddingBottom: 10,
          fontSize: 10,
        },
      }}
    >
      <Tab.Screen name={HomePageName} component={HomePage} />
      <Tab.Screen name={AboutName} component={About} />
      <Tab.Screen name={LoginScreenName} component={LoginScreen} />
      <Tab.Screen name={SearchName} component={Search} />
      <Tab.Screen name={AlcUnitsName} component={AlcoholUnitCalculatorScreen} />
      <Tab.Screen name={AddRecipeName} component={AddRecipe} />
    </Tab.Navigator>
  );
};

export default function MainContainer() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="MainTabNavigator" component={MainTabNavigator} options={{ headerShown: false }} />
        <Stack.Screen name={RegisterName} component={Register} options={{ headerShown: false }} />
        <Stack.Screen name={SearchResultsName} component={SearchResults} options={{ headerShown: false }} />
        <Stack.Screen name={SorryName} component={Sorry} options={{ headerShown: false }} />
        <Stack.Screen name={NonAlcCocktailsName} component={NonAlcCocktails} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
