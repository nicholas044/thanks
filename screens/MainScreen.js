import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

import Saved from '../components/History';
import Profile from '../components/Profile';
import Deposit from '../components/deposit';
import HomeScreen from './HomeScreen';

const Tab = createBottomTabNavigator();

const MainScreen = () => {
  const navigation = useNavigation();
  
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);
  
  return (
    <SafeAreaView style={styles.container}>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarActiveTintColor: '#0B646B',
          tabBarInactiveTintColor: 'gray',
          tabBarStyle: {
            display: 'flex',
          },
          tabBarIcon: ({ color, size }) => {
            let iconName;
            let fontName;

            if (route.name === 'Home') {
              iconName = 'home';
            } else if (route.name === 'My Profile') {
              iconName = 'person';
            } else if (route.name === 'Deposit') {
              iconName = 'wallet'; 
            } else if (route.name === 'Send Money') {
              fontName = 'send';
            }
            if (iconName) {
              return <Ionicons name={iconName} size={size} color={color} />;
            } else if (fontName) {
              return <FontAwesome name={fontName} size={size} color={color} />;
            }
          },
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Send Money" component={Saved} />
        <Tab.Screen name="Deposit" component={Deposit} />
        <Tab.Screen name="My Profile" component={Profile} />
      </Tab.Navigator>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default MainScreen;
