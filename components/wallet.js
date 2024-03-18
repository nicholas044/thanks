import React, { useEffect, useState, useLayoutEffect } from 'react';
import { View, Text, SafeAreaView, Image, StyleSheet,  ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { useNavigation } from "@react-navigation/native";
import MainScreen from '../screens/MainScreen';

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
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f4f8',
    padding: 20,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  label: {
    fontWeight: 'bold',
    marginBottom: 4,
  },
  value: {
    marginBottom: 12,
  },
});

const WalletInfo = () => {

  const navigation = useNavigation();

  
  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'My Wallet',
      headerShown: true,
    });
  }, []);

  const [walletData, setWalletData] = useState(null);
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

  useEffect(() => {
    if (user) {
      const fetchWalletData = async () => {
        try {
          const token = await AsyncStorage.getItem('token');
          const response = await axios.get(`http://138.197.182.56:3000/wallets/${user.id}`, {
            headers: {
              Authorization: `Bearer ${token}`
            }
          });
          const { id, accountNumber, balance, currency, isActive } = response.data;
          setWalletData({ id, accountNumber, balance, currency, isActive });
        } catch (error) {
          console.error('Error fetching wallet information:', error.message);
        }
      };
  
      fetchWalletData();
    }
  }, [user]);
  

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
    <View style={styles.container}>
      {user && walletData ? (
        <View style={styles.card}>
          <Text style={styles.heading}>Wallet Information</Text>
          <Text style={styles.label}>ID:</Text>
          <Text style={styles.value}>{walletData.id}</Text>
          <Text style={styles.label}>Account Number:</Text>
          <Text style={styles.value}>{walletData.accountNumber}</Text>
          <Text style={styles.label}>Balance:</Text>
          <Text style={styles.value}>{walletData.balance}</Text>
          <Text style={styles.label}>Currency:</Text>
          <Text style={styles.value}>{walletData.currency}</Text>
          <Text style={styles.label}>Active:</Text>
          <Text style={styles.value}>{walletData.isActive ? 'Yes' : 'No'}</Text>
        </View>
      ) : (
        <Text>Fetching user or wallet information...</Text>
      )}
    </View>
    </SafeAreaView>

  );
};

export default WalletInfo;
