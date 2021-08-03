import React, { useState } from 'react'
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native'

export const ContadorScreen = () => {

    const [contador, setContador] = useState(10);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Contador: {contador}</Text>
            <TouchableOpacity
                onPress={() => setContador(contador + 1)}
            >
                <View style={styles.buttonIncrementar}>
                    <Text>+1</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    title: {
        fontSize: 40,
        textAlign: 'center',
        top: -10
    },
    buttonIncrementar: {
        backgroundColor: 'red',
        borderRadius: 100
    }
})