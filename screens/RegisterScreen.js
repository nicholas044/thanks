import React, { useEffect, useLayoutEffect, useState } from 'react';
import {SafeAreaView, StyleSheet, ScrollView, TextInput, Text, View, Alert, Button} from 'react-native';
import { useNavigation } from "@react-navigation/native";
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const RegisterScreen = () => {
  const [userName, setUserName] = useState('');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [identifier, setIdentifier] = useState('');
  const navigation = useNavigation();
  
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);


  const handleRegister = async () => {
    try {
      const response = await axios.post('http://138.197.182.56:3000/auth/register', {
        userName,
        fullName,
        email,
        phone,
        password,
      });
      console.log(response.data);
      Alert.alert('Registration Successful');

      const loginResponse = await axios.post('http://138.197.182.56:3000/auth/login', {
      identifier: userName || email || phone, // Assuming username is used for login
      password,
    });

    if (loginResponse.data && loginResponse.data.access_token) {
      // Save the token to AsyncStorage or any other storage mechanism
      await AsyncStorage.setItem('token', loginResponse.data.access_token);

      // Navigate to main screen
      navigation.replace('MainScreen');
    } else {
      // Handle error if the access_token is not present in the response
      console.error('Access token not found in response');
      Alert.alert('Login Failed', 'Access token not found in response. Please try again.');
    }
    } catch (error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.error('Server Error:', error.response.data);
        Alert.alert('Registration Failed', 'Server Error. Please try again later.');
      } else if (error.request) {
        // The request was made but no response was received
        console.error('Network Error:', error.request);
        Alert.alert('Registration Failed', 'Network Error. Please check your internet connection.');
      } else {
        // Something happened in setting up the request that triggered an Error
        console.error('Error:', error.message);
        Alert.alert('Registration Failed', 'An error occurred. Please try again later.');
      }
    }
  };

  
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
        <View className="items-center justify-between">
          <Text className="text-[35px] text-[#0B646B] font-bold">Welcome!</Text>
          <Text className="mt-3 mb-3 text-[#527283] text-[19px] font-900">Sign up to enjoy efficient and secure money transfers with a focus on</Text>
        </View>
        <TextInput
        style={styles.input}
        onChangeText={setUserName}
        value={userName}
        placeholder="Username"
      />
      <TextInput
        style={styles.input}
        onChangeText={setFullName}
        value={fullName}
        placeholder="Full Name"
      />
      <TextInput
        style={styles.input}
        onChangeText={setEmail}
        value={email}
        placeholder="Email"
      />
      <TextInput
        style={styles.input}
        onChangeText={setPhone}
        value={phone}
        placeholder="Phone"
      />
      <TextInput
        style={styles.input}
        onChangeText={setPassword}
        value={password}
        placeholder="Password"
        secureTextEntry
      />
       </View>
       <View className="mt-2 p-6">
          <Button
            title="Join Now"
            color="#0B646B"
            className="mt-6 w-60"
            onPress={handleRegister}
          />
        </View>
        <View className="pt-0 pl-6 pr-6">
          <Button
            title="Already A User"
            color="#0B646B"
            className="mt-6 w-60"
            onPress={() => navigation.navigate('LoginScreen')}
          />
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

export default RegisterScreen;