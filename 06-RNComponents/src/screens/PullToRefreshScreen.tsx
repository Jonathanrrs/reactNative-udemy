import React, {useState} from 'react';
import {View, ScrollView, RefreshControl} from 'react-native';
import {HeaderTitle} from '../components/HeaderTitle';
import {styles} from '../theme/appTheme';

export const PullToRefreshScreen = () => {
  const [refreshing, setRefreshing] = useState(false);
  const onRefresh = () => {
    setRefreshing(true);

    setTimeout(() => {
      console.log('terminamos');
      setRefreshing(false);
    }, 1500);
  };
  return (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }>
      <View style={styles.globalMargin}>
        <HeaderTitle title="Pull to refresh" />
      </View>
    </ScrollView>
  );
};
