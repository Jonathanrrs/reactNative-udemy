import React from 'react'
import { Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { Cast } from '../interfaces/creditsInterface'
import { MovieFull } from '../interfaces/movieInterface'
import currencyFormatter from 'currency-formatter'

interface Props {
    movieFull: MovieFull;
    cast: Cast[];
}

export const MovieDetails = ({ movieFull, cast }: Props) => {
    return (
        <>
            {/* detalles */}
            <View style={{ marginHorizontal: 20 }}>
                <View style={{ flexDirection: 'row' }}>
                    <Icon
                        name="star-outline"
                        color="grey"
                        size={16}
                    />
                    <Text> {movieFull.vote_average}</Text>
                    <Text style={{ marginLeft: 5 }}>
                        - {movieFull.genres.map(g => g.name).join(', ')}
                    </Text>
                </View>
                {/* historia */}
                <Text style={{fontSize: 23, marginTop: 10, fontWeight: 'bold'}}>
                    Historia
                </Text>
                <Text style={{fontSize: 16}}>{movieFull.overview}</Text>
                {/* presupuesto */}
                <Text style={{fontSize: 23, marginTop: 10, fontWeight: 'bold'}}>
                    Presupuesto
                </Text>
                <Text style={{fontSize: 18}}>{currencyFormatter.format(movieFull.budget, {code: 'USD'})}</Text>
            </View>
        </>
    )
}
