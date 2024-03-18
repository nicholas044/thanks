import React, { useLayoutEffect } from 'react';
import { SafeAreaView, StyleSheet, View, ScrollView, Text, Button } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import SearchBar from "../components/SearchBar";
import CarouselComponent from "../components/CarouselComponent";

const HomeScreen = () => {
  const navigation = useNavigation();

  
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView style={styles.container} className="flex-1 bg-white relative pt-5">
     <ScrollView>
      <View style={styles.header}>
        <Text style={styles.headerText}>Welcome User!</Text>
      </View>
      <View style={styles.carousel}>
        <CarouselComponent />
      </View>
      <View style={styles.searchBar}>
        <SearchBar />
      </View>
    </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 70,
  },
  header: {
    flexDirection: 'row',
    marginLeft: 5,
    
  },
  headerText: {
    color: '#527283',
    fontSize: 19,
    fontWeight: 'bold',
    marginLeft: 15,
  },
  carousel: {
    marginTop: 5,

  },
  searchBar: {
    marginTop: 5,
  },
});

export default HomeScreen;