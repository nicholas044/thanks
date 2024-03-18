import React from 'react';
import { FlatList, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const DATA = [
  { id: '1', title: 'Transfer Money', body: 'Enter', text: 'Card Ending In', link: 'Profile' },
  { id: '2', title: 'Item 2', body: 'Item 1', text: 'Item 2' },
  { id: '3', title: 'Item 3' },
  { id: '4', title: 'Item 4' },
  { id: '5', title: 'Item 5' },
  { id: '6', title: 'Item 6' },
  { id: '7', title: 'Item 7' },
];

const ITEM_WIDTH = 250;
const ITEM_MARGIN = 10;
const ITEM_SIZE = ITEM_WIDTH + ITEM_MARGIN * 2;

const CarouselComponent = () => {
  const navigation = useNavigation();

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate(item.link)}>
      <View style={styles.container} key={item.id}>
        <View style={styles.item}>
          <Text style={[styles.title, {textAlign: 'left'}]}>{item.title}</Text>
        </View>
        {item.body && (
          <View style={styles.item}>
            <Text style={[styles.body, {textAlign: 'left'}]}>{item.body}</Text>
          </View>
        )}
        {item.text && (
          <View style={styles.item}>
            <Text style={[styles.text, {textAlign: 'left'}]}>{item.text}</Text>
          </View>
        )}
      </View>
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={DATA}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      horizontal
      showsHorizontalScrollIndicator={false}
      snapToInterval={ITEM_SIZE}
      decelerationRate="fast"
      pagingEnabled
      contentContainerStyle={{
        paddingHorizontal: ITEM_MARGIN,
      }}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#eeeeee',
    alignItems: 'left',
    justifyContent: 'center',
    padding: 30,
    marginVertical: ITEM_MARGIN,
    marginHorizontal: ITEM_MARGIN,
    width: ITEM_WIDTH,
    borderRadius: 10,
    // Android shadow
    elevation: 5,
    // iOS shadow
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  item: {
    alignItems: 'left',
  },
  title: {
    fontSize: 17,
    color: '#909090',
  },
  body: {
    fontSize: 22,
    color: '#494848',
    fontWeight: 'bold',
    paddingTop: 10,
    paddingBottom: 20,
  },
  text: {
    fontSize: 17,
    color: '#909090',
  },
});


export default CarouselComponent;
