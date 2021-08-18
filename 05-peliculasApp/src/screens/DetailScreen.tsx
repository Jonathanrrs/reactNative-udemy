import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { Text, View } from 'react-native'
// import { Movie } from '../interfaces/movieInterface';
import { RootStackParams } from '../navigation/Navigation';

interface Props extends StackScreenProps<RootStackParams, 'DetailScreen'>{}

export const DetailScreen = ({route}: Props) => {

    const movie = route.params;
    
    

    return (
        <View>
            <Text>Detail screen</Text>
            <Text>{movie.title}</Text>
        </View>
    )
}
