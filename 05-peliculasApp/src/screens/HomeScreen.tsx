import React from 'react';
import { ActivityIndicator, Text, View } from 'react-native';
import { useMovies } from '../hooks/useMovies';




export const HomeScreen = () => {

    const {peliculasEnCine, isLoading} = useMovies();
    console.log(peliculasEnCine[0]?.title);
    
    if(isLoading) {
        return(
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <ActivityIndicator color="red" size={100} />
            </View>
        )
    }

    return (
        <View>
            <Text>Homescreen</Text>
        </View>
    )
}
