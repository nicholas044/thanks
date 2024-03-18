import React, { useEffect, useLayoutEffect, useState } from 'react';
import {SafeAreaView, StyleSheet, TextInput, Text, View, Alert, Button} from 'react-native';
import { useNavigation } from "@react-navigation/native";
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
  
  const LoginScreen = () => {
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://138.197.182.56:3000/auth/login', {
        identifier,
        password,
      });

      if (response.data && response.data.access_token) {
        // Save the token to AsyncStorage or any other storage mechanism
        await AsyncStorage.setItem('token', response.data.access_token);

        // Handle successful login
        console.log(response.data);
        navigation.navigate('MainScreen');
      } else {
        // Handle error if the access_token is not present in the response
        console.error('Access token not found in response');
        Alert.alert('Login Failed', 'Access token not found in response. Please try again.');
      }
    } catch (error) {
      if (error.response) {
        console.error('Server Error:', error.response.data);
        Alert.alert('Login Failed', 'Invalid username or password. Please try again.');
      } else if (error.request) {
        console.error('Network Error:', error.request);
        Alert.alert('Login Failed', 'Network Error. Please check your internet connection.');
      } else {
        console.error('Error:', error.message);
        Alert.alert('Login Failed', 'An error occurred. Please try again later.');
      }
    }
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  useEffect(() => {
    const checkLoggedIn = async () => {
      const token = await AsyncStorage.getItem('token');
      if (token) {
        // User is already logged in, navigate to main screen
        navigation.replace('MainScreen');
      }
    };

    checkLoggedIn();
  }, []);

    return (
      <SafeAreaView className="flex-1 bg-white relative justify-center">
        <View style={styles.top}>
        <View className = "items-center justify-between">
          <Text className="text-[35px] text-[#0B646B] font-bold">Log In</Text>
          <Text className="mt-3 mb-3 text-[#527283] text-[19px] font-900">Welcome back! Enter Your Credentials</Text>
        </View>
        <TextInput
        style={styles.input}
       // onChangeText={setEmail}
       // value={email}
        placeholder="Email"
        value={identifier}
        onChangeText={setIdentifier}
      />
      <TextInput
        style={styles.input}
        onChangeText={setPassword}
        value={password}
        placeholder="Password"
        secureTextEntry
      />
      <View className = "mt-2 p-6 ">
      <Button
        title="Login"
        color="#0B646B"
        className = "mt-6 w-60 "
        onPress={handleLogin}
       // onPress={() => navigation.navigate('MainScreen')}
      />
      </View>
      </View>
      
      </SafeAreaView>
    );
  };
  
  
const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      padding: 10,
      backgroundColor: '#ffffff', // Set the background color if needed
      borderRadius: 8, // Add borderRadius for rounded corners
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 4,
      },
      shadowOpacity: 0.1,
      shadowRadius: 6,
      elevation: 2, // Elevation for Android shadow
    },
    top: {
      marginTop: 70,
    },
  });
  
  export default LoginScreen;
  