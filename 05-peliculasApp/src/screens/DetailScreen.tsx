import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { ActivityIndicator, Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import { RootStackParams } from '../navigation/Navigation';

import { useMovieDetails } from '../hooks/useMovieDetails';
import { MovieDetails } from '../components/MovieDetails';
import Icon from 'react-native-vector-icons/Ionicons'

const screenHeight = Dimensions.get('screen').height;

interface Props extends StackScreenProps<RootStackParams, 'DetailScreen'>{}

export const DetailScreen = ({route, navigation}: Props) => {

    const movie = route.params;
    const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
    
    const {isLoading, cast, movieFull} = useMovieDetails(movie.id);



    return (
        <ScrollView>
        <View style={styles.imageContainer}>
            <View style={styles.imageBorder}>
            <Image 
                source={{uri}}
                style={styles.posterImage}
            />
            </View>
        </View>
        <View style={styles.marginContainer}>
            <Text style={styles.subTile}>{movie.original_title}</Text>
            <Text style={styles.title}>{movie.title}</Text>
        </View>
        <View>
            {
                isLoading 
                    ? <ActivityIndicator size={30} color="grey" style={{marginTop: 20}} />
                    : <MovieDetails movieFull={movieFull!} cast={cast} />
                
            }
        </View>
        {/* Botón para cerrar */}
        <TouchableOpacity
            onPress={() => navigation.pop()}
             style={styles.backButton}
        >
        <Icon 
            color="white"
            name="arrow-back-outline"
            size={60}
           
        />
        </TouchableOpacity>
        </ScrollView>

    )
}

const styles = StyleSheet.create({
    imageContainer: {
        width: '100%',
        
        height: screenHeight * 0.7,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.24,
        shadowRadius: 3.84,

        elevation: 9,
        borderBottomEndRadius: 25,
        borderBottomStartRadius: 25,
       
        
    },
    imageBorder: {
        flex: 1,
        overflow: 'hidden',
        borderBottomEndRadius: 25,
        borderBottomStartRadius: 25,
    },
    posterImage: {
        flex: 1,
    },
    marginContainer: {
        marginHorizontal: 20,
        marginTop: 20
    },
    subTile: {
        fontSize: 18,
        opacity: 0.8
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    backButton: {
        position: 'absolute',
        zIndex: 999,
        elevation: 9,
        top: 30,
        left: 5
    }
}); 


