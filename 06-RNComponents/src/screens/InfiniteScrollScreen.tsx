import React, {useState} from 'react';
import {View, FlatList, Text, StyleSheet} from 'react-native';
import {HeaderTitle} from '../components/HeaderTitle';

export const InfiniteScrollScreen = () => {
  const [numbers, setNumbers] = useState([0, 1, 2, 3, 4, 5]);

  const loadMore = () => {
    const newArray: number[] = [];
    for (let i = 0; i < 5; i++) {
      newArray[i] = numbers.length + i;
    }
    setNumbers([...numbers, ...newArray]);
  };

  const renderItem = (item: number) => (
    <Text style={styles.textItem}>{item}</Text>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={numbers}
        renderItem={({item}) => renderItem(item)}
        keyExtractor={item => item.toString()}
        ListHeaderComponent={<HeaderTitle title="Infinite Scroll" />}
        /* cuando llegamos al final de la lista */
        onEndReached={loadMore}
        /* saber cuanto falta para llegar al final de la lista */
        onEndReachedThreshold={0.5}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textItem: {
    backgroundColor: 'green',
    height: 150,
  },
  container: {
    flex: 1,
    backgroundColor: 'red',
  },
});
