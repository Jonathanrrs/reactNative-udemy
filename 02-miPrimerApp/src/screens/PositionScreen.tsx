import React from 'react';
import { StyleSheet, View } from 'react-native';

export const PositionScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.cajaMorada} />
            <View style={styles.cajaNaranja} />
            <View style={styles.cajaVerde} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#28C4D9',
        flex: 1,
        // width: 400,
        // height: 400

        // justifyContent: 'center',
        // alignItems: 'center'
    },
    cajaMorada: {
        width: 100,
        height: 100,
        backgroundColor: '#5856D6',
        borderWidth: 10,
        borderColor: 'white',
        position: 'absolute',
        right: 0,
    },
    cajaNaranja: {
        width: 100,
        height: 100,
        backgroundColor: '#F0A23B',
        borderWidth: 10,
        borderColor: 'white',
        position: 'absolute',
        right: 0,
        bottom: 0
    },
    cajaVerde: {
        width: 100,
        height: 100,
        backgroundColor: 'green',
        borderWidth: 10,
        borderColor: 'white',
        position: 'absolute',
        bottom: 0,
        /* ...StyleSheet.absoluteFillObject es igual a poner en 0 top, left, right, left en position absolute */
    }
});
