import React, {useState} from 'react';
import {
  ActivityIndicator,
  Animated,
  ImageErrorEventData,
  ImageStyle,
  NativeSyntheticEvent,
  StyleProp,
  StyleSheet,
  View,
} from 'react-native';
import {useAnimation} from '../hooks/useAnimation';

interface Props {
  uri: string;
  style?: StyleProp<ImageStyle>;
}

export const FadeInImage = ({uri, style = {}}: Props) => {
  const {opacity, fadeIn} = useAnimation();
  const [isLoading, setIsLoading] = useState(true);

  const finishLoading = () => {
    setIsLoading(false);
    fadeIn();
  };

  const onError = (err: NativeSyntheticEvent<ImageErrorEventData>) => {
    setIsLoading(false);
  };

  return (
    <View
      // style={{
      //   justifyContent: 'center',
      //   alignItems: 'center',
      //   ...(style as any),
      // }}>
      style={(stylesScreen.container, {...(style as any)})}>
      {isLoading && (
        <ActivityIndicator
          style={stylesScreen.activityIndicator}
          color="grey"
          size={30}
        />
      )}

      <Animated.Image
        source={{uri}}
        onError={onError}
        onLoad={finishLoading}
        style={{
          ...(style as any),
          opacity,
        }}
      />
    </View>
  );
};

const stylesScreen = StyleSheet.create({
  container: {
    ustifyContent: 'center',
    alignItems: 'center',
  },
  activityIndicator: {
    position: 'absolute',
  },
});
