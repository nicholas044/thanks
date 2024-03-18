import React, { useLayoutEffect } from 'react';
import {TouchableOpacity, SafeAreaView, StyleSheet, Platform, TextInput, View, ScrollView, Text, Button } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome6 } from '@expo/vector-icons';

const Checkout = () => {
  const navigation = useNavigation();

  
  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Checkout',
      headerShown: true,
    });
  }, []);

  return (
    <SafeAreaView  className="flex-1 bg-white relative">
        <ScrollView>
                <View style={styles.head}>
            <View style={styles.column}  className = "flex-row justify-center">
            <AntDesign name="checksquare" size={24} color="black" /><Text>Recipient</Text>
            </View>
            <View style={styles.column}  className = "flex-row justify-center">
            <AntDesign name="checksquare" size={24} color="black" /><Text>Amount</Text>
            </View>
            <View style={styles.column} className = "flex-row justify-center">
            <MaterialCommunityIcons name="numeric-3-box" size={24} color="black" /><Text>Review</Text>
            </View>
            </View>
            <View style={styles.text} className = "items-center justify-between p-4">
                <Text className="text-[20px]  font-bold">Confirm And Send Money</Text>
                <Text className="mt-3 mb-3  text-[15px] font-900">By sending the money, you agree to our Terms of Use and Privacy Policy.</Text>
            </View>
            
            <View className = "flex-row justify-center">
            <View style={styles.card}>
            <View style={styles.payment}>
            <View style={styles.column}  className = "flex-row justify-start">
            <AntDesign name="checksquare" size={24} color="black" /><Text>Payment</Text>
            </View>
            <View style={styles.column} className = "flex-row justify-end">
            <MaterialCommunityIcons name="numeric-3-box" size={24} color="black" /><Text>Edit</Text>
            </View>
            </View>
            <View style={styles.payment}>
            <View style={styles.column}  className = "flex-row justify-start">
            <FontAwesome6 name="credit-card" size={20} color="gray" style={styles.icon} />
                <TextInput
                    style={styles.input}
                    placeholder="0000 0000 0000 1234"
                />
            </View>
            <View style={styles.column} className = "flex-row justify-end">
            <Text>1/24</Text>
            </View>
            </View>
            </View>
            </View>
        
            <View className = "flex-row justify-center mt-5 pt-5">
            <View style={styles.card}>
            <View style={styles.payment}>
            <View style={styles.column}  className = "flex-row justify-start">
            <AntDesign name="checksquare" size={24} color="black" /><Text>Payment</Text>
            </View>
            <View style={styles.column} className = "flex-row justify-end">
            <MaterialCommunityIcons name="numeric-3-box" size={24} color="black" /><Text>Edit</Text>
            </View>
            </View>
            <View style={styles.payment}>
            <View style={styles.column}  className = "flex-row justify-start">
            <FontAwesome6 name="credit-card" size={20} color="gray" style={styles.icon} />
                <TextInput
                    style={styles.input}
                    placeholder="0000 0000 0000 1234"
                />
            </View>
            <View style={styles.column} className = "flex-row justify-end">
            <Text>1/24</Text>
            </View>
            </View>
            <View style={styles.payment}>
            <View style={styles.column}  className = "flex-row justify-start">
            <FontAwesome6 name="credit-card" size={20} color="gray" style={styles.icon} />
                <TextInput
                    style={styles.input}
                    placeholder="0000 0000 0000 1234"
                />
            </View>
            <View style={styles.column} className = "flex-row justify-end">
            <Text>1/24</Text>
            </View>
            </View>
            <View style={styles.payment}>
            <View style={styles.column}  className = "flex-row justify-start">
            <FontAwesome6 name="credit-card" size={20} color="gray" style={styles.icon} />
                <TextInput
                    style={styles.input}
                    placeholder="0000 0000 0000 1234"
                />
            </View>
            <View style={styles.column} className = "flex-row justify-end">
            <Text>1/24</Text>
            </View>
            </View>
            <View style={styles.payment}>
            <View style={styles.column}  className = "flex-row justify-start">
            <FontAwesome6 name="credit-card" size={20} color="gray" style={styles.icon} />
                <TextInput
                    style={styles.input}
                    placeholder="0000 0000 0000 1234"
                />
            </View>
            <View style={styles.column} className = "flex-row justify-end">
            <Text>1/24</Text>
            </View>
            </View>
            <View style={styles.payment}>
            <View style={styles.column}  className = "flex-row justify-start">
            <FontAwesome6 name="credit-card" size={20} color="gray" style={styles.icon} />
                <TextInput
                    style={styles.input}
                    placeholder="0000 0000 0000 1234"
                />
            </View>
            <View style={styles.column} className = "flex-row justify-end">
            <Text>1/24</Text>
            </View>
            </View>
            <View style={styles.payment}>
            <View style={styles.column}  className = "flex-row justify-start">
            <FontAwesome6 name="credit-card" size={20} color="gray" style={styles.icon} />
                <TextInput
                    style={styles.input}
                    placeholder="0000 0000 0000 1234"
                />
            </View>
            <View style={styles.column} className = "flex-row justify-end">
            <Text>1/24</Text>
            </View>
            </View>
            </View>
            </View>
        </ScrollView>



     <View style={styles.footer}>
     <View className = "flex-row justify-center">
            <View style={styles.card}>
            <View style={styles.payment}>
            <View style={styles.column}  className = "flex-row justify-start">
            <AntDesign name="checksquare" size={24} color="black" /><Text>Amount Sent</Text>
            </View>
            <View style={styles.column} className = "flex-row justify-end">
            <MaterialCommunityIcons name="numeric-3-box" size={24} color="black" /><Text>$1200.00</Text>
            </View>
            </View>
            <View style={styles.payment}>
            <View style={styles.column}  className = "flex-row justify-start">
            <Text>Transfer Fee</Text>
            </View>
            <View style={styles.column} className = "flex-row justify-end">
            <Text>$4.35</Text>
            </View>
            
            </View>
            </View>
            </View>
     <TouchableOpacity style={styles.button}>
        <Text className = "font-bold" style={styles.buttonText}>Send</Text>
      </TouchableOpacity>
     </View>
    
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    head: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: "100%",
        ...Platform.select({
            ios: {
              shadowColor: '#000',
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,
            },
            android: {
              elevation: 5,
            },
          }),
      },
      column: {
        width: '30%', // Adjust as needed
        marginVertical: 10,
      },
      payment: {
        flexDirection: 'row',
        justifyContent: 'space-between',
      },
      footer: {
        flex: 1,
        justifyContent: 'flex-end', // Push content to the bottom
        paddingBottom: 20,
        marginTop: 200,
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
      card: {
        borderRadius: 5,
        width: '90%',
        backgroundColor: 'blue',
        paddingHorizontal: 20,
        
        ...Platform.select({
            ios: {
              shadowColor: '#000',
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,
            },
            android: {
              elevation: 5,
            },
          }),
      }
});

export default Checkout;
