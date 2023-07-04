import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';



export default function LoginScreen({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = async () => {
        try {
            // Retrieve the stored data from AsyncStorage
            const storedData = await AsyncStorage.getItem('userData');
    
            if (storedData) {
                const { email: storedEmail, password: storedPassword } = JSON.parse(storedData);
    
                // Perform the login logic using the stored data
                if (email === storedEmail && password === storedPassword) {
                    // Successful login
                    navigation.navigate('Search');
                } else {
                    // Invalid credentials
                    setError('Invalid email or password');

                }
            } else {
                // No registration data found
                setError('No registration data found');
            }
        } catch (error) {
            console.log(error);
            setError('An error occurred');
        }
        // login logic to be added in future
    };

    const handleRegister = () => {
        navigation.navigate('Register');
    };

    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={styles.title}>Welcome to the App!</Text>
                <Image source={require('../../assets/images/logo.png')} style={styles.logo} />
            </View>
            {error !== '' && (
                <Text style={styles.errorText}>{error}</Text>
            )}
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


            <TouchableOpacity style={styles.button} onPress={handleLogin}>
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={handleRegister}>
                <Text style={styles.buttonText}>New user? Register here</Text>
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
});
