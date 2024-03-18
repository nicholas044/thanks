import React, { useEffect, useLayoutEffect, useState } from 'react';
import { View, TouchableOpacity, Text, TextInput, StyleSheet, Button, Alert } from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const DepositScreen = () => {
  const [amount, setAmount] = React.useState('');
  const [pin, setPin] = React.useState('');
  const [reference, setReference] = React.useState('');

  const [userId, setUserId] = useState(null);

const fetchUser = async () => {
  try {
    const token = await AsyncStorage.getItem('token');
    const response = await axios.get('http://138.197.182.56:3000/auth/profile', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    const id = response.data.id;
    setUserId(id); // Store the id in the state variable

  } catch (error) {
    console.error('Error fetching user:', error.message);
    // Handle the error here
  }
};

useEffect(() => {
  fetchUser();
}, []); // Call fetchUser only once on component mount

const handleDeposit = async () => {
  try {
    const token = await AsyncStorage.getItem('token');
    const response = await axios.post(`http://138.197.182.56:3000/wallets/${userId}/deposit`, {
      amount: amount,
      pin: pin,
      reference: reference
    }, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    console.log(response.data);
    Alert.alert('Deposit Successful');
    // Handle successful deposit response
  } catch (error) {
    console.error('Deposit Error:', error);
    Alert.alert('Deposit Failed', 'An error occurred while processing your deposit. Please try again.');
    // Handle error
  } 
};


  
  return (
    <View style={styles.container}>
    <TextInput
      style={styles.input}
      placeholder="Amount"
      value={amount}
      onChangeText={setAmount}
      keyboardType="numeric"
    />
    <TextInput
      style={styles.input}
      placeholder="PIN"
      value={pin}
      onChangeText={setPin}
      secureTextEntry
    />
    <TextInput
      style={styles.input}
      placeholder="Reference"
      value={reference}
      onChangeText={setReference}
    />
    <TouchableOpacity
      style={styles.button}
      onPress={handleDeposit}
    >
      <Text style={styles.buttonText}>Deposit</Text>
    </TouchableOpacity>
  </View>
  

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f0f4f8',
  },
  input: {
    width: '100%',
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  button: {
    width: '100%',
    padding: 15,
    backgroundColor: '#0B646B',
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default DepositScreen;
