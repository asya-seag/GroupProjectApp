import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet, Text, Linking} from 'react-native';
import { Image } from 'react-native';

const Search = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    navigation.navigate('Search Results', { searchQuery: searchQuery }); 
  };
  const handleLinkPress = () =>{
    Linking.openURL('https://www.liquor.com/best-nonalcoholic-beers-5078321')
  }

  return (
    <View style={styles.container}>
        <View style={styles.logocontainer}>
        <Text style={styles.greetings}>Hello there!</Text>
        <Image source={require('../../assets/logo.png')} style={styles.image} />

        </View>
        
        

      <TextInput
        placeholder="Enter a drink/ingredient name"
        value={searchQuery}
        onChangeText={setSearchQuery}
      />
      <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
        <Text style={styles.buttonText}>Search</Text>
      </TouchableOpacity>
      <View style={styles.morecontainter}>
      <Text style={styles.moretext}>You may also like...</Text>
      <View style={styles.cardContainer}>
        <View style={styles.column}>
      <Image source={require('../../assets/nonal.jpg')} style={styles.nonalimage} />
      <Text style={styles.cardTitle} onPress={handleLinkPress}>
        The 10 Best Non-Alcoholic Beers of 2023
      </Text>
      </View>
      
      <View style={styles.column}>
          <Image source={require('../../assets/party.jpg')} style={styles.partyimage} />
          <Text style={styles.cardTitle} onPress={handleLinkPress}>
            20 Easy Party Snacks
          </Text>
        </View>
        </View>
      </View>
      
    </View>
  );
};
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    logocontainer:{
        flexDirection: 'row',
        alignItems:'center'
    },
    morecontainter:{
        alignItems:'center',
        marginTop: 40
    },
    moretext:{
        fontSize:20,
        fontWeight:'bold',
        marginBottom:20
    },

    image: {
      width: 70,
      height: 70,
      borderRadius: 100,
      marginRight:40,
      marginLeft: 200,
      marginBottom:50,
      marginTop: 40,
    },
    nonalimage:{
        width: 180,
        height: 180,
        marginTop: 50,
        borderRadius: 50,
    },
    partyimage:{
        width: 180,
        height: 180,
        marginTop: 50,
        borderRadius: 50,
    },
    greetings:{
        fontSize:20,
        fontWeight:'bold',
        marginLeft: 40,
        marginBottom:50,
    },
    searchButton:{
        backgroundColor: '#42DEE1',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        marginTop: 50,
        borderRadius: 50,
    },
    buttonText:{
        color:'#EEF5B2',
        fontWeight:'bold',
    },
    linkText:{
        color: '#42DEE1',
        textDecorationLine: 'underline',
        marginTop: 20,
    },
    cardContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        width:'100%',
        marginTop:20
    },
    column:{
        alignItems: 'center',
        flex: 1,
    },
    cardTitle:{
        color: '#42DEE1',
        textDecorationLine: 'underline',
        marginTop:10,
        textAlign:'center'
    }
  });
  
export default Search;