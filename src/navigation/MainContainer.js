import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { createStackNavigator } from '@react-navigation/stack';


import HomePage from '../screens/WelcomePage';
import About from '../screens/About';
import Search from '../screens/Search';
import BestIn2023 from '../screens/BestIn2023';
import AddRecipe from '../screens/AddRecipe';
import ResultsScreen from '../screens/SearchResults';

const HomePageName ='Welcome Page';
const AboutName ='About';
const SearchName ='Search';
const BestIn2023Name='Best 2023';
const AddRecipeName = "Add Recipe"
const SearchResultsName= 'Search Results'

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function SearchStack(){
    return(
        <Stack.Navigator>
            <Stack.Screen name={SearchName} component={Search}/>
            <Stack.Screen name={SearchResultsName} component={ResultsScreen} />
        </Stack.Navigator>
    );
}


export default function MainContainer(){
    return(
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName={HomePageName}
                screenOptions={({ route }) => ({
                    tabBarIcon: ({focused, color, size}) => {
                        let iconName;
                        let rn = route.name;
                    
                        if(rn === HomePageName){
                            iconName = focused ? 'home' : 'home-outline';
                        } else if (rn === AboutName){
                            iconName=focused ? 'information-circle':'information-circle-outline';
                        } else if (rn === SearchName){
                            iconName=focused ? 'search':'search-outline';
                        } else if (rn === BestIn2023Name){
                            iconName=focused ? 'star':'star-outline';
                        } else if (rn === AddRecipeName){
                            iconName=focused ? 'add':'add-outline';
                        }

                        return <Ionicons name={iconName} size={size} color={color}/>
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
                <Tab.Screen name={HomePageName} component={HomePage}/>
                <Tab.Screen name={AboutName} component={About}/>
                <Tab.Screen name={SearchName} component={SearchStack}/>
                <Tab.Screen name={BestIn2023Name} component={BestIn2023}/>
                <Tab.Screen name={AddRecipeName} component={AddRecipe}/>


            </Tab.Navigator>
        </NavigationContainer>
    )
}