import React from 'react'
import { Text, View } from 'react-native'
import Icon  from 'react-native-vector-icons/Ionicons'
import { Cast } from '../interfaces/creditsInterface'
import { MovieFull } from '../interfaces/movieInterface'

interface Props {
    movieFull: MovieFull;
    cast: Cast[];
}

export const MovieDetails = ({movieFull, cast}: Props) => {
    return (
        <>
            {/* detalles */}
            <View style={{marginHorizontal: 20}}>
                <View style={{flexDirection: 'row'}}>
                <Icon
                    name="star-outline"
                    color="grey"
                    size={16}
                />
                <Text> {movieFull.vote_average}</Text>
                <Text style={{marginLeft: 5}}>
                    - {movieFull.genres.map(g => g.name).join(', ')}
                </Text>
                </View>
            </View>
        </>
    )
}
