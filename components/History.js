import React, { useLayoutEffect } from 'react';
import {TouchableOpacity, SafeAreaView, StyleSheet, TextInput, View, ScrollView, Text, Button } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { FontAwesome6 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
const History = () => {
  const navigation = useNavigation();

  
  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Send Money',
      headerShown: true,
      headerBackVisible: true,
      headerLeft: () => (
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} />
        </TouchableOpacity>
      ),
    });
  }, []);

  return (
    <SafeAreaView  className="flex-1 bg-white relative">
     <View className="m-5 justify-center items-center">
     <Text style={styles.header}>Amount to Send</Text>
     <Text style={styles.price} className = "font-bold">$320</Text>
     </View>
     <View>
      <Text className = "pl-5 pb-2 font-bold">Recipient's Account</Text>
     <View style={styles.inputContainer}>
     <FontAwesome6 name="credit-card" size={20} color="gray" style={styles.icon} />
     <TextInput
        style={styles.input}
        placeholder="0000 0000 0000 0000"
      />
     </View>
     </View>
     
     <View style={styles.footer}>
     <View style={styles.terms}>
     <FontAwesome6 name="shield" size={20} color="gray" style={styles.icon} />
     <Text style={styles.foottext}>The Transaction is secure and protected, in accordance with our terms and conditions</Text>
     </View>
     <TouchableOpacity style={[styles.button, styles.shadow]}>
        <Text className = "font-bold" style={styles.buttonText}>Send</Text>
      </TouchableOpacity>
     </View>
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  header: {
    fontSize: 20,
    marginTop: 20,
    
  },
  price: {
    fontSize: 30,
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 20,
    marginRight: 20,
    paddingLeft: 10,
    backgroundColor: "#f0f0f0",
  },
  input: {
    padding: 10,
  },
  footer: {
    flex: 1,
    justifyContent: 'flex-end', // Push content to the bottom
    paddingBottom: 20,
  },
  foottext: {
     fontSize: 11,
     paddingLeft: 10,
     paddingRight: 10,
  },
  terms: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 20,
    paddingRight: 20,
  },
  button: {
    backgroundColor: 'black',
    borderRadius: 5,
    marginBottom: 5,
    marginTop: 5,
    marginLeft: 10,
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
  },
  buttonText: {
    color: '#ffffff',
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


export default History;
