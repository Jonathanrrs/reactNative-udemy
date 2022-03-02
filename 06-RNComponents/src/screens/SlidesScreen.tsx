import {StackScreenProps} from '@react-navigation/stack';
import React, {useState, useRef, useContext} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ImageSourcePropType,
  Text,
  Dimensions,
  Image,
  TouchableOpacity,
  Animated,
  View,
} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import Icon from 'react-native-vector-icons/Ionicons';
import {ThemeContext} from '../context/themeContext/ThemeContext';
import {useAnimation} from '../hooks/useAnimation';

const {width: screenWidth} = Dimensions.get('window');

interface Slide {
  title: string;
  desc: string;
  img: ImageSourcePropType;
}

interface Props extends StackScreenProps<any, any> {}

const items: Slide[] = [
  {
    title: 'Titulo 1',
    desc: 'Ea et eu enim fugiat sunt reprehenderit sunt aute quis tempor ipsum cupidatat et.',
    img: require('../assets/slide-1.png'),
  },
  {
    title: 'Titulo 2',
    desc: 'Anim est quis elit proident magna quis cupidatat culpa labore Lorem ea. Exercitation mollit velit in aliquip tempor occaecat dolor minim amet dolor enim cillum excepteur. ',
    img: require('../assets/slide-2.png'),
  },
  {
    title: 'Titulo 3',
    desc: 'Ex amet duis amet nulla. Aliquip ea Lorem ea culpa consequat proident. Nulla tempor esse ad tempor sit amet Lorem. Velit ea labore aute pariatur commodo duis veniam enim.',
    img: require('../assets/slide-3.png'),
  },
];

export const SlidesScreen = ({navigation}: Props) => {
  const {
    theme: {colors},
  } = useContext(ThemeContext);
  const [activeIndex, setActiveIndex] = useState(0);
  const {opacity, fadeIn} = useAnimation();
  const isVisible = useRef(false);
  const renderItem = (item: Slide) => (
    <View style={[styles.containerItem, {backgroundColor: colors.background}]}>
      <Image source={item.img} style={styles.image} />
      <Text style={[styles.title, {color: colors.primary}]}>{item.title}</Text>
      <Text style={[styles.subTitle, {color: colors.text}]}>{item.desc}</Text>
    </View>
  );
  return (
    <SafeAreaView style={styles.container}>
      <Carousel
        // ref={c => {
        //   this._carousel = c;
        // }}
        data={items}
        renderItem={({item}) => renderItem(item)}
        sliderWidth={screenWidth}
        itemWidth={screenWidth}
        layout="default"
        onSnapToItem={index => {
          setActiveIndex(index);
          if (index === 2) {
            isVisible.current = true;
            fadeIn();
          }
        }}
      />
      <View style={styles.containerPagination}>
        <Pagination
          dotsLength={items.length}
          activeDotIndex={activeIndex}
          dotStyle={[styles.pagination, {backgroundColor: colors.background}]}
        />
        <Animated.View style={{opacity}}>
          <TouchableOpacity
            style={[styles.touchable, {backgroundColor: colors.primary}]}
            activeOpacity={0.8}
            onPress={() => {
              if (isVisible.current) {
                navigation.navigate('HomeScreen');
              }
            }}>
            <Text style={[styles.textTouchable]}>Entrar</Text>
            <Icon name="chevron-forward-outline" color="white" size={30} />
          </TouchableOpacity>
        </Animated.View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
  },
  containerItem: {
    flex: 1,
    // backgroundColor: 'white',
    borderRadius: 5,
    padding: 4,
    justifyContent: 'center',
  },
  image: {
    width: 340,
    height: 400,
    resizeMode: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    // color: '#5856D6',
  },
  subTitle: {
    fontSize: 16,
  },
  pagination: {
    width: 10,
    height: 10,
    borderRadius: 10,
    // backgroundColor: '#5856D6',
  },
  touchable: {
    flexDirection: 'row',
    // backgroundColor: '#5856D6',
    width: 140,
    height: 50,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textTouchable: {
    fontSize: 25,
    color: 'white',
  },
  containerPagination: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    alignItems: 'center',
  },
});
