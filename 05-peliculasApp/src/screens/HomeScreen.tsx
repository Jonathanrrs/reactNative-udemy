import React from 'react';
import { ActivityIndicator, Dimensions, View, ScrollView } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { MoviePoster } from '../components/MoviePoster';
import { useMovies } from '../hooks/useMovies';

import Carousel from 'react-native-snap-carousel';
import { HorizontalSlider } from '../components/HorizontalSlider';
import { GradientBackground } from '../components/GradientBackground';
import ImageColors from 'react-native-image-colors';



const {width: windowWidth} = Dimensions.get('window');

export const HomeScreen = () => {

    const {isLoading, nowPlaying, popular, topRated, upcoming} = useMovies();
    const {top} = useSafeAreaInsets();

    const getPosterColors = async(index: number) => {
        const movie = nowPlaying[index];
        const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
        const colors = await ImageColors.getColors(uri, {});
        console.log(colors);
        
        
    }



    if(isLoading) {
        return(
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <ActivityIndicator color="red" size={100} />
            </View>
        )
    }

    return (
        <GradientBackground>
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
                onSnapToItem={index => getPosterColors(index)}
            />
            </View>
            {/* peliculas populares */}
           <HorizontalSlider title="Populares" movies={popular}  />
           <HorizontalSlider title="Top Rated" movies={topRated}  />
           <HorizontalSlider title="Upcoming" movies={upcoming}  />
        </View> 
        </ScrollView>
        </GradientBackground>
    )
}
