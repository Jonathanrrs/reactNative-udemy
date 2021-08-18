import React, { useEffect } from 'react';
import { Button, Text, View } from 'react-native';
import movieDb from '../api/movieDB';


import { MovieDBNowPlaying } from '../interfaces/movieInterface';


export const HomeScreen = () => {

    useEffect(() => {
        
        movieDb.get<MovieDBNowPlaying>('now_playing')
            .then(resp => {
                console.log(resp.data.results[0].title);
                
            })

    }, [])

    return (
        <View>
            <Text>Homescreen</Text>
        </View>
    )
}
