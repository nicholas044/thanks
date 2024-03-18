import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
// import tw from 'tailwind-react-native-classnames';

const Footer = () => {
  return (
    <View style={styles.footer} className={`flex-row bottom-0 justify-between items-center bg-gray-200 p-4`}>
      <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')} className={`flex-1 items-center`}>
      <AntDesign name="home" size={24} color="black" />
        <Text className={`text-gray-700`}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity className={`flex-1 items-center`} onPress={() => console.log('Search pressed')}>
      <AntDesign name="hearto" size={24} color="black" />
        <Text className={`text-gray-700`}>Saved</Text>
      </TouchableOpacity>
      <TouchableOpacity className={`flex-1 items-center`} onPress={() => console.log('Profile pressed')}>
        <AntDesign name="user" size={24} color="black" />
        <Text className={`text-gray-700`}>Profile</Text>
      </TouchableOpacity>
    </View>
  );
 
};
const styles = StyleSheet.create({
    footer: {
    },
  });
export default Footer;
