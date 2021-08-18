import React from 'react';
import { ActivityIndicator, Dimensions, View, ScrollView } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { MoviePoster } from '../components/MoviePoster';
import { useMovies } from '../hooks/useMovies';

import Carousel from 'react-native-snap-carousel';
import { HorizontalSlider } from '../components/HorizontalSlider';


const {width: windowWidth} = Dimensions.get('window');

export const HomeScreen = () => {

    const {isLoading, nowPlaying, popular, topRated, upcoming} = useMovies();
    const {top} = useSafeAreaInsets();

    if(isLoading) {
        return(
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <ActivityIndicator color="red" size={100} />
            </View>
        )
    }

    return (
        <ScrollView>
        <View style={{marginTop: top+20}}>
            {/* carrousel principal */}
            <View style={{height: 440}}>
            <Carousel 
                data={nowPlaying}
                renderItem={({item}: any) => <MoviePoster movie={item}/> }
                sliderWidth={windowWidth}
                itemWidth={300}
                inactiveSlideOpacity={0.9}
            />
            </View>
            {/* peliculas populares */}
           <HorizontalSlider title="Populares" movies={popular}  />
           <HorizontalSlider title="Top Rated" movies={topRated}  />
           <HorizontalSlider title="Upcoming" movies={upcoming}  />
        </View> 
        </ScrollView>
    )
}
