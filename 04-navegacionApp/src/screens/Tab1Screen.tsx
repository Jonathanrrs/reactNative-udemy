import React from 'react'
import { useEffect } from 'react'
import { Text, View } from 'react-native'

export const Tab1Screen = () => {

    useEffect(() => {
       console.log('tab1screen effect');
        
    }, []);

    return (
        <View>
            <Text>Tab1Screen</Text>
        </View>
    )
}
