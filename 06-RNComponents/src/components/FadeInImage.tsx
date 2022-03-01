import React, {useState} from 'react';
import {ActivityIndicator, Animated, StyleSheet, View} from 'react-native';
import {useAnimation} from '../hooks/useAnimation';

interface Props {
  uri: string;
}

export const FadeInImage = ({uri}: Props) => {
  const {opacity, fadeIn} = useAnimation();
  const [isLoading, setIsLoading] = useState(true);

  const finishLoading = () => {
    setIsLoading(false);
    fadeIn();
  };
  return (
    <View style={styles.container}>
      {isLoading && (
        <ActivityIndicator
          style={styles.indicatorStyle}
          color="#5856D6"
          size={30}
        />
      )}
      <Animated.Image
        source={{uri}}
        onLoadEnd={finishLoading}
        style={[styles.animationStyle, {opacity}]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  animationStyle: {
    width: '100%',
    height: 400,
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  indicatorStyle: {
    position: 'absolute',
  },
});
