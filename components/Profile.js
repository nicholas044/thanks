import React, { useEffect, useLayoutEffect, useState } from 'react';
import { TouchableOpacity, SafeAreaView, StyleSheet, Image, Alert, View, Text, ActivityIndicator } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const Profile = () => {
  const navigation = useNavigation();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = await AsyncStorage.getItem('token');
        const response = await axios.get('http://138.197.182.56:3000/auth/profile', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        console.log(response);
        setUser(response.data);
      } catch (error) {
        console.error('Error fetching user:', error.message);

      }
    };

    fetchUser();
  }, []);

  const handleLogout = async () => {
    try {
      // Remove the token from AsyncStorage
      await AsyncStorage.removeItem('token');

      // Handle successful logout
      console.log('Logged out successfully');
      // Navigate to the login screen or any other screen you prefer
      navigation.navigate('LoginScreen');
    } catch (error) {
      console.error('Error:', error.message);
      Alert.alert('Logout Failed', 'An error occurred while logging out. Please try again.');
    }
  };

  const handleWallet = () => {
    navigation.navigate('Wallet'); // Replace 'TargetScreen' with the name of the screen you want to navigate to
  };

  return (
    <SafeAreaView className="flex-1 bg-white relative">
       {user ? (
      <View className="m-5 justify-center items-center">
        <View className="bg-gray-200 p-6 rounded-full">
          <Image
            source={require('../assets/user.png')}
            style={styles.image}
          />
        </View>
        <Text style={styles.accountname}>{user.userName}</Text>
      </View>
    ) : (
      <ActivityIndicator size="large" color="#0000ff" />
    )}
    <View className="flex-1 justify-center items-center">
      <View style={styles.container}>
        <TouchableOpacity style={[styles.button, styles.shadow]} onPress={handleWallet}>
          <Text style={styles.buttonText}>Wallet</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.shadow]}>
          <Text style={styles.buttonText}>Change Info</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.shadow]}>
          <Text style={styles.buttonText}>Settings</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleLogout} style={[styles.button, styles.shadow]}>
          <Text style={styles.buttonText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
    padding: 20,
  },
  accountname: {
    fontSize: 30,
  },
  container: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'stretch',
    width: '90%',
    padding: 10,
  },
  button: {
    backgroundColor: '#ffffff',
    borderRadius: 5,
    marginBottom: 5,
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
  },
  buttonText: {
    color: 'black',
    fontSize: 20,
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});

export default Profile;
