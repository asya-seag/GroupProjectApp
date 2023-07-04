import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function RegisterScreen({ navigation }) {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [registrationSuccess, setRegistrationSuccess] = useState(false);

    const handleRegister = async () => {
        try {
            await AsyncStorage.setItem('userData', JSON.stringify({ username, email, password }));
            setRegistrationSuccess(true);
        // mocking for now registration logic possible in future
        }catch (error) {
            console.log(error)
        }
        
    };

    const handleLogin = () => {
        navigation.navigate('Login');
    };

    return (
        <View style={styles.container}>
            <View>
                <Text>
                    {'\n'}
                    {'\n'}
                    {'\n'}</Text>
            </View>

            <View style={styles.headerContainer}>
                <Text style={styles.title}>
                    Register</Text>
                <Image source={require('../../assets/images/logo.png')} style={styles.logo} />
            </View>

            <View style={styles.textContainer}>
                <Text style={styles.subtitle}>Please fill in the fields below:</Text>
            </View>

            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Username"
                    value={username}
                    onChangeText={setUsername}
                />
            </View>

            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    value={email}
                    onChangeText={setEmail}
                />
            </View>

            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                />
            </View>

            {registrationSuccess && (
                <Text style={styles.successText}>Registration successful! You can now log in.</Text>
            )}

            <TouchableOpacity style={styles.button} onPress={handleRegister}>
                <Text style={styles.buttonText}>Register</Text>
            </TouchableOpacity>


            <TouchableOpacity onPress={handleLogin}>
                <Text style={styles.authLink}>Already registered? Go to Login</Text>
            </TouchableOpacity>
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
        marginRight: 180,
    },
    logo: {
        width: 80,
        height: 80,
    },
    textContainer: {
        width: '100%',
        alignItems: 'flex-start',
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 16,
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
    button: {
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
    authLink: {
        marginTop: 10,
        marginLeft:20,
        justifyContent: 'center',
        alignItems: 'center',
        color: '#FFCD29',
        fontSize: 16,
        textDecorationLine: 'underline',
      }  
});
