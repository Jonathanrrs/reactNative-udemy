import React, {useState} from 'react';
import {
  View,
  FlatList,
  StyleSheet,
  Image,
  ActivityIndicator,
} from 'react-native';
import {HeaderTitle} from '../components/HeaderTitle';

export const InfiniteScrollScreen = () => {
  const [numbers, setNumbers] = useState([0, 1, 2, 3, 4, 5]);

  const loadMore = () => {
    const newArray: number[] = [];
    for (let i = 0; i < 5; i++) {
      newArray[i] = numbers.length + i;
    }
    setTimeout(() => {
      setNumbers([...numbers, ...newArray]);
    }, 1500);
  };

  const renderItem = (item: number) => (
    <Image
      source={{uri: `https://picsum.photos/id/${item}/500/400`}}
      style={styles.imageItem}
    />
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
        ListFooterComponent={() => (
          <View style={styles.indicatorStyle}>
            <ActivityIndicator size={25} color="#5856D6" />
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  imageItem: {
    // backgroundColor: 'green',
    // height: 150,
    width: '100%',
    height: 400,
  },
  container: {
    flex: 1,
    // backgroundColor: 'red',
  },
  indicatorStyle: {
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
});
