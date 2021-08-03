import React, { useState } from 'react'
import {  Text, TouchableOpacity, View } from 'react-native'

export const ContadorScreen = () => {

    const [contador, setContador] = useState(10);

    return (
        <View style={{
            flex: 1,
            justifyContent: 'center'
        }}>
            <Text style={{
                fontSize: 40,
                textAlign: 'center',
                top: -10
            }}>Contador: {contador}</Text>
            <TouchableOpacity
                onPress={() => setContador(contador+1)}
            >
                <View style={{
                    backgroundColor: 'red',
                    borderRadius: 100
                }}>
                    <Text>+1</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}
