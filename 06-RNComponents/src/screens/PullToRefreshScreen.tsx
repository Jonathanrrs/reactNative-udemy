import React, {useState} from 'react';
import {View, ScrollView, RefreshControl, Text} from 'react-native';
import {HeaderTitle} from '../components/HeaderTitle';
import {styles} from '../theme/appTheme';

export const PullToRefreshScreen = () => {
  const [refreshing, setRefreshing] = useState(false);
  const [data, setData] = useState<string>();
  const onRefresh = () => {
    setRefreshing(true);

    setTimeout(() => {
      console.log('terminamos');
      setRefreshing(false);
      setData('Hola mundo');
    }, 3000);
  };
  return (
    <ScrollView
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
          /* para bajar el icono de refresh, ya funciona para IOS 2022 */
          progressViewOffset={10}
          /* para cambiar el color */
          progressBackgroundColor="#5856D6"
          /* para cambiar los colores de la cosilla */
          colors={['white', 'red', 'orange']}
          /* style dentro para IOS */
        />
      }>
      <View style={styles.globalMargin}>
        <HeaderTitle title="Pull to refresh" />
        {data && <HeaderTitle title={data} />}
      </View>
    </ScrollView>
  );
};
